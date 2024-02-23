import React from "react";
import Profile from "../page/profile/Profile";
import LandingUI from "../page/landingUI/LandingUI";
import './Layout.css';

const Layout = () => {
  return (
    <div
      style={{
        backgroundColor: "#0B0F17",
        width: "100%",
        height: "100vh",
        color: "#D1D5DB",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "85%",
          height: "85vh",
          display: "flex",
        }}
      >
        <div style={{ width: "40%", height: "100%" }}>
          <Profile />
        </div>
        <div
          style={{
            width: "60%",
            height: "100%",
          }}
        >
          <div
            style={{
              height: "95%",
              backgroundColor: "#111827",
              marginTop: "12px",
              overflowY:"scroll",
              scrollbarWidth: "thin",
              scrollbarColor: "#4B5563 #1F2937", 
              WebkitOverflowScrolling: "touch",  
              msOverflowStyle: "none" 
            }}
            className="landing-ui"
          >
            <LandingUI />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
