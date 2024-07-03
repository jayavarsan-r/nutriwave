import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tracker from "./pages/Tracker";
import Login from "./pages/Login";
import Error from "./pages/Error";
import SharedLayout from "./components/SharedLayout";
import Homepage from "./components/Homepage"; // Import your Homepage component
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/tracker" element={<Tracker />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
