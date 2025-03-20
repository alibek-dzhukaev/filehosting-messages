import { scope } from '@config/scope.di'
import { inject } from 'tsyringe'
import { ApiService } from '../api'

@scope.container()
export class UsersService {
		public constructor(
				@inject(ApiService.name) private readonly apiService: ApiService,
		) {}

		public async getUsers() {
			const users = await this.apiService.get('users')
			console.log(users)
		}
}