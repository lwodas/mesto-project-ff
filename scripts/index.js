// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content.querySelector('.places__item');
// @todo: DOM узлы
const cardList = document.querySelector('.places__list');
// @todo: Функция создания карточки
    function createCardElement(cardName, cardLink, deleteCard) {
        const cardElement = cardTemplate.cloneNode(true);
        const deleteButton = cardElement.querySelector('.card__delete-button');
        const cardTitle = cardElement.querySelector('.card__title');
        const cardImage = cardElement.querySelector('.card__image');

        cardTitle.textContent = cardName;
        cardImage.src = cardLink;
        cardImage.alt = cardName;

        deleteButton.addEventListener('click', () => deleteCard(cardElement));

        return cardElement;
    }
// @todo: Функция удаления карточки
function cardRemove(card) {
    card.remove();
}
// @todo: Вывести карточки на страницу

initialCards.forEach(element => {
    cardList.append(createCardElement(element.name, element.link, cardRemove));
});