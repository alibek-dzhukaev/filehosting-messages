import { scope } from '@config/scope.di'
import { AuthModel } from './auth'
import {UsersModel} from "@/models/users";
import {SignupModel} from "@/models/signup";

export const authModel = scope.resolve(AuthModel);
export const usersModel = scope.resolve(UsersModel);
export const signupModel = scope.resolve(SignupModel)
