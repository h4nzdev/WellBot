import { BrowserRouter } from "react-router-dom";
import Index from "./routes/Index";

const App = () => {
  return (
    <BrowserRouter>
      <Index />
    </BrowserRouter>
  );
};

export default App;
