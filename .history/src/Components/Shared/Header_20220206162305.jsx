import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Authentication/AuthContext";

function Header() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const logOut = () => {
    auth.logout();
    navigate("/login");
  };
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" class="navbar-brand">
        ChatBox
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          {auth.isLoggedIn ? (
            <button className="btn btn-danger" onClick={() => logOut()}>
              Logout
            </button>
          ) : (
            <>
              <li class="nav-item active">
                <Link to="/login" class="nav-link">
                  Login
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/register" class="nav-link" href="#">
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Header;
