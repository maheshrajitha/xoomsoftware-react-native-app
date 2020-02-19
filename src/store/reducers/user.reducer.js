/* eslint-disable prettier/prettier */
import { LOGIN } from '../actiontypes/user.actiontypes';

const initialStatus = {
    userDetails : null
}
export const userReducer = (state = initialStatus, action) => {
    switch (action.type) {
        case LOGIN:
            state.userDetails = action.userDetails;
            return {...state}
        default:
            return state;
    }
}