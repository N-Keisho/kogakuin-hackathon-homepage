export interface User {
    id: number;
    username: string;
}

export interface Login {
    email: string;
    password: string;
}

export interface Register {
    username: string;
    email: string;
    password: string;
}

export interface LoginResponse {
    code: number;
    expire: string;
    token: string;
}
