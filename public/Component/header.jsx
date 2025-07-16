import React from "react";
import { useNavigate } from "react-router-dom";
import "./Headerr.css";

const Headers = () => {
  const navigate = useNavigate();

  return (
    <div className="mains">
      <div className="KM-logo">
        <img src="/album/logoKm (1).png" alt="logo-file" />
      </div>
      <div className="homes">
        <ul>
          <a href="#home"><li>Home</li></a>
          <a href="#about"><li>About Us</li></a>
          <a href="#analyse"><li>Analyse</li></a>
          <a href="#feedback"><li>Feedback</li></a>
          <a href="#contact"><li>Contact</li></a>
        </ul>
      </div>
      <button className="login-btn" onClick={() => navigate("/login")}>
        LogIn
      </button>
    </div>
  );
};

export default Headers;
