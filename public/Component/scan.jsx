import React from "react";
import "./Scann.css";

const Scan = () => {
  return (
    <>
      <div class="upload-container">
        <h3 class="upload-title">Upload files</h3>
        <p class="upload-path"><span>  PDF / Image</span></p>

        <div class="upload-box">
            <div class="folder-icon"></div>
            <label for="file-input" class="upload-btn">Choose file(s)</label>
            <input type="file" id="file-input" multiple />
            <p class="upload-text">or drag & drop files here</p>
            <p class="upload-note">You can select more than one file at a time.</p>
        </div>
        
    </div>
    </>
  );
};

export default Scan;
