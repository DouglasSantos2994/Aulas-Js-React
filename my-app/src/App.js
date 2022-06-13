import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Local from "./pages/Local";
import Session from "./pages/Session";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Routes>
        <Route path="/local" element={<Local />} />
      </Routes>

      <Routes>
        <Route path="/session" element={<Session />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
