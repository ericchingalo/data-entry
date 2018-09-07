import { UserActions, UserActionTypes } from '../actions'
import { ErrorMessage } from '../../models/error-message.module';
import { User } from '../../models/user.model';

export interface UserState {
    loading : boolean,
    loaded: boolean,
    error: ErrorMessage,
    user : User
}

export const initialState : UserState ={
    loading : false,
    loaded : false,
    error : null ,
    user : null
}

export function userReducer(
    state = initialState,
    action : UserActions
){
    switch(action.type){
        case UserActionTypes.LoadUser : 
        return {
            ...state,
            loading : true,
            loaded : false,
            error : null,
            user : state.user
        };

        case UserActionTypes.LoadUserSuccess : 
        return {
            loading : false,
            loaded : true,
            error : null,
            user : action.payload
        };

        case UserActionTypes.LoadUserFail : 
        return {
            loading : false,
            loaded : false,
            error : action.error,
            user : state.user
        };

        default : return state
    }

}

export const getUser = (state : UserState) => state.user;

