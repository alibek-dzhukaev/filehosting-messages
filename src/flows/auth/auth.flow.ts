
import { PrivateRoutes } from '@/layouts/PrivateLayout/routes'
import {PublicRoutes} from "@/layouts/PubicLayout/routes";
import {AuthModel} from "@/models/auth";
import { RouterService } from '@/services/router'
import {scope} from "@config/scope.di";
import {AuthService} from "@services/auth";

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
            password: this.authModel.password,
        });
        this.routerService.navigate(PrivateRoutes.FEED);
    }

    public async invalidateAuth() {
        await this.authService.logout();
        this.authModel.isAuthenticated = false;
        this.routerService.navigate(PublicRoutes.HOME);
    }
}