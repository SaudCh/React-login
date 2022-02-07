import { Routes, Route, Outlet } from "react-router-dom";

import Home from "../Home/Home";
import Header from "../Shared/Header";
import NotFound from "../NotFound/NotFound";

function LoggedInRouter() {
  return (
    <Route path="/" element={<WithHeader />}>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Route>
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
