import React from 'react';
const PasswordValidation = (password) => {
if(password != undefined){
    if(password.length < 6)
        return "Password should be atleast of 6 characters"
    else
        return null
}
else
    return "Password is required"
}

export default PasswordValidation;