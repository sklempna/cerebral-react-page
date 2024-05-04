import "./App.css";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Live from "./pages/Live";
import Store from "./pages/Store";

function App() {
  return (
    <div className="App font-custom bg-black">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Live" element={<Live />} />
        <Route path="/Store" element={<Store />} />
      </Routes>
    </div>
  );
}

export default App;
