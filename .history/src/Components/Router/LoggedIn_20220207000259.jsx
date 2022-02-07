import { Routes, Route, Outlet, Navigate } from "react-router-dom";

import Home from "../Home/Home";
import Header from "../Shared/Header";
import NotFound from "../NotFound/NotFound";

function LoggedInRouter() {
  return (
    <Routes>
      <Route path="/" element={<WithHeader />}>
        <Route path="/login" element={<Navigate to="/" />} />
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

export default LoggedInRouter;
