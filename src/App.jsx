import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Headers from "../public/Component/header";
import Homes from "../public/Component/home";
import Abouts from "../public/Component/about";
import Hows from "../public/Component/hww";
import Analysis from "../public/Component/analyse";
import Clients from "../public/Component/clients";
import Contact from "../public/Component/contact";
import Footer from "../public/Component/footer";
import Scan from "../public/Component/scan";
import Login from "../public/Component/login";  
import "./App.css";

function App() {
  // Create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const howItWorksRef = useRef(null);
  const analyseRef = useRef(null);
  const feedbackRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <Router>
      <>
        <Headers />
        <Routes>
          <Route path="/" element={
            <>
              <div ref={homeRef} id="home"><Homes howItWorksRef={howItWorksRef} /></div>
              <div ref={aboutRef} id="about"><Abouts /></div>
              <div ref={howItWorksRef} id="how-it-works"><Hows /></div>
              <div ref={analyseRef} id="analyse"><Analysis /></div>
              <div ref={feedbackRef} id="feedback"><Clients /></div>
              <div ref={contactRef} id="contact"><Contact /></div>
              <Footer />
            </>
          } />
          <Route path="/scan" element={<Scan />} />
          <Route path="/login" element={<Login />} />  
        </Routes>
      </>
    </Router>
  );
}

export default App;
