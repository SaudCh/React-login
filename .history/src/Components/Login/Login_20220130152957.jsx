import React from "react";
import "./Login.css";

export default function Login() {
  const mystyle = {
    backgroundColor: "transparent",
    color: "white",
    border: "none",
    borderRadius: 0,
  };
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
                    borderRadius: 0,
                  }}
                  className="form-control border-bottom hlo"
                  id="name"
                  placeholder="Name"
                />
              </div>
              <div className="form-group my-2">
                <input
                  style={mystyle}
                  type="email"
                  class="form-control border-bottom"
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
