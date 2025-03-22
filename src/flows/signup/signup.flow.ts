import {scope} from "@config/scope.di";
import {SignupModel} from "@/models/signup";
import {AuthService} from "@services/auth";
import { RouterService } from '@/services/router'
import { PublicRoutes } from '@/layouts/PubicLayout/PublicLayout'

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
        await this.authService.signup(this.signupModel.signupConfig);
        this.signupModel.isLoading = false;
        this.routerService.navigate(PublicRoutes.LOGIN);
    }
}