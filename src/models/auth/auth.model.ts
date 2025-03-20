import { scope } from '@config/scope.di'
import {makeAutoObservable, reaction} from 'mobx'
import {LoginDto, Role} from "@services/auth/types";

@scope.singleton()
export class AuthModel {
	private _isAuthenticated = false;
	private _role = Role.USER;
	private _loginConfig: LoginDto = {
		username: '',
		password: ''
	}

	public constructor() {
		makeAutoObservable(this, {}, {autoBind: true})

		reaction(
			() => this._isAuthenticated,
			val => {
				console.log('val changed', val)
			}
		)
	}

	public get loginConfig() {
		return this._loginConfig;
	}
	public set loginConfig(dto) {
		Object.assign(this._loginConfig, dto)
	}

	public get isAuthenticated() {
		return this._isAuthenticated
	}
	public set isAuthenticated(val: boolean) {
		this._isAuthenticated = val
	}

	public get role() {
		return this._role;
	}

	public set role(role: Role) {
		this._role = role;
	}
}