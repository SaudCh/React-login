import { Route, Outlet, Navigate } from "react-router-dom";

import Login from "../Login/Login";
import Register from "../Register/Register";
import Header from "../Shared/Header";
import NotFound from "../NotFound/NotFound";

function LoggedOutRouter() {
  return (
    <>
      <Route path="/" element={<WithHeader />}>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/">
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </>
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
