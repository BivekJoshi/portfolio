import React, { useEffect, useState } from "react";
import Profile from "../page/profile/Profile";
import LandingUI from "../page/landingUI/LandingUI";
import "./Layout.css";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { useMode } from "./ModeContext";
import GIFF from "../assets/NightTime.gif";
import DayTime from "../assets/DayTime.gif";

const Layout = () => {
  const { mode, toggleMode } = useMode();
  const [isMobile, setIsMobile] = useState(false);


  // console.log(isMobile,"ismobile");

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
        position: "relative",
        width: "100%",
        height: isMobile ? "100%" : "100vh",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: mode === "dark" ? "#D1D5DB" : "black",
      }}
    >
      {isMobile ?
        <div style={{
          position: "absolute",
          backgroundColor: mode==="dark"?"#0B0F17":"#BEC2D3",
          width: "100%",
          height: "100%",
          zIndex: -1
        }}></div> : <img
          src={mode === "dark" ? GIFF : DayTime}
          alt="background"
          style={{
            position: "absolute",
            width: "100%",
            height: "100vh",
            objectFit: "cover",
            zIndex: -1,
          }}
        />}

      {isMobile ?
        <div style={{ width: "90%", height: "100%" }}>
          <Profile mode={mode} />
          <div style={{ width: "100%", height: "100%", overflowY: "scroll" }}>
            <div
              style={{
                // height: "60%",
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
        </div> :
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
        </div>}

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
    </div>
  );
};

export default Layout;
