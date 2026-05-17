import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Rentals from "./pages/Rentals";
import Info from "./pages/Info";
import Contact from "./pages/Contact";
import PartyRentals from "./pages/PartyRentals";
import Gallery from "./pages/Gallery";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/rentals" element={<Rentals />} />
        <Route path="/info" element={<Info />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/partyRentals" element={<PartyRentals />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
}

export default App;
