import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import "./workCard.css";

const WorkCard = ({ image, title, subTitle, isMobile }) => {
  const [showEyeIcon, setShowEyeIcon] = useState(false);

  return (
    <div className="work-card-container">
      <div
        className={`image-container ${isMobile ? "isMobile" : "isNotMobile"}`}
        onMouseEnter={() => setShowEyeIcon(true)}
        onMouseLeave={() => setShowEyeIcon(false)}
      >
        <img src={image} alt={title} />
        {showEyeIcon && (
          <div className="overlay">
            <FaEye className="eye-icon" />
          </div>
        )}
      </div>
      <div className="text-container">
        <div className="title">{title}</div>
        <div className="subTitle">{subTitle}</div>
      </div>
    </div>
  );
};

export default WorkCard;
