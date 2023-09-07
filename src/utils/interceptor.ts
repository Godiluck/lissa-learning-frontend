import axios from "axios";

const apiAuthService = process.env.REACT_APP_AUTH_SERVICE_ENDPOINT
const apiUserService = process.env.REACT_APP_USER_SERVICE_ENDPOINT

const createAxios = (baseUrl) => {
    const newAxios = axios.create({
        baseURL: baseUrl
    })
    newAxios.interceptors.request.use((config: any) => {
        const { token } = localStorage;
        if (apiUserService === baseUrl) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config
    });

    newAxios.interceptors.response.use(
        (response) => {
            return response;
        },
        async (error) => {
            if (error.response.status === 401) {
                const originalConfig = error.config;
                originalConfig.sent = true;
                // return newAxios(originalConfig);
            }

            return Promise.reject(error);
        }
    );
    return newAxios;
}

export const $AxiosUserService = createAxios(apiUserService)
export const $AxiosAuthService = createAxios(apiAuthService)