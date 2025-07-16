import React from "react";
import "./Homee.css"; 

const Homes = ({ howItWorksRef }) => {
  
  const handleScrollToHowItWorks = () => {
    howItWorksRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="first">
        <h1>Save your plant before it's too late</h1>
        <p>We offer the simplest platform to help you resolve your issues effortlessly</p>
        <button type="button" className="Home-btn" onClick={handleScrollToHowItWorks}>
          HOW WE WORK
        </button>
      </div>
    </>
  );
};

export default Homes;
