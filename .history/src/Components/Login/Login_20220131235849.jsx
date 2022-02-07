import React, { useState } from "react";
import "./Login.css";
import { formStyle } from "./logincss";
import axios from "axios";
import { loginValidation } from "./loginValidation";

export default function Login() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const formSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      password: password,
    };
    console.log(data);

    const errors = loginValidation(data);
    setError(errors);
    console.log(error);

    // axios
    //   .get("/", data)
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row background-image">
          <div className="col-10 col-md-4 background-text border rounded">
            <form onSubmit={formSubmit} className="col-9">
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
              </div>
              {error.name ? <p>{error.name}</p> : null}
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
              </div>
              <div className="my-2">
                <div>
                  <p className="text-white" style={{ fontSize: "0.9rem" }}>
                    Already have an account? <span>Sign in</span>
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
