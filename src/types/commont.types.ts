export interface User {
    name: string;
    email: string;
    password: string;
    profilePicture: string;
    confirmPassword: string;
}
export interface Login {
    email: string;
    password: string;
}