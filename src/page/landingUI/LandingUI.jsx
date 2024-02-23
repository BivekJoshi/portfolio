import React from "react";
import HeaderText from "../../components/HeaderText/HeaderText";
import { Outlet } from "react-router-dom";
import "./Layout.css";

const LandingUI = () => {
  return (
    <div
      style={{
        padding: "16px",
        height: "95%",
      }}
      className="landing-ui"
    >
      <Outlet />
    </div>
  );
};

export default LandingUI;
