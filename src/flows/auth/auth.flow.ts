import {scope} from "@config/scope.di";
import {AuthModel} from "@/models/auth";
import {inject} from "tsyringe";
import {AuthService} from "@services/auth";

@scope.container()
export class AuthFlow {
    public constructor(
        @inject(AuthModel.name) private readonly authModel: AuthModel,
        @inject(AuthService.name) private readonly authService: AuthService,
    ) {
    }
    public async start() {
        await this.authService.signup(
            this.authModel.loginConfig
        )
    }
}