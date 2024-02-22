import React from "react";
import Scene from "../../assets/Scene.jpg";
import MyPhoto from "../../assets/MyPhoto.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";

const MainProfile = () => {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <>
        <img
          src={Scene}
          style={{
            width: "100%",
            height: "250px",
            borderRadius: "0 0 50% 50% / 0 0 60% 60%",
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
          <h5 style={{ color: "orange" }}>I am a Frontend Developer</h5>
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
        }}
      >
        <div
          style={{
            width: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRight:"1px solid rgb(119, 119, 119)",
            fontSize:"14px",
            gap:"12px"
          }}
        >
          DOWNLOAD CV
          <FaCloudDownloadAlt style={{ fontSize: "24px" }}/>
        </div>
        <div
          style={{
            width: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize:"14px",
            gap:"12px"
          }}
        >
          MY LINKIN
          <FaLinkedin style={{ fontSize: "24px" }}/>
        </div>
      </div>
    </div>
  );
};

export default MainProfile;
