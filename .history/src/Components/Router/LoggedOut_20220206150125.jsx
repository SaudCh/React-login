import { Routes, Route, Outlet } from "react-router-dom";

import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Header from "../Shared/Header";
import NotFound from "../NotFound/NotFound";

function LoggedOutRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<WithHeader />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/">
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
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
