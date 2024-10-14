export const BASE_URL = 'https://norma.nomoreparties.space/api/';

// Универсальная функция для запросов
export const api = {
    get: async (endpoint, options = {}) => {
        const response = await fetch(`${BASE_URL}${endpoint}`, {
            method: 'GET',
            ...options,
        });
        return handleResponse(response);
    },

    post: async (endpoint, body, options = {}) => {
        const response = await fetch(`${BASE_URL}${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
            body: JSON.stringify(body),
            ...options,
        });
        return handleResponse(response);
    },

    patch: async (endpoint, body, options = {}) => {
        const response = await fetch(`${BASE_URL}${endpoint}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
            body: JSON.stringify(body),
            ...options,
        });
        return handleResponse(response);
    },

    // Другие методы, такие как PUT, DELETE, и т.д., можно добавить по аналогии
};

// Обработка ответа от сервера
const handleResponse = async (response) => {
    if (response.ok) {
        return response.json();
    } else {
        const error = await response.json();
        return Promise.reject(error);
    }
};
