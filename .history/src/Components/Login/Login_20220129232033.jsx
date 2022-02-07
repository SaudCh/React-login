import React from "react";

export default function Login() {
  return (
    <div>
      <div className="containerfluid">
        <div className="row">
          <div className="col-6"></div>
          <div className="col-6">
            <form action="">
              <div class="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Email"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
