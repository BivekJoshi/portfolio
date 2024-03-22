import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const ClickableButton = ({ buttonName, icon, path, mode }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeButton, setActiveButton] = useState("");
  const [previousButton, setPreviousButton] = useState("");

  useEffect(() => {
    const pathh = location.pathname.substring(1);
    setPreviousButton(activeButton);
    setActiveButton(pathh);
  }, [location]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        width: isMobile ? "50px" : "70px",
        height: isMobile ? "50px" : "60px",
        backgroundColor:
          activeButton === path
            ? mode === "dark"
              ? "#705017"
              : "#EFCB89"
            : mode === "dark"
              ? "#111827"
              : "#E5E5E5",
        color: mode === "dark" ? "rgb(242, 242, 242)" : "black",
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        flexDirection: "column",
        fontSize: isMobile ? "10px" : "12px",
        fontWeight: "bold",
        gap: "4px",
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}
      onClick={() => navigate(`${path}`)}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = mode === "dark" ? "#1F2937" : "rgb(191, 191, 191)";
        // e.currentTarget.style.color = "orange";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget.style.backgroundColor =
          activeButton === path
            ? mode === "dark"
              ? "#705017"
              : "#EFCB89"
            : mode === "dark"
              ? "#111827"
              : "#E5E5E5"),
          (e.currentTarget.style.color = activeButton === "rgb(242, 242, 242)");
      }}
    >
      <div
        style={{ fontSize: isMobile ? "16px" : "24px" }}
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
