export const cardTemplate = document.querySelector('#card-template').content.querySelector('.places__item');

export function createCardElement(data, deleteCard, like, openPopupImage) {
    const cardElement = cardTemplate.cloneNode(true);
    const cardElementImage = document.querySelector('.popup_type_image'); 
    const deleteButton = cardElement.querySelector('.card__delete-button');
    const cardTitle = cardElement.querySelector('.card__title');
    const cardImage = cardElement.querySelector('.card__image');
    const likeButton = cardElement.querySelector('.card__like-button');

    cardTitle.textContent = data.name;
    cardImage.src = data.link;
    cardImage.alt = data.name;
    


    deleteButton.addEventListener('click', () => deleteCard(cardElement));
    likeButton.addEventListener('click', () => {
        like(likeButton);
    })
    cardElementImage.addEventListener('click', () => {
        openPopupImage(cardImage.src, cardImage.alt);
    });


    return cardElement;
}

export function removeCard(card) {
card.remove();
}
//Лайк на карточку

export function like(likeButton) {
    likeButton.classList.toggle('card__like-button_is-active');
  }
