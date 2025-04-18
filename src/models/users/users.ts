import { makeAutoObservable } from 'mobx';

import { scope } from '@config/scope.di';
import { User } from '@services/users/types';

@scope.singleton()
export class UsersModel {
  private _users: User[] = [];

  public constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  public get users() {
    return this._users;
  }

  public set users(val: User[]) {
    this._users = val;
  }
}
