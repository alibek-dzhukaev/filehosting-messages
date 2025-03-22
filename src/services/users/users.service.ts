import {scope} from '@config/scope.di'
import {ApiService} from '../api'
import {User} from "@services/users/types";
import {UsersModel} from "@/models/users";

@scope.container()
export class UsersService {
    public constructor(
        @scope.inject(ApiService) private readonly apiService: ApiService,
        @scope.inject(UsersModel) private readonly usersModel: UsersModel
    ) {
    }

    public async getUsers() {
        this.usersModel.users = await this.apiService.get<User[]>('users')
    }
}