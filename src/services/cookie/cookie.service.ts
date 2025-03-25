import {scope} from "@config/scope.di";
import {CookieNames} from "@services/cookie/constants";

@scope.container()
export class CookieService {
    public get xsrfToken() {
        return this.getCookie(CookieNames.XSRF_TOKEN)
    }

    private getCookie(name: string) {
        return this.documentCookies
            .split('; ')
            .find(row => row.startsWith(`${name}=`))
            ?.split('=')[1] ?? ''
    }


    private get documentCookies () {
        return document.cookie;
    }
}