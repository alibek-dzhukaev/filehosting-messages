import { scope } from '@config/scope.di'
import { makeAutoObservable } from 'mobx'
import { LoginDto, Role } from "@services/auth/types"

@scope.singleton()
export class AuthModel {
	private _isAuthenticated = true;
	private _role = Role.USER;

	private _username = ''
	private _password = ''

	public constructor() {
		makeAutoObservable(this, {}, { autoBind: true })
	}

	public get loginConfig(): LoginDto {
		return {
			username: this._username,
			password: this._password,
		}
	}

	public get username() {
		return this._username
	}
	public set username(val: string) {
		this._username = val
	}

	public get password() {
		return this._password
	}
	public set password(val: string) {
		this._password = val
	}

	public get isAuthenticated() {
		return this._isAuthenticated
	}
	public set isAuthenticated(val: boolean) {
		this._isAuthenticated = val
	}

	public get role() {
		return this._role
	}

	public set role(role: Role) {
		this._role = role
	}
}