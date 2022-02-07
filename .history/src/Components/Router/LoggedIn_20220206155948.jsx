import { Routes, Route, Outlet, Navigate } from "react-router-dom";

import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Header from "../Shared/Header";
import NotFound from "../NotFound/NotFound";

function LoggedOutRouter() {
  return (
    <Routes>
      <Route path="/" element={<WithHeader />}>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
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
