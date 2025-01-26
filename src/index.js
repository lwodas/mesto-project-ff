import { createCardElement, removeCard, like } from "./components/card.js";
import { closeModal, openModal } from "./components/modal.js";
import { enableValidation, clearValidation } from "./components/validation.js";
import {
  addNewCard,
  updateUserData,
  fetchInitialCards,
  fetchUserData,
  updateAvatar,
} from "./components/api.js";
import "./styles/index.css";
const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".places__item");
const popupProfileEdit = document.querySelector(".popup_type_edit");
const cardList = document.querySelector(".places__list");
const popUp = document.querySelector(".popup");

const popupTypeImage = document.querySelector(".popup_type_image");
const popupImage = popupTypeImage.querySelector(".popup__image");
const popupCaption = popupTypeImage.querySelector(".popup__caption");

const popupClose = document.querySelectorAll(".popup__close");

const profileInfo = document.querySelector(".profile__info");
const profileTitle = profileInfo.querySelector(".profile__title");
const profileDescription = profileInfo.querySelector(".profile__description");
const profileEditButton = profileInfo.querySelector(".profile__edit-button");

const editAvatarPopup = document.querySelector(".popup_type_avatar");
const editAvatarForm = document.querySelector(
  '.popup__form[name="edit-avatar"]'
);
const avatarUrlInput = editAvatarForm.querySelector(
  ".popup__input_type_avatar"
);

const popupEditProfileForm = document.querySelector(
  '.popup__form[name="edit-profile"]'
);
const inputTypeName = popupEditProfileForm.querySelector(
  ".popup__input_type_name"
);
const inputTypeDescription = popupEditProfileForm.querySelector(
  ".popup__input_type_description"
);
const popupTypeEdit = document.querySelector(".popup_type_edit");

const popupTypeNewCard = document.querySelector(".popup_type_new-card");
const profileAddButton = document.querySelector(".profile__add-button");

const popupNewCardForm = document.querySelector(
  '.popup__form[name="new-place"]'
);
const inputTypeCardName = popupNewCardForm.querySelector(
  ".popup__input_type_card-name"
);
const inputTypeUrl = popupNewCardForm.querySelector(".popup__input_type_url");

popupClose.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => {
    if (popup) {
      closeModal(popup);
    }
  });
});

// Профиль

profileEditButton.addEventListener("click", () => {
  inputTypeName.value = profileTitle.textContent;
  inputTypeDescription.value = profileDescription.textContent;
  openModal(popupProfileEdit);
});

popupEditProfileForm.addEventListener("submit", handleProfileSubmit);

function handleProfileSubmit(evt) {
  evt.preventDefault();
  renderLoading(true, popupTypeEdit);

  const nameInput = inputTypeName.value;
  const jobInput = inputTypeDescription.value;

  updateUserData(nameInput, jobInput)
    .then((userData) => {
      profileTitle.textContent = userData.name;
      profileDescription.textContent = userData.about;
      closeModal(popupTypeEdit);
    })
    .catch((err) => console.log(err))
    .finally(() => {
      renderLoading(false, popupTypeEdit);
    });
}

profileAvatar.addEventListener("click", () => {
  editAvatarForm.reset();
  clearValidation(editAvatarForm, config);
  openModal(editAvatarForm);
});

function handleEditAvatarSubmit(evt) {
  evt.preventDefault();
  renderLoading(true, editAvatarForm);

  const avatarUrl = avatarUrlInput.value;
  updateAvatar(avatarUrl)
    .then((avatar) => {
      profileAvatar.style.backgroundImage = `url(${avatar.avatar})`;
      editAvatarForm.reset();
      closeModal(editAvatarPopUp);
    })
    .catch((err) => console.log(err))
    .finally(() => {
      renderLoading(false, editAvatarForm);
    });
}

editAvatarForm.addEventListener('submit', handleEditAvatarSubmit);

// Новая карточка
profileAddButton.addEventListener("click", () => {
  clearValidation(popupEditProfileForm, config);
  openModal(popupTypeNewCard);
});

popupNewCardForm.addEventListener("submit", handleAddCardSubmit);

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  renderLoading(true, popupNewCardForm);

  const cardName = inputTypeCardName.value;
  const imageUrl = inputTypeUrl.value;

  addNewCard(cardName, imageUrl)
    .then((card) => {
      const newCard = createCardElement(
        card,
        deleteCard,
        setLike,
        openPopupImage,
        currentUserId
      );
      addCard(newCard, true);
      popupNewCardForm.reset();
      closeModal(popupTypeNewCard);
    })
    .catch((err) => console.error(err))
    .finally(() => {
      renderLoading(false, popupNewCardForm);
    });
}

function addCard(cardElement, cardPosition) {
  if (cardPosition) {
    cardList.prepend(
      createCardElement(cardElement, removeCard, like, openPopupImage)
    );
  } else {
    cardList.append(
      createCardElement(cardElement, removeCard, like, openPopupImage)
    );
  }
}

Promise.all([fetchUserData(), fetchInitialCards()])
  .then(([userData, initialCards]) => {
    currentUserId = userData._id;
    profileTitle.textContent = userData.name;
    profileDescription.textContent = userData.about;
    profileAvatar.style.backgroundImage = `url(${userData.avatar})`;

    initialCards.forEach((card) => {
      const newCard = createCardElement(
        card,
        deleteCard,
        setLike,
        openPopupImage,
        currentUserId
      );
      addCard(newCard);
    });
  })
  .catch((error) => console.log(error));

const renderLoading = (isLoading, formElement) => {
  const buttonElement = formElement.querySelector(".popup__button");

  if (isLoading) {
    buttonElement.setAttribute("data-text", buttonElement.textContent);
    buttonElement.textContent = "Сохранение...";
  } else {
    buttonElement.textContent = buttonElement.getAttribute("data-text");
    buttonElement.removeAttribute("data-text");
  }
};

//Попап картинки

export function openPopupImage(cardImageSrc, cardImageAlt) {
  popupImage.src = cardImageSrc;
  popupImage.alt = cardImageAlt;
  popupCaption.textContent = cardImageAlt;
  openModal(popupTypeImage);
}

//Валидация

const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__submit_inactive",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

enableValidation(config);
