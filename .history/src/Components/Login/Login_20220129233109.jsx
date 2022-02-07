import React from "react";
import Books from "../Images/books.jpg";

export default function Login() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center">
          <div className="col-6" style={{ overFlow: "hidden" }}>
            <img src={Books} style={{ width: '100vh' }} alt="" />
          </div>
          <div className="col-6">
            <form action="">
              <div className="form-group my-2">
                <input
                  type="text"
                  class="form-control"
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
