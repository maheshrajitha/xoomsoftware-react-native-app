/* eslint-disable prettier/prettier */
const initialState = {
    appoinments: []
}
export const appoinmentReducer = (state =initialState , action) => {
    switch (action.type) {
        case 'ACTION_TYPE':
            return {...state}
        default:
            return state
    }
}