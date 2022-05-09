import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Marvel from "./pages/Marvel";
import RealMadrid from "./pages/RealMadrid";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/marvel" element={<Marvel />} />
      </Routes>
      <Routes>
        <Route path="/realMadrid" element={<RealMadrid />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
