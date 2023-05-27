export interface AuthResponse{
    token: string;
    result: boolean;
}

export interface AuthForm{
    username: string;
    password: string;
}