import {Role} from "@services/auth/types";

export interface User {
    address: string | null
    city: string | null;
    dateOfBirthday: string | null
    email: string | null
    firstName: string | null
    gender: string | null
    id: string
    lastName: string | null
    phone: string | null
    roles: Role[]
    username: string
}

export interface CreateUserDto {
    readonly username: string;
    readonly password: string;
    readonly email?: string;
    readonly firstName?: string;
    readonly lastName?: string;
    readonly phone?: string;
    readonly address?: string;
    readonly city?: string;
    readonly dateOfBirthday?: string;
    readonly gender?: string;
    readonly roles?: Role[];
}

export type UpdateUserDto = Partial<Pick<CreateUserDto, Exclude<keyof CreateUserDto, 'password'>>>