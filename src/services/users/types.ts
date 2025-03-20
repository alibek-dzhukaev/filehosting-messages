import {Role} from "@services/auth/types";

export interface User {
    readonly address: string | null
    readonly city: string | null;
    readonly dateOfBirthday: string | null
    readonly email: string | null
    readonly firstName: string | null
    readonly gender: string | null
    readonly id: string
    readonly lastName: string | null
    readonly phone: string | null
    readonly roles: Role[]
    readonly username: string
}