import React from "react";

export default function Login() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">hw</div>
          <div className="col-6">
            <form action="">
              <div className="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  class="form-control"
                  id="email"
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
