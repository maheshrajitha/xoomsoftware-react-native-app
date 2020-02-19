/* eslint-disable prettier/prettier */

import { GET_MY_APPOINMENTS } from "../actiontypes/user.actiontypes"

const initialState = {
    appoinments: []
}
export const appoinmentReducer = (state =initialState , action) => {
    switch (action.type) {
        case GET_MY_APPOINMENTS:
            state.appoinments = [];
            state.appoinments = state.appoinments.concat(action.myAppoinments);
            return {...state}
        default:
            return state
    }
}