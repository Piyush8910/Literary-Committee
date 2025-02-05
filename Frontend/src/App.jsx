import { AboutUs } from "./pages/AboutUs";
import { Dashboard } from "./pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { OurEvents } from "./pages/OurEvents";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-events" element={<OurEvents />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;