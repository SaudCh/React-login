export const loginValidation = (data) => {
    let errors = {};

    if (!data.fullname) {
        errors.fullname = "Name Is Required."
    }
    if (!data.Email) {
        errors.Email = "Email Is Required."
    }
    else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.Email = "Email is Invalid."
    }
    if (!data.password) {
        errors.password = "password is required."
    }
    else if (data.password.length < 6) {
        errors.password = "Password Must be more than Six Characters"
    }


    return errors;

}