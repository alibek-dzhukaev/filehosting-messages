import {scope} from "@config/scope.di";
import {SignupModel} from "@/models/signup";
import {AuthService} from "@services/auth";
import { RouterService } from '@/services/router'
import { PublicRoutes } from '@/layouts/PubicLayout/routes'

@scope.container()
export class SignupFlow {
    public constructor(
        @scope.inject(SignupModel) private readonly signupModel: SignupModel,
        @scope.inject(AuthService) private readonly authService: AuthService,
        @scope.inject(RouterService) private readonly routerService: RouterService
    ) {
    }
    public async start() {
        this.signupModel.isLoading = true;
        await this.authService.signup({
            username: this.signupModel.username,
            password: this.signupModel.password
        });
        this.signupModel.isLoading = false;
        this.routerService.navigate(PublicRoutes.LOGIN);
    }
}