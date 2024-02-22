import React from "react";

const ClickableButton = ({ buttonName, icon }) => {
  return (
    <div
      style={{
        width: "70px",
        height: "60px",
        backgroundColor: "#111827",
        color: "rgb(242, 242, 242)",
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        flexDirection: "column",
        fontSize: "12px",
        fontWeight: "bold",
        gap: "4px",
      }}
    >
      <div style={{ fontSize: "24px" }}>{icon}</div>
      {buttonName}
    </div>
  );
};

export default ClickableButton;
