import { scope } from '@/config/scope.di'

import { ApiService } from '../api'
import { LoginDto, SignupDto } from './types';
import {inject} from "tsyringe";

@scope.container()
export class AuthService {
	public constructor(
		@inject(ApiService.name) private readonly apiService: ApiService
	) {
	}

	public async login(loginDto: LoginDto) {
		await this.apiService.post('auth/login', loginDto)
	}

	public async signup(signupDto: SignupDto) {
		await this.apiService.post('auth/register', signupDto)
	}
}