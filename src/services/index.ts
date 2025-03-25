import { scope } from '@config/scope.di'

import { RouterService } from './router'
import { UsersService } from './users'
import { ApiService } from './api'
import { AuthService } from './auth'
import {StorageService} from "@services/storage/storage.service";
import {CookieService} from "@services/cookie";

export const routerService = scope.resolve(RouterService);
export const apiService = scope.resolve(ApiService);
export const authService = scope.resolve(AuthService);
export const usersService = scope.resolve(UsersService);
export const storageService = scope.resolve(StorageService)
export const cookieStorage = scope.resolve(CookieService)
