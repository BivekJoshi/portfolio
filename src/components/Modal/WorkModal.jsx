import React from "react";
import { useMode } from "../../layout/ModeContext";
import HRMS from "../../assets/HRMS.png";
import { FaGithub } from "react-icons/fa6";
import { HiOutlineViewGridAdd } from "react-icons/hi";

const WorkModal = ({ data, onClose }) => {
  const { mode } = useMode();

  return (
    <div
      style={{
        position: "fixed",
        width: "900px",
        height: "90%",
        backgroundColor: mode === "dark" ? "#343D49" : "#F2F2F2",
        zIndex: 999,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        // padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "1px solid rgb(119, 119, 119)",
        }}
      >
        <div style={{ fontSize: "22px", fontWeight: 500 }}>{data?.title}</div>
        <button
          style={{
            fontWeight: 500,
            fontSize: "23px",
            backgroundColor: "rgb(214, 212, 212)",
            padding: "2px",
            borderRadius: "50%",
            border:"none",
            width:"2rem"
          }}
          onClick={onClose}
        >
          𝗑
        </button>
      </div>
      <div>{data?.desc}</div> */}
      <div style={{ position: "absolute", right: "10px", top: "10px" }}>
        <button
          style={{
            fontWeight: 500,
            fontSize: "23px",
            backgroundColor: "rgb(214, 212, 212)",
            padding: "2px",
            borderRadius: "50%",
            border: "none",
            width: "2rem",
            hover:{
              backgroundColor:"red"
            }
          }}
          onClick={onClose}
        >
          𝗑
        </button>
      </div>
      <div style={{ width: "cover", height: "350px" }}>
        <img
          src={HRMS}
          style={{ width: "100%", height: "100%", borderRadius: "8px 8px 0 0" }}
        />
      </div>
      <div style={{ padding: "20px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>{data?.title}</div>
          <div style={{ display: "flex", gap: ".5rem" }}>
            <div
              style={{
                backgroundColor: "#0284C7",
                padding: "9px",
                color: "#ffff",
                borderRadius: "18px",
                fontSize: "14px",
                display: "flex",
                gap: "6px",
                alignItems: "center",
              }}
            >
              View <HiOutlineViewGridAdd fontSize={"20px"} />
            </div>
            <div
              style={{
                backgroundColor: "black",
                padding: "9px",
                color: "#ffff",
                borderRadius: "18px",
                fontSize: "14px",
                display: "flex",
                gap: "6px",
                alignItems: "center",
              }}
            >
              Git Hub
              <FaGithub fontSize={"20px"} />
            </div>
          </div>
        </div>
        <div>{data?.desc}</div>
      </div>
    </div>
  );
};

export default WorkModal;
