export interface AuthDetails {
    token: string
    first_name: string
    last_name: string
}

export interface AuthResponse {
  login: AuthDetails
}

export interface AuthForm {
    username: string
    password: string
}
