export interface ILoginRequest {
    email: string;
    password: string;
}

export interface ILoginResponse {
    user: IUser;
    tokens: ITokens;
}

export interface IUser {
    name: string;
    email: string;
}

export interface ITokens {
    access: {
        token: string;
        expires: number;
    };

    refresh: {
        token: string;
        expires: number;
    };
}