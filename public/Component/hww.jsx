import React from "react";
import "./Hwww.css";

const Hows=()=>{
    return (
        <>
        <div className="hww">
                <h1>How It All Works</h1>
                <div className="hwwpara">
                <div className="hwwimg">
                    <img src="/album/dontKM.jpg" alt="" />
                </div>
                <div>
                    <h2> AI-Powered Disease Detection</h2>
                    <p>Our advanced AI scans the uploaded image, detects potential plant diseases, and identifies the severity of the infection using deep learning models.
                  </p>
                </div>
                </div>
                <div className="hwwpara">
                <div className="hwwimg">
                    <img src="/album/scanKM.jpg" alt="" />
                </div>
                <div>
                    <h2>Capture an Image & Upload to the Platform</h2>
                    <p>The captured image is uploaded to our system through the web or mobile application. The platform supports easy and quick uploads for a seamless experience.</p>
                </div>
                </div>
                <div className="hwwpara">
                <div className="hwwimg">
                    <img src="/album/analyse1KM.jpg" alt="" />
                </div>
                <div>
                    <h2>Get Instant Diagnosis & Solutions</h2>
                    <p>Based on the AI analysis, the system provides a detailed report with disease name, symptoms, and effective treatment options, including organic and chemical remedies.</p>
                </div>
                </div>
                <div className="hwwpara">
                <div className="hwwimg">
                    <img src="/album/howKM.jpg" alt="" />
                </div>
                <div>
                    <h2>Implement & Monitor</h2>
                    <p>Farmers can apply the recommended treatment and monitor their plant's health using our platform. Real-time updates and expert guidance help ensure better crop protection and yield improvement.</p>
                </div>
                </div>
                <div className="hwwpara">
                <div>
                    <img src="/album/notssatisKM.jpg" alt="" />
                </div>
                <div>
                    <h2>Need More Help?</h2>
                    <p>If you're not fully satisfied with our results and need expert assistance, reach out to us through our Contact Us forum—we’ll respond within 24 hours!</p>
                </div>
                </div>
            </div>
        </>
    );
};
export default Hows;