import { deleteCardApi, setLikeApi } from './api';

export function deleteCard(cardElement, cardId) {
	deleteCardApi(cardId)
		.then(() => {
			cardElement.remove();
		})
		.catch(err => {
			console.log(`Ошибка при удалении карточки: ${err}`);
		})
}

export function setLike(likeButton, cardId, likesCount) {
	const isLiked = likeButton.classList.contains('card__like-button_is-active');

	setLikeApi(cardId, isLiked)
		.then(updatedCard => {
			likeButton.classList.toggle('card__like-button_is-active');
			likesCount.textContent = updatedCard.likes.length;
		})
		.catch(err => console.log(err))
}

export function createCardElement(cardData, deleteCard, setLike, openPopupImage, userId) {
	const cardTemplate = document.querySelector('#card-template').content.querySelector('.places__item');
	const card = cardTemplate.cloneNode(true);

	const cardTitle = card.querySelector('.card__title');
	const cardImage = card.querySelector('.card__image');
	const deleteButton = card.querySelector('.card__delete-button');
	const cardElementImage = card.querySelector('.card__image');
	const likeButton = card.querySelector('.card__like-button');
	const likesCount = card.querySelector('.card__like-count');
	likesCount.textContent = cardData.likes.length;

	cardTitle.textContent = cardData.name;
	cardImage.src = cardData.link;
	cardImage.alt = cardData.name;

	deleteButton.addEventListener('click', () => deleteCard(card));

	cardElementImage.addEventListener('click', () => {
			openPopupImage(cardData.link, cardData.name);
		})

	likeButton.addEventListener('click', () => {
			setLike(likeButton, cardData._id, likesCount);
		})

	const userHasLiked = cardData.likes.some(like => like._id === userId);
	if (userHasLiked) {
			likeButton.classList.add('card__like-button_is-active');
	}

	if (cardData.owner._id !== userId) {
		deleteButton.remove();
	} else {
		deleteButton.addEventListener('click', () => {
			deleteCard(card, cardData._id)
		})
	}

	return card;
}