import { scope } from '@/config/scope.di'

import { ApiService } from '../api'
import {AuthenticatedUser, LoginDto, SignupDto} from './types';
import {AuthModel} from "@/models/auth";

@scope.container()
export class AuthService {
	public constructor(
		@scope.inject(ApiService) private readonly apiService: ApiService,
		@scope.inject(AuthModel) private readonly authModel: AuthModel,
	) {
	}

	public async login(loginDto: LoginDto) {
		await this.apiService.post('auth/login', loginDto)
		await this.me()
	}

	public async signup(signupDto: SignupDto) {
		await this.apiService.post('auth/register', signupDto)
		await this.me()
	}

	public async me() {
		const authenticatedUser = await this.apiService.get<AuthenticatedUser>('auth/me')
		this.authModel.isAuthenticated = Boolean(authenticatedUser)
		this.authModel.role = authenticatedUser.roles[0]
	}
}