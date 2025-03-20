import { scope } from '@config/scope.di'
import { AuthModel } from './auth'

export const authModel = scope.resolve(AuthModel);
