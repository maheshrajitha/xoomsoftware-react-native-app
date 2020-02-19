/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */

import { BASE_URL } from "../constants/Values";
export const getMyAppoinmentsFromApi = async () => {
    return fetch(`${BASE_URL}appoinment/all`, {
        method: 'GET',
        credentials :'same-origin'
    }).then(response => {
        if (response.ok)
            return response.json();
        else
            throw new Error('Something Went Wrong');
    }).catch(err => {
        console.log(err);
        throw err;
    })
}