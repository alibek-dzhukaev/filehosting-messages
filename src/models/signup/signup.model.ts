import {scope} from "@config/scope.di";
import {makeAutoObservable} from "mobx";
import {SignupDto} from "@services/auth/types";

@scope.container()
export class SignupModel {
    private _signupConfig: SignupDto = {
        username: '',
        password: ''
    }
    public constructor() {
        makeAutoObservable(this, {}, {autoBind: true})
    }

    public get signupConfig() {
        return this._signupConfig;
    }
    public set signupConfig(dto) {
        Object.assign(this._signupConfig, dto)
    }
}