/* eslint-disable semi */
/* eslint-disable comma-dangle */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import { LOGIN } from '../actiontypes/user.actiontypes';

export function login(userDetails) {
    return dispatch => {
        dispatch(loginAsync(userDetails));
    }
}
export function loginAsync(userDetails) {
    return {
        type: LOGIN,
        userDetails : userDetails
    }
}