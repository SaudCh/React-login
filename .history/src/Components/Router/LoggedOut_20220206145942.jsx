import { Routes, Route, Outlet } from "react-router-dom";
import NotFound from "../NotFound/NotFound";

import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Header from "./Components/Shared/Header";

function LoggedOutRouter() {
  return (
    <div>
      <Route path="/" element={<WithHeader />}>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/">
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </div>
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
