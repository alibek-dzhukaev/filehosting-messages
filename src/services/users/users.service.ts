import { UsersModel } from '@/models/users';
import { scope } from '@config/scope.di';
import { UpdateUserDto, User } from '@services/users/types';

import { ApiService } from '../api';

@scope.container()
export class UsersService {
  public constructor(
    @scope.inject(ApiService) private readonly apiService: ApiService,
    @scope.inject(UsersModel) private readonly usersModel: UsersModel,
  ) {}

  public async updateUser(id: string, updateUserDto: UpdateUserDto) {
    await this.apiService.patch(`users/${id}`, updateUserDto);
  }

  public async getUsers() {
    this.usersModel.users = await this.apiService.get<User[]>('users');
  }
}
