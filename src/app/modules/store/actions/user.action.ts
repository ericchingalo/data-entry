import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';
import { ErrorMessage } from '../../models/error-message.module';

export enum UserActionTypes{
    LoadUser = '[User] Load User',
    LoadUserSuccess = '[User] Load User Success',
    LoadUserFail = '[User] LOad User Fail'
}

export class LoadUser implements Action{
    readonly type = UserActionTypes.LoadUser;
}

export class LoadUserSuccess implements Action{
    readonly type = UserActionTypes.LoadUserSuccess;
    constructor(public payload: User){}
}

export class LoadUserFail implements Action{
    readonly type = UserActionTypes.LoadUserFail;
    constructor(public error : ErrorMessage){}
}

export type UserActions = LoadUser | LoadUserFail | LoadUserSuccess;