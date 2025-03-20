import {scope} from "@config/scope.di";
import {inject} from "tsyringe";
import {SignupModel} from "@/models/signup";
import {AuthService} from "@services/auth";

@scope.container()
export class SignupFlow {
    public constructor(
        @inject(SignupModel.name) private readonly signupModel: SignupModel,
        @inject(AuthService.name) private readonly authService: AuthService,
    ) {
    }
    public async start() {
        await this.authService.signup(
            this.signupModel.signupConfig
        )
    }
}