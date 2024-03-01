import React, { useState } from "react";
// import Scene from "../../assets/Scene.jpg";
import Scene from "../../assets/photo.png";
import MyPhoto from "../../assets/MyPhoto.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import "./TypeWriter.css";
import { useMode } from "../../layout/ModeContext";

const MainProfile = () => {
  const { mode } = useMode();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <>
        <img
          src={Scene}
          style={{
            width: "100%",
            height: "250px",
            borderRadius: "0 0 50% 50% / 0 0 40% 40%",
          }}
          alt="Scene"
        />
        <div
          style={{
            position: "absolute",
            top: "45%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            overflow: "hidden",
            // boxShadow: "0 0 12px orange",
          }}
        >
          <img
            src={MyPhoto}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt="MyPhoto"
          />
        </div>
      </>
      <div style={{ position: "absolute", top: "60%", width: "100%" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
            gap: "1px",
          }}
        >
          <div style={{ fontSize: "35px", fontWeight: "bold" }}>
            Bivek Pd. Joshi
          </div>
          <div
            className={`animated-text ${
              mode === "dark" ? "dark-mode" : "light-mode"
            }`}
            style={{ color: "orange", padding: "10px" }}
          >
            <span></span>
          </div>
          <div style={{ display: "flex", gap: "1rem", fonSize: "24px" }}>
            <FaFacebook
              style={{ cursor: "pointer" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "orange";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgb(242, 242, 242)";
              }}
              onClick={() =>
                window.open("https://www.facebook.com/bivek.joshi.56", "_blank")
              }
            />
            <FiInstagram
              style={{ cursor: "pointer" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "orange";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgb(242, 242, 242)";
              }}
              onClick={() =>
                window.open(
                  "https://www.instagram.com/bivek.joshi.56/",
                  "_blank"
                )
              }
            />
            <FaDiscord
              style={{ cursor: "pointer" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "orange";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgb(242, 242, 242)";
              }}
              onClick={() => window.open("https://discord.com/", "_blank")}
            />
            <FaGithub
              style={{ cursor: "pointer" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "orange";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgb(242, 242, 242)";
              }}
              onClick={() =>
                window.open("https://github.com/BivekJoshi", "_blank")
              }
            />
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "64px",
          borderTop: "1px solid rgb(119, 119, 119)",
          display: "flex",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            width: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRight: "1px solid rgb(119, 119, 119)",
            fontSize: "14px",
            gap: "12px",
          }}
          // onMouseEnter={(e) => {
          //   e.currentTarget.style.backgroundColor =
          //     mode === "dark" ? "#1F2937" : "rgb(191, 191, 191)";
          //   e.currentTarget.style.color = "orange";
          // }}
          // onMouseLeave={(e) => {
          //   e.currentTarget.style.backgroundColor =
          //     mode === "dark" ? "#111827" : "rgb(229, 229, 229)";
          //   e.currentTarget.style.color =
          //     mode === "dark" ? "rgb(242, 242, 242)" : "black";
          // }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          DOWNLOAD CV
          <FaCloudDownloadAlt style={{ fontSize: "24px" }} />
        </div>
        <div
          style={{
            width: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "14px",
            gap: "12px",
          }}
          // onMouseEnter={(e) => {
          //   e.currentTarget.style.backgroundColor =
          //     mode === "dark" ? "#1F2937" : "rgb(191, 191, 191)";
          //   e.currentTarget.style.color = "orange";
          // }}
          // onMouseLeave={(e) => {
          //   e.currentTarget.style.backgroundColor =
          //     mode === "dark" ? "#111827" : "rgb(229, 229, 229)";
          //   e.currentTarget.style.color =
          //     mode === "dark" ? "rgb(242, 242, 242)" : "black";
          // }}
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/bivek-joshi-68b02b239/",
              "_blank"
            )
          }
        >
          MY LINKEDIN
          <FaLinkedin style={{ fontSize: "24px" }} />
        </div>
      </div>
    </div>
  );
};

export default MainProfile;
