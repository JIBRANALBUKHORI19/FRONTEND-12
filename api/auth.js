import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000"
});

const auth = {
    register : (data) => api.post('/register', data),
    login : (data) => api.post('/login', data, {withCredentials: true}),
    logout : () => api.post ('/logout'),
};

export default auth;