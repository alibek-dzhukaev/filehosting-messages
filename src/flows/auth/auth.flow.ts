import {scope} from "@config/scope.di";
import {AuthModel} from "@/models/auth";
import {AuthService} from "@services/auth";
import { RouterService } from '@/services/router'
import { PrivateRoutes } from '@/layouts/PrivateLayout/routes'

@scope.container()
export class AuthFlow {
    public constructor(
        @scope.inject(AuthModel) private readonly authModel: AuthModel,
        @scope.inject(AuthService) private readonly authService: AuthService,
        @scope.inject(RouterService) private readonly routerService: RouterService,
    ) {
    }
    public async start() {
        await this.authService.login({
            username: this.authModel.username,
            password: this.authModel.password
        })
        this.routerService.navigate(PrivateRoutes.FEED);
    }
}