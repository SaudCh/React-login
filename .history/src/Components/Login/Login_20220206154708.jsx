import React from "react";
import "./Login.css";
import { loginInputField } from "../Shared/css";
import { Link } from "react-router-dom";
import { useLogin } from "./LoginHook";

export default function Login() {
  const { email, password, setEmail, setPassword, error, formSubmit } =
    useLogin();
  return (
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
                  className="text-danger p-0 m-0 mb-1 ms-3"
                >
                  {error.api}
                </p>
              )}

              <input
                style={loginInputField}
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
                style={loginInputField}
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
                <Link
                  to="/register"
                  style={{
                    color: "rgb(254, 113, 145)",
                    textDecoration: "none",
                  }}
                >
                  Register Here
                </Link>
              </p>
            </div>
          </form>
        </div>
        <div className="col-md-5 login-background-image "></div>
      </div>
    </div>
  );
}
