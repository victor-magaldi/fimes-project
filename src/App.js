import "./styles.css";

import Routes from "./routes";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="app">
      <Routes />
      <ToastContainer autoClose={3000}></ToastContainer>
    </div>
  );
}

export default App;
