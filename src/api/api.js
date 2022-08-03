import axios from 'axios'

const api = axios.create({
    baseURL: "https://62ea14dd3a5f1572e873a211.mockapi.io/api/",
});

export default api;