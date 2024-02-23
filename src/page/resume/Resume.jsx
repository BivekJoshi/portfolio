import React from "react";
import HeaderText from "../../components/HeaderText/HeaderText";
import { FaReact } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa";

const Resume = () => {
  return (
    <div>
      <HeaderText headerTitle="Resume" />
      <div style={{ display: "flex",gap:"2rem" ,alignItems:"center"}}>
        <div
          style={{
            color: "orange",
            width: "32px",
            height: "32px",
          }}
        >
          <FaNetworkWired
            style={{
              border: "2px solid orange",
              borderRadius: "50%",
              padding: "6px",
              width: "100%",
              height: "100%",
            }}
          />
        </div>
        <div>
          <h4>Experience</h4>
        </div>
      </div>
    </div>
  );
};

export default Resume;
