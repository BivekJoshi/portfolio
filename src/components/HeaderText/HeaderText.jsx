import React from "react";
import "./HeaderText.css"; // Import the CSS file for styling

const HeaderText = ({ headerTitle }) => {
  return (
    <div style={{ padding: "10px" }}>
      <div className="header-text">{headerTitle}</div>
      <div
        style={{
          width: "100%",
          borderTop: "1px solid rgb(119, 119, 119)",
          marginTop: "8px",
        }}
      />
    </div>
  );
};

export default HeaderText;
