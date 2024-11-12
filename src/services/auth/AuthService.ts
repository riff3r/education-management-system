import BaseService from '../BaseService';
import { IResponse } from '../fetch';
import { ILoginRequest, ILoginResponse } from './authType';

class AuthService {
    async login(loginRequest: ILoginRequest): Promise<IResponse<ILoginResponse>> {
        const response = await BaseService.post<IResponse<ILoginResponse>>('/auth/login', loginRequest);
        return response.data;
    }
}

export default new AuthService();