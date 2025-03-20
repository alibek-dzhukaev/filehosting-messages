import {scope} from "@config/scope.di";
import {SignupFlow} from "@flows/signup";
import {AuthFlow} from "@flows/auth";

export const signupFlow = scope.resolve(SignupFlow)
export const authFlow = scope.resolve(AuthFlow)
