export interface LoginDto {
	readonly username: string;
	readonly password: string;
}

export interface SignupDto {
	readonly username: string;
	readonly password: string;
}

export interface AuthenticatedUser {
	id: string;
	username: string;
	roles: Role[];
}

export const enum Role {
	SUPER_ADMIN = 'super_admin',
	ADMIN = 'admin',
	USER = 'user',
}
