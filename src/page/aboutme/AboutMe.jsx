import React from "react";
import HeaderText from "../../components/HeaderText/HeaderText";

const AboutMe = () => {
  return (
    <div>
      <HeaderText headerTitle="About Me" />
      <div style={{ padding: "12px" }}>
        <div>
          <b>Hello! I'm Bivek Prasad Joshi.</b>
        </div>
        <p>
          I am Frontend React Developer. I have been creating user-friendly,
          responsive websites for more than a year, and I hold a bachelor's
          degree in Information Management (BIM) equips myself with a solid
          understanding of information systems, data management, and technology
          integration within organizations.
        </p>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
            <p>Phone ............ 9865466989</p>
            <div>Email ............ bvkjosi03@gmail.com</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p>Address ............ Tangal-19, Lalitpur</p>
            <div>Age ............  21</div>
          </div>
        </div>
      </div>
      <HeaderText headerTitle="My Strength" />
    </div>
  );
};

export default AboutMe;
