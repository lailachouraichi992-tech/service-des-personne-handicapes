import { Routes, Route } from "react-router-dom";

import Home from "./components/home";
import Materieles from "./components/materieles";
import Droits from "./components/droits";
import Services from "./components/services";

import Education from "./components/education";
import Sport from "./components/sport";
import Travail from "./components/travail";
import Natation from "./components/natation";
import Mobilite from "./components/mobilite";

function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/materieles" element={<Materieles />} />
      <Route path="/droits" element={<Droits />} />
      <Route path="/services" element={<Services />} />

      <Route path="/education" element={<Education />} />
      <Route path="/sport" element={<Sport />} />
      <Route path="/travail" element={<Travail />} />
      <Route path="/natation" element={<Natation />} />
      <Route path="/mobilite" element={<Mobilite />} />
    </Routes>
  );
}

export default RoutesApp;
