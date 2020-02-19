/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import { BASE_URL } from "../constants/Values";
export const signup = async (firstName, lastName, password, email) => {
    return fetch(`${BASE_URL}users`, {
        method: 'POST',
        body: JSON.stringify({
            password: password,
            firstname: firstName,
            lastname: lastName,
            email: email
        }),
        headers: {
            'Content-Type': 'application/json',
            'Accept':'application/json'
        },
        credentials:'same-origin'
    }).then(response => {
        if (response.ok)
            return response.json();
        else
            throw new Error('Signup Error');
    }).catch(err => {
        console.log(err);
        throw err;
    });
}