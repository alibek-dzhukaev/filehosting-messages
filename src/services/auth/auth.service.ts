import {scope} from '@/config/scope.di'

import {ApiService} from '../api'
import {AuthenticatedUser, LoginDto, SignupDto} from './types';
import {AuthModel} from "@/models/auth";
import {User} from "@services/users/types";

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

	public async logout() {
		await this.apiService.post('auth/logout')
	}

	public async signup(signupDto: SignupDto) {
		await this.apiService.post('auth/register', signupDto)
	}

	public async me() {
		const authenticatedUser = await this.apiService.get<AuthenticatedUser>('auth/me')
		this.authModel.isAuthenticated = Boolean(authenticatedUser)
		this.authModel.role = authenticatedUser.roles[0]
	}

	public async getProfile() {
		const profile = await this.apiService.post<User>("users/profile")
		this.authModel.profile.id = profile.id ?? ''
		this.authModel.profile.username = profile.username ?? ''
		this.authModel.profile.address = profile.address ?? ''
		this.authModel.profile.city = profile.city ?? ''
		this.authModel.profile.dateOfBirthday = profile.dateOfBirthday ?? ''
		this.authModel.profile.email = profile.email ?? ''
		this.authModel.profile.firstName = profile.firstName ?? ''
		this.authModel.profile.gender = profile.gender ?? ''
		this.authModel.profile.lastName = profile.lastName ?? ''
		this.authModel.profile.phone = profile.phone ?? ''
		this.authModel.profile.roles = profile.roles ?? ''
	}
}