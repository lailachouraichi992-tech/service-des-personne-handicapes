import { Routes, Route } from "react-router-dom";

import Home from "./components/home";
import Materieles from "./components/materieles";
import Droits from "./components/droits";
import Services from "./components/services";



function routes() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      
      <Route path="/materieles" element={<Materieles />} />
      <Route path="/droits" element={<Droits />} />
      <Route path="/services" element={<Services />} />


    </Routes>
  );
}

export default routes;