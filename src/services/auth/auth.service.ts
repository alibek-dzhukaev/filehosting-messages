import { inject } from 'tsyringe'
import { scope } from '@/config/scope.di'

import { ApiService } from '../api'
import { SigninDto, SignupDto } from './types';

@scope.container()
export class AuthService {
	public constructor(
		@inject(ApiService.name) private readonly apiService: ApiService
	) {
	}

	public async signin(signinDto: SigninDto) {
		await this.apiService.post('auth/login', signinDto)
	}

	public async signup(signupDto: SignupDto) {
		await this.apiService.post('auth/register', signupDto)
	}
}