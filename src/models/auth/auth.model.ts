import { makeAutoObservable } from 'mobx'

import { scope } from '@config/scope.di'
import { Role } from "@services/auth/types"
import {User} from "@services/users/types";

@scope.singleton()
export class AuthModel {
	public isAuthenticated = false;
	public role = Role.USER;
	public profile: User = {
		id: '',
		dateOfBirthday: '',
		gender: '',
		city: '',
		address: '',
		phone: '',
		email: '',
		lastName: '',
		firstName: '',
		username: '',
		roles: []
	}
	public username = ''
	public password = ''

	public constructor() {
		makeAutoObservable(this, {}, { autoBind: true })
	}
}