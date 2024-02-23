import React, { useState } from "react";
import { IoArrowRedo } from "react-icons/io5";

const LinkUI = ({ image, title, desc, redirectUrl }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      style={{
        backgroundColor: isHovered ? "rgb(52, 61, 73)" : "#1F2937",
        height: "50px",
        borderRadius: "6px",
        padding: "9px",
        display: "flex",
        gap: "12px",
        position: "relative",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          width: "50px",
          height: "50px",
          border: "1px solid rgb(119, 119, 119)",
          borderRadius: "4px",
        }}
      >
        <div style={{ padding: "6px" }}>
          <img src={image} style={{ width: "100%", height: "100%" }} />
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        <div style={{ fontSize: "16px" }}>
          <b>{title}</b>
        </div>
        <div style={{ fontSize: "15px" }}>{desc}</div>
      </div>
      {isHovered && (
        <div
          style={{
            position: "absolute",
            right: 0,
            top: -6,
            backgroundColor: "#0B0F17",
            borderRadius: "50%",
            padding: "4px",
          }}
          onClick={() => window.open(redirectUrl, "_blank")}
        >
          <IoArrowRedo />
        </div>
      )}
    </div>
  );
};

export default LinkUI;
