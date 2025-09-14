import RoleRoutes from "./routes/RoleRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <RoleRoutes />
      <ToastContainer />
    </>
  );
};

export default App;
