import { scope } from '@config/scope.di'

import { RouterService } from './router'
import { UsersService } from './users'
import { ApiService } from './api'
import { AuthService } from './auth'

export const routerService = scope.resolve(RouterService);
export const apiService = scope.resolve(ApiService);
export const authService = scope.resolve(AuthService);
export const usersService = scope.resolve(UsersService);
