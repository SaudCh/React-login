import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row background-image">
          <div className="col-4 background-text border rounded">
            <form className="col-9">
              <div className="my-2">
                <input
                  type="text"
                  style={{
                    backgroundColor: "transparent",
                    color: "white",
                    border: "none",
                  }}
                  className="form-control"
                  id="name"
                  placeholder="Name"
                />
              </div>
              <div className="form-group my-2">
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="form-group my-2">
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Password"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
