
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home/Home";
import Destinations from "./pages/Destinations/Destinations";
import Trips from "./pages/Trips/Trips";
import About from "./pages/About/About";
import TripDetails from "./pages/Trips/TripDetails";


import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <div className="app-layout">
      
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Travel Planner</h2>
        <Link to="/">Home</Link>
        <Link to="/destinations">Destinations</Link>
        <Link to="/trips">Trips</Link>
        <Link to="/about">About</Link>
      </aside>

      {/* Main */}
      <div className="main-layout">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/trips" element={<Trips />} />
            <Route path="/trips/:id" element={<TripDetails />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </div>
  );
}