import React from "react";
import HeaderText from "../../components/HeaderText/HeaderText";
import { useMode } from "../../layout/ModeContext";

const Contact = () => {
  const { mode } = useMode();
  return (
    <div>
      <HeaderText headerTitle="Get in Touch" />
      <div style={{ width: "100%", height: "100px" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7066.988841507452!2d85.32366919999996!3d27.6711098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19daaaad1fb9%3A0xce05a6a8240aca9d!2sTangal%20Tole%2C%20Lalitpur%2044600!5e0!3m2!1sen!2snp!4v1709290723897!5m2!1sen!2snp"
          width="100%"
          height="250px"
          style={{ filter: mode === "dark" ? "invert(100%)" : "none" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: "150px",
        }}
      >
        <div>
          <h5>ADDRESS .....Tangal-19, Lalitpur</h5>
          <h5>PHONE .....9865466989</h5>
        </div>
        <div>
          <h5>EMAIL .....bvkjosi03@gmail.com</h5>
          <h5></h5>
        </div>
      </div>
      <HeaderText headerTitle="Contact Form" />
    </div>
  );
};

export default Contact;
