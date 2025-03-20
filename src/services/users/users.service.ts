import {scope} from '@config/scope.di'
import {ApiService} from '../api'
import {inject} from "tsyringe";
import {User} from "@services/users/types";
import {UsersModel} from "@/models/users";

@scope.container()
export class UsersService {
    public constructor(
        @inject(ApiService.name) private readonly apiService: ApiService,
        @inject(UsersModel.name) private readonly usersModel: UsersModel
    ) {
    }

    public async getUsers() {
        this.usersModel.users = await this.apiService.get<User[]>('users')
    }
}