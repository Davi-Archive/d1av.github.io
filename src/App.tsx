import React, { useState, useEffect } from "react";
import Preloader from "./components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Sobre from "./components/Sobre/Sobre";
import Projetos from "./components/Projetos/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resumo/ResumoNovo";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.scss";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

//Google Analytics
import ReactGA from 'react-ga';
const TRACKING_ID = "G-PSWY7Z38KH";
ReactGA.initialize(TRACKING_ID);


function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
      ReactGA.pageview(window.location.pathname + window.location.search);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/resumo" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
