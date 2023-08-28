import axios, {AxiosInstance} from "axios";

const apiUserService = process.env.REACT_APP_USER_SERVICE_ENDPOINT
const apiReports = process.env.REACT_APP_REPORTS_ENDPOINT

const createAxios = (baseUrl) => {
    const newAxios = axios.create({
        baseURL: baseUrl
    })
    newAxios.interceptors.request.use((config: any) => config);

    newAxios.interceptors.response.use(
        (response) => {
            return response;
        },
        async (error) => {
            if (error.response.status === 401) {
                const originalConfig = error.config;
                originalConfig.sent = true;
                return newAxios(originalConfig);
            }

            return Promise.reject(error);
        }
    );
    return newAxios;
}

export const $AxiosReports = createAxios(apiReports)
export const $AxiosUserService = createAxios(apiUserService)