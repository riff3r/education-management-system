import BaseService from './BaseService';

class AuthService extends BaseService {
    constructor() {
        super('/auth');
    }

    async login(credentials: ILoginCredentials): Promise<IResponse> {
        const response = await this.post<IResponse>('/login', credentials);
        return response.data;
    }
}

export default new AuthService();