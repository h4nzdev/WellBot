import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../page/Auth/Login";
import Registration from "../page/Auth/Registration";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/auth">
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Registration />} />
      </Route>
    </Routes>
  );
};

export default AuthRoutes;
