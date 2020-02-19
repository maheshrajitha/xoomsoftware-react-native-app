/* eslint-disable semi */
/* eslint-disable comma-dangle */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import { GET_MY_APPOINMENTS } from "../actiontypes/user.actiontypes";
export function getMyAppoinments(myAppoinments) {
    return dispatch => {
        dispatch(getMyAppoinmentsAsync(myAppoinments));
    }
}

export function getMyAppoinmentsAsync(myAppoinments) {
    return {
        type: GET_MY_APPOINMENTS,
        myAppoinments : myAppoinments
    }
}