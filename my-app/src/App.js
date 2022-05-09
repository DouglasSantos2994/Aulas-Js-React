import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Marvel from "./pages/Marvel";
import Dc from "./pages/Dc";

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
        <Route path="/dc" element={<Dc />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
