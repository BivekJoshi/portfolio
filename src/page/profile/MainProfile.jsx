import React, { useState } from "react";
// import Scene from "../../assets/Scene.jpg";
import Scene from "../../assets/Patan.jpg";
import MyPhoto from "../../assets/MyPhoto.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import "./TypeWriter.css";
import { useMode } from "../../layout/ModeContext";
import Cv from "../../assets/BivekCv.pdf";

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
            height: "270px",
            borderRadius: "50% 0% 49% 51% / 0% 55% 45% 46%",
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
            borderRadius: "50% ",
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
            className={`animated-text ${mode === "dark" ? "dark-mode" : "light-mode"
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
        <a href={Cv} download="BivekCv.pdf" style={{
          width: "50%",
          borderRight: "1px solid rgb(119, 119, 119)",
          fontSize: "14px",
          height: "64px",
          textDecoration:"none",
          color:"black"
        }}>
          <div
            style={{
              display: "flex",
              aliginItems: "center",
              justifyContent: "center", gap: "12px", 
              padding:"1.5rem"
            }}
            // onClick={() =>
            //   window.open(
            //     "https://www.pdffiller.com/jsfiller-desk20/?flat_pdf_quality=low&requestHash=64921e5ec6debac1ca3dad9839f7eefdac8d323737f1523032d3dcd2a01d6cef&projectId=1461055256&loader=tips&PAGE_REARRANGE_V2_MVP=true&richTextFormatting=true&isPageRearrangeV2MVP=true&jsf-page-rearrange-v2=true&LATEST_PDFJS=true&jsf-document-scroll-zoom=true&jsf-redesign-full=true&act-notary-pro-integration=false&jsf-new-add-fields-popup=false&routeId=d946b1fd11caeaffa9937fe8cb1c57d9#be4ebb6c03ff476880efebd2c3cc4774",
            //     "_blank"
            //   )
            // }
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
          </div></a>
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
