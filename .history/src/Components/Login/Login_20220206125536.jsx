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
        <div className="row align-items-center">
          <div className="col-10 col-md-7 d-flex justify-content-center">
            <form onSubmit={formSubmit} className="col-9">
              <div className="my-2 text-center">
                <h6 className="p-0 m-0 text-secondary">Welcome to</h6>
                <h4 className="p-0 m-0" style={{ color: "rgb(254, 113, 145)" }}>
                  Chat Box
                </h4>
              </div>

              <div className="form-group my-2">
                {error.api && (
                  <p
                    style={{ fontSize: "0.8rem" }}
                    className="text-danger p-0 m-0 mt-2 ms-3"
                  >
                    {error.api}
                  </p>
                )}

                <input
                  style={formStyle}
                  value={email}
                  onChange={(email) => setEmail(email.target.value)}
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder={"Email"}
                />
                {error.email && (
                  <p
                    style={{ fontSize: "0.8rem" }}
                    className="text-danger p-0 m-0 ms-3"
                  >
                    {error.email}
                  </p>
                )}
              </div>
              <div className="form-group mt-2 mb-1">
                <input
                  style={formStyle}
                  value={password}
                  onChange={(password) => setPassword(password.target.value)}
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Password"
                />
                {error.password && (
                  <p
                    style={{ fontSize: "0.8rem" }}
                    className="text-danger p-0 m-0 ms-3"
                  >
                    {error.password}
                  </p>
                )}
              </div>
              <div>
                <p
                  className="text-end p-0 m-0 mb-1"
                  style={{ color: "rgb(254, 113, 145)", fontSize: "0.9rem" }}
                >
                  Forget Password?
                </p>
              </div>
              <div className="mb-2">
                <button className="login-btn">Login</button>
              </div>
              <div>
                <p
                  className="text-center p-0 m-0 mb-1"
                  style={{ fontSize: "0.9rem" }}
                >
                  New to Chat Box?{" "}
                  <span style={{ color: "rgb(254, 113, 145)" }}>
                    Register Here
                  </span>
                </p>
              </div>
            </form>
          </div>
          <div className="col-md-5 login-background-image "></div>
        </div>
      </div>
    </div>
  );
}
