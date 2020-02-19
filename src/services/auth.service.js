/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import { BASE_URL } from "../constants/Values";

export const userLogin = async (email, password) => {
    return fetch(`${BASE_URL}auth`, {
        body: JSON.stringify({
            password: password,
            email: email
        }),
        headers: {
            'Content-Type': 'application/json',
            'Accept' : 'application/json'
        },
        credentials: 'same-origin',
        method:'POST'
    }).then(response => {
        if (response.ok)
            return response.json();
        else
            throw new Error('Please Check Email or Password');
    }).catch(err => {
        console.log(err);
        throw err;
    });
}