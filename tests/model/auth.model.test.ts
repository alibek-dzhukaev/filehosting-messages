import {AuthModel} from "../../src/models/auth";
import {scope} from "../../src/config/scope.di";

describe('AuthModel', () => {
    let authModel: AuthModel

    beforeEach(() => {
        authModel = scope.resolve(AuthModel)
    })

    it('should initialize with isAuthenticated = false', () => {
       expect(authModel.isAuthenticated).toBe(false)
    });
})