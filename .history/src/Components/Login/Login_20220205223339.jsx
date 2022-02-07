import React, { useState } from "react";
import "./Login.css";
import { formStyle } from "./logincss";
import axios from "axios";
import { loginValidation } from "./loginValidation";

export default function Login() {
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
        console.log(response);
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

  return (
    <div>
      <div className="container-fluid">
        <div className="row background-image">
          <div className="col-10 col-md-4 background-text border rounded">
            <form onSubmit={formSubmit} className="col-9">
              {error.api && <p className="text-danger p-0 m-0">{error.api}</p>}
              <div className="my-2">
                <h4 className="text-white">Login </h4>
              </div>
              <div className="form-group my-2">
                <input
                  style={formStyle}
                  value={email}
                  onChange={(email) => setEmail(email.target.value)}
                  type="email"
                  class="form-control border-bottom"
                  id="email"
                  placeholder="Email"
                />
                {error.email && (
                  <p className="text-danger p-0 m-0">{error.email}</p>
                )}
              </div>
              <div className="form-group my-2">
                <input
                  style={formStyle}
                  value={password}
                  onChange={(password) => setPassword(password.target.value)}
                  type="password"
                  class="form-control border-bottom"
                  id="password"
                  placeholder="Password"
                />
                {error.password && (
                  <p className="text-danger p-0 m-0">{error.password}</p>
                )}
              </div>
              <div className="my-2">
                <div>
                  <p className="text-white" style={{ fontSize: "0.9rem" }}>
                    New to Website <span>Register</span>
                  </p>
                </div>
                <button className="btn" style={{ backgroundColor: "white" }}>
                  Login
                </button>
              </div>
            </form>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </div>
  );
}
