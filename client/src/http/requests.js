import axios from "axios";

const guestRequest = axios.create({
    baseURL: "http://localhost:5000"
});

const authRequest = axios.create({
    baseURL: "http://localhost:5000"
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