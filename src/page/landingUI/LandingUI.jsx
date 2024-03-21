import React, { useEffect, useState } from "react";
import HeaderText from "../../components/HeaderText/HeaderText";
import { Outlet } from "react-router-dom";
import "./Layout.css";

const LandingUI = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as per your requirement
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <div
      style={{
        padding: "16px",
        height: isMobile ? "100%" : "95%",
        overflowY:"scroll"
      }}
      className="landing-ui"
    >
      <Outlet />
      <br />
      <br />
      <br />
    </div>
  );
};

export default LandingUI;
