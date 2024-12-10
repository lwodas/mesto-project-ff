import { initialCards } from './cards';
import { createCardElement, removeCard, like } from './components/card.js';
import { closeModal, openModal } from './components/modal.js';
import './styles/index.css';
const cardTemplate = document.querySelector('#card-template').content.querySelector('.places__item');
const popupProfileEdit = document.querySelector('.popup_type_edit')
const cardList = document.querySelector('.places__list');
const popUp = document.querySelector('.popup');
const popupTypeImage = document.querySelector('.popup_type_image');
const popupImage = popupTypeImage.querySelector('.popup__image');
const popupCaption = popupTypeImage.querySelector('.popup__caption');
const popupClose = document.querySelectorAll('.popup__close');

const profileInfo = document.querySelector('.profile__info');
const profileTitle = profileInfo.querySelector('.profile__title');
const profileDescription = profileInfo.querySelector('.profile__description');
const profileEditButton = profileInfo.querySelector('.profile__edit-button');

const popupEditProfileForm = document.querySelector('.popup__form[name="edit-profile"]');
const inputTypeName = popupEditProfileForm.querySelector('.popup__input_type_name');
const inputTypeDescription = popupEditProfileForm.querySelector('.popup__input_type_description');
const popupTypeEdit = document.querySelector('.popup_type_edit');

const popupTypeNewCard = document.querySelector('.popup_type_new-card');
const profileAddButton = document.querySelector('.profile__add-button');

const popupNewCardForm = document.querySelector('.popup__form[name="new-place"]');
const inputTypeCardName = popupNewCardForm.querySelector('.popup__input_type_card-name');
const inputTypeUrl = popupNewCardForm.querySelector('.popup__input_type_url');

initialCards.forEach(element => {
    cardList.append(createCardElement(element, removeCard, like, openPopupImage));
});

popupClose.forEach(button => {
	const popup = button.closest('.popup');
	button.addEventListener('click', () => {
		if (popup) {
			closeModal(popup);
		}
	});
})

// Профиль



profileEditButton.addEventListener('click', () => {
    inputTypeName.value = profileTitle.textContent;
	inputTypeDescription.value = profileDescription.textContent;
	openModal(popupProfileEdit);
})

popupEditProfileForm.addEventListener('submit', handleProfileSubmit);

function handleProfileSubmit(evt) {
	evt.preventDefault();

	const nameInput = inputTypeName.value;
	const jobInput = inputTypeDescription.value;

	profileTitle.textContent = nameInput;
	profileDescription.textContent = jobInput;

    closeModal(popupTypeEdit);
}


// Новая карточка



profileAddButton.addEventListener('click', () => {
	openModal(popupTypeNewCard);
})

popupNewCardForm.addEventListener('submit', handleAddCardSubmit);

function handleAddCardSubmit(evt) {
	evt.preventDefault();
    
    const newCard = {
        name: inputTypeCardName.value,
        link: inputTypeUrl.value
    };
    
    addCard(newCard, true);
	popupNewCardForm.reset();
	closeModal(popupTypeNewCard);
}

function addCard(cardElement, cardPosition) {
	if (cardPosition) {
        cardList.prepend(createCardElement(cardElement, removeCard, like, openPopupImage));
	} else {
		cardList.append(createCardElement(cardElement, removeCard, like, openPopupImage));
	}
}


//Попап картинки

function openPopupImage(cardImageSrc, cardImageAlt) {
	popupImage.src = cardImageSrc;
	popupImage.alt = cardImageAlt;
	popupCaption.textContent = cardImageAlt;
	openModal(popupTypeImage);
}