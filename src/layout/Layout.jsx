import React, { useEffect, useState } from "react";
import Profile from "../page/profile/Profile";
import LandingUI from "../page/landingUI/LandingUI";
import "./Layout.css";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { useMode } from "./ModeContext";

const Layout = () => {
  const { mode, toggleMode } = useMode();
  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <div
        style={{
          backgroundColor: mode === "dark" ? "#0B0F17" : "white",
          width: "100%",
          height: "100vh",
          color: mode === "dark" ? "#D1D5DB" : "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="layout-container"
      >
        <div
          style={{
            width: "85%",
            height: "85vh",
            display: "flex",
          }}
        >
          <div style={{ width: "40%", height: "100%" }}>
            <Profile mode={mode} />
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
                backgroundColor:
                  mode === "dark" ? "#111827" : "rgb(229, 229, 229)",
                marginTop: "12px",
                overflowY: "scroll",
                scrollbarWidth: "thin",
                scrollbarColor:
                  mode === "dark" ? "#4B5563 #1F2937" : "#EFCB89 #E5E5E5 ",
                WebkitOverflowScrolling: "touch",
                msOverflowStyle: "none",
              }}
              className="landing-ui"
            >
              <LandingUI />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 30,
          right: 30,
          zIndex: 9999,
        }}
      >
        <div
          style={{
            width: "70px",
            height: "25px",
            display: "flex",
            borderRadius: "6px",
            fontSize: "22px",
            padding: "2px",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              width: "50%",
              textAlign: "center",
              color: mode === "light" ? "orange" : "#F2F2F2",
              borderRadius: "8px 0 0 8px",
              backgroundColor: mode === "light" ? "#F2F2F2" : "#705017",
            }}
            onClick={toggleMode}
          >
            <MdDarkMode />
          </div>
          <div
            style={{
              width: "50%",
              textAlign: "center",
              color: mode === "light" ? "#F2F2F2" : "orange",
              backgroundColor: mode === "light" ? "#705017" : "#F2F2F2",
              borderRadius: "0 8px 8px 0",
            }}
            onClick={toggleMode}
          >
            <MdLightMode />
          </div>
        </div>
      </div>

      {/* <div
        style={{
          position: "absolute",
          width: "50%",
          height: "10vh",
          backgroundColor: "red",
          top: "40%",
          left:"50%",
          right:"50%",
          // transform:"50% 50%",
          zIndex: 10001,
        }}
      ></div> */}
    </div>
  );
};

export default Layout;
