import axios from "axios";

const guestRequest = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

const authRequest = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
}

authRequest.interceptors.request.use(authInterceptor);

export {
    guestRequest,
    authRequest
}