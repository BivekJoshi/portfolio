import React from "react";
import HeaderText from "../../components/HeaderText/HeaderText";
import { Outlet } from "react-router-dom";

const LandingUI = () => {
  return (
    <div
      style={{
        padding: "16px",
        height: "95%",
      }}
    >
      <Outlet />
    </div>
  );
};

export default LandingUI;
