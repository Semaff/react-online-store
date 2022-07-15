import axios from "axios";

const guestRequest = axios.create({
    baseURL: window.location.origin
});

const authRequest = axios.create({
    baseURL: window.location.origin
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