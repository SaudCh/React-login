import React, { useState } from "react";
import "./Register.css";
import { formStyle } from "./RegsiterCss";
import axios from "axios";
import { registrationValidation } from "./RegisterValidation";
import { Link } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState("");

  const formSubmit = (e) => {
    setError("");
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      password: password,
    };

    const errors = registrationValidation(data);

    console.log(Object.keys(errors).length);

    if (Object.keys(errors).length !== 0) {
      setError(errors);
      return;
    }

    axios
      .post("http://localhost:5000/api/user/register", data)
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
                <h4 className="text-white">Register </h4>
              </div>
              <div className="my-2">
                <input
                  type="text"
                  style={formStyle}
                  value={name}
                  onChange={(name) => setName(name.target.value)}
                  className="form-control border-bottom hlo"
                  id="name"
                  placeholder="Name"
                />
                {error.name && (
                  <p className="text-danger p-0 m-0">{error.name}</p>
                )}
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
                    Already have an account? <Link to="/login">Sign in</Link>
                  </p>
                </div>
                <button className="btn" style={{ backgroundColor: "white" }}>
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
