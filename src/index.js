
import './styles/index.css';
const cardTemplate = document.querySelector('#card-template').content.querySelector('.places__item');

const cardList = document.querySelector('.places__list');

    function createCardElement(data, deleteCard) {
        const cardElement = cardTemplate.cloneNode(true);
        const deleteButton = cardElement.querySelector('.card__edit-button');
        const cardTitle = cardElement.querySelector('.card__title');
        const cardImage = cardElement.querySelector('.card__image');

        cardTitle.textContent = data.name;
        cardImage.src = data.link;
        cardImage.alt = data.name;

        deleteButton.addEventListener('click', () => deleteCard(cardElement));

        return cardElement;
    }

function removeCard(card) {
    card.remove();
}

initialCards.forEach(element => {
    cardList.append(createCardElement(element, removeCard));
});

