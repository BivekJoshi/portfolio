import React, { useState } from "react";
import { FaEye } from "react-icons/fa"; // Import the eye icon
import "./workCard.css";

const WorkCard = ({ image, title, subTitle, isMobile }) => {
  const [showEyeIcon, setShowEyeIcon] = useState(false);
  console.log(isMobile, "isMobileisMobile");
  return (
    <div className="work-card-container">
      <div
        className={`image-container ${isMobile ? "isMobile" : "isNotMobile"}`}
        onMouseEnter={() => setShowEyeIcon(true)}
        onMouseLeave={() => setShowEyeIcon(false)}
      >
        <img src={image} alt="work" />
        {showEyeIcon && (
          <div className="overlay">
            <FaEye className="eye-icon" />
          </div>
        )}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
          marginBottom: "12px",
        }}
      >
        <div>{title}</div>
        <div style={{fontSize:"12px"}}>{subTitle}</div>
      </div>
    </div>
  );
};

export default WorkCard;
