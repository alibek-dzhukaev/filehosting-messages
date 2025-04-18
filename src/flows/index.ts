import { scope } from '@config/scope.di';
import { AuthFlow } from '@flows/auth';
import { SignupFlow } from '@flows/signup';

export const signupFlow = scope.resolve(SignupFlow);
export const authFlow = scope.resolve(AuthFlow);
