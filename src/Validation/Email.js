import React from 'react';

const EmailValidation = (email) =>{
    var reg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email != undefined) {
        if (reg.test(email) === false)
            return "Invalid email"
        else 
            return null
    }
    else
        return "Email is required."
}

export default EmailValidation;