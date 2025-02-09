const apiConfig = {
    Url: 'https://mesto.nomoreparties.co/v1/pwff-cohort-1',
    headers: {
        authorization: 'fd6b19c2-a28e-4657-990a-229a88c051b3',
        'Content-Type': 'application/json',
    }
}

function request(url, options) {
    return fetch(url, options).then(handleResponse);
}

export const handleResponse = res => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
};

export const fetchUserData = () => {
        return request(`${apiConfig.Url}/users/me`, {
            headers: apiConfig.headers,
        });
};

export const fetchInitialCards = () => {
    return request(`${apiConfig.Url}/cards`, {
        headers: apiConfig.headers,
    });
};

export const updateUserData = (name, about) => {
    return request(`${apiConfig.Url}/users/me`, {
        method: 'PATCH',
        headers: apiConfig.headers,
        body: JSON.stringify({
            name,
            about,
        }),
    });
};

export const addNewCard = (name, link) => {
    return request(`${apiConfig.Url}/cards`, {
        method: 'POST',
        headers: apiConfig.headers,
        body: JSON.stringify({
            name,
            link,
        })
    });
};

export const setLikeApi = (cardId, isLiked) => {
    return request(`${apiConfig.Url}/cards/likes/${cardId}`, {
        method: isLiked ? 'DELETE' : 'PUT',
        headers: apiConfig.headers,
    });
};

export const deleteCardApi = cardId => {
    return request(`${apiConfig.Url}/cards/${cardId}`, {
        method: 'DELETE',
        headers: apiConfig.headers,
    });
};

export const updateAvatar = avatar => {
    return request(`${apiConfig.Url}/users/me/avatar`, {
        method: 'PATCH',
        headers: apiConfig.headers,
        body: JSON.stringify({
            avatar,
        })
    });
};
