import { Routes, Route, Outlet, Navigate } from "react-router-dom";

import Login from "../Login/Login";
import Register from "../Register/Register";
import Header from "../Shared/Header";
import NotFound from "../NotFound/NotFound";
import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthContext";

function LoggedOutRouter() {
  const auth = useContext(AuthContext);
  return (
    <Routes>
      <Route path="/" element={<WithHeader />}>
        <Route path="/" element={<Navigate replace to={"/login"} />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/">
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
}
const WithHeader = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default LoggedOutRouter;
