import { useState } from "react";
import "./Login.css";
import axios from "axios";
import { loginValidation } from "./loginValidation";

export const useAuth = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState("");

    const formSubmit = (e) => {
        setError("");
        e.preventDefault();
        const data = {
            email: email,
            password: password,
        };

        const errors = loginValidation(data);

        if (Object.keys(errors).length !== 0) {
            setError(errors);
            return;
        }

        axios
            .post("http://localhost:5000/api/user/login", data)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                let err;
                if (error.response) {
                    err = error.response.data.message;
                } else if (error.request) {
                    err = error.toJSON().message;
                } else {
                    err = error.message;
                }
                setError({ api: err });
            });
    };

    return { email, password, setEmail, setPassword, error, formSubmit }
}