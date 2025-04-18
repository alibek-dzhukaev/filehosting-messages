import {makeAutoObservable} from "mobx";

import {scope} from "@config/scope.di";

@scope.singleton()
export class SignupModel {
    private _isLoading = false;
    private _username = '';
    private _password = '';
    private _confirmPassword = '';
    
    public constructor() {
        makeAutoObservable(this, {}, {autoBind: true})
    }

    public get password() {
        return this._password
    }
    public set password(val: string) {
        this._password = val;
    }

    public get confirmPassword() {
        return this._confirmPassword;
    }
    public set confirmPassword(val: string) {
        this._confirmPassword = val;
    }

    public get username() {
        return this._username
    }
    public set username(val: string) {
        this._username = val;
    }

    public get isLoading() {
        return this._isLoading;
    }
    public set isLoading(val: boolean) {
        this._isLoading = val;
    }
}