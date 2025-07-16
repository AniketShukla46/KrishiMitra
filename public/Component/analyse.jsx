import React from "react";
import { useNavigate } from "react-router-dom";
import "./Analysee.css";

const Analysis = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/scan"); // Redirect to the Scan page
    };

    return (
        <div className="anls">
            <h2>Analyze Your Crop Now</h2>
            <button type="submit" className="anls-btn" onClick={handleNavigate}>
                Analyse
            </button>
        </div>
    );
};

export default Analysis;
