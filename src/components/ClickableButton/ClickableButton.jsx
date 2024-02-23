import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const ClickableButton = ({ buttonName, icon, path }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeButton, setActiveButton] = useState("");
  const [previousButton, setPreviousButton] = useState("");

  useEffect(() => {
    const pathh = location.pathname.substring(1);
    setPreviousButton(activeButton);
    setActiveButton(pathh);
  }, [location]);

  return (
    <div
      style={{
        width: "70px",
        height: "60px",
        backgroundColor: activeButton === path ? "#705017" : "#111827",
        color: "rgb(242, 242, 242)",
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        flexDirection: "column",
        fontSize: "12px",
        fontWeight: "bold",
        gap: "4px",
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}
      onClick={() => navigate(`${path}`)}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#1F2937";
        // e.currentTarget.style.color = "orange";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor =
          activeButton === path ? "#705017" : "#111827";
        e.currentTarget.style.color = activeButton === "rgb(242, 242, 242)";
      }}
    >
      <div
        style={{ fontSize: "24px" }}
        onMouseEnter={(e) => {
          // e.currentTarget.style.color = "orange";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = activeButton === "rgb(242, 242, 242)";
        }}
      >
        {icon}
      </div>
      {buttonName}
    </div>
  );
};

export default ClickableButton;
