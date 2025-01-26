const apiConfig = {
    Url: 'https://mesto.nomoreparties.co/v1/pwff-cohort-1',
    headers: {
        authorzation: 'fd6b19c2-a28e-4657-990a-229a88c051b3',
        'Content-Type': 'application/json',
    }
}

export const handleResponse = res => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
}

export const fetchUserData = () => {
        return fetch(`${apiConfig.Url}/users/me`, {
            headers: apiConfig.headers,
        }).then(handleResponse);
}

export const fetchInitialCards = () => {
    return fetch(`${apiConfig.Url}/cards`, {
        headers: apiConfig.headers,
    }).then(handleResponse);
};

export const updateData = (name, about) => {
    return fetch(`${apiConfig.Url}/users/me`, {
        method: 'PATCH',
        headers: apiConfig.headers,
        body: JSON.stringify({
            name,
            about,
        })
    }).then(handleResponse);
};

export const addNewCard = (name, link) => {
    return fetch(`${apiConfig.Url}/cards`, {
        method: 'POST',
        headers: apiConfig.headers,
        body: JSON.stringify({
            name,
            link,
        })
    }).then(handleResponse);
};

export const setLikeApi = (cardId, isLiked) => {
    return fetch(`${apiConfig.Url}/cards/${cardId}`, {
        method: isLiked ? 'DELETE' : 'PUT',
        headers: apiConfig.headers,
    }).then(handleResponse);
};

export const updateAvatar = avatar => {
    return fetch(`${apiConfig.Url}/users/me/avatar`, {
        method: 'PATCH',
        headers: apiConfig.headers,
        body: JSON.stringify({
            avatar,
        })
    }).then(handleResponse);
};
