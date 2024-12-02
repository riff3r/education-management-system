import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import CookieService from './CookieService';

class BaseService {
    protected api: AxiosInstance;

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_APP_BACKEND_URL || 'https://school-management-system-backend-0b79.onrender.com'}/api`,
            headers: {
                'Content-Type': 'application/json',
            },
        });

        this.api.interceptors.request.use(
            (config: InternalAxiosRequestConfig) => {
                if (!config.url?.includes('/auth')) {
                    config.headers.Authorization = `Bearer ${CookieService.getCookie('secure_auth_access')}`;
                }
                return config;
            },
            (error) => Promise.reject(error)
        );

        this.api.interceptors.response.use(
            (response: AxiosResponse) => response,
            (error) => {
                return Promise.reject(error);
            }
        );
    }

    get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.api.get<T>(url, config);
    }

    post<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.api.post<T>(url, data, config);
    }

    put<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.api.put<T>(url, data, config);
    }

    delete<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.api.delete<T>(url, config);
    }
}

export default new BaseService;