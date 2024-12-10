//открытие и закрытие попапа

export function openModal(popup) {
    if (!popup.classList.contains('popup_is-opened')) {
        popup.classList.add('popup_is-opened');
        document.addEventListener('keydown', closePopupByEsc);
        popup.addEventListener('click', closePopupByOverlay);
    }
}

export function closeModal(popup) {
    if (popup) {
        popup.classList.remove('popup_is-opened');
        document.removeEventListener('keydown', closePopupByEsc);
        popup.removeEventListener('click', closePopupByOverlay);
    }
}

// Варианты закрытия 

function closePopupByEsc(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_is-opened');
		if (openedPopup) {
			closeModal(openedPopup);
        }
    }
}

function closePopupByOverlay(evt) {
    if (evt.target === evt.currentTarget) {
        closeModal(evt.currentTarget);
    }
}