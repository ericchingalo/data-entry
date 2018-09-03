import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/internal/operators';

import { UserService } from '../../services/user.service'
import { User } from '../../models/user.model'
import { ErrorMessage } from '../../models/error-message.module';

import{
    UserActionTypes,
    LoadUserSuccess,
    LoadUserFail
} from '../actions'

@Injectable() export class UserEffect{
    constructor(private actions$ : Actions, private userService : UserService){}

    @Effect() loadUser$: Observable<any> = this.actions$.pipe(
        ofType(UserActionTypes.LoadUser),
        switchMap(() => this.userService.getCurrentUserDetails().pipe(
            map((user : User) => new LoadUserSuccess(user)),
            catchError((error : ErrorMessage) => of(new LoadUserFail(error)))
        ))
    )

}