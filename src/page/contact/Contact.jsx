import React from "react";
import HeaderText from "../../components/HeaderText/HeaderText";
import Map from "../../assets/Map.png";

const Contact = () => {
  return (
    <div>
      <HeaderText headerTitle="Get in Touch" />
      <div  style={{width:"100%",height:"100px"}}>
        <img src={Map} alt="Map" style={{width:"100%",height:"250%"}}/>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop:"150px"
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
