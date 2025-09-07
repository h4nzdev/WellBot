import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Login from "../page/Auth/Login";
import Registration from "../page/Auth/Registration";

const AuthRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AuthRoutes;
