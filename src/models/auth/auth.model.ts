import { scope } from '@config/scope.di'
import { makeAutoObservable } from 'mobx'

@scope.container()
export class AuthModel {
	// private isLoggedIn: boolean;

	public constructor() {
		makeAutoObservable(this, {}, {autoBind: true})
	}
}