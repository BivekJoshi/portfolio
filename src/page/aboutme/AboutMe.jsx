import React from "react";
import HeaderText from "../../components/HeaderText/HeaderText";
import Html from "../../assets/Work/Html.png";
import Js from "../../assets/Work/JS.png";
import Css from "../../assets/Work/CSS.png";
import ReactJs from "../../assets/Work/ReactJs.png";
import Figma from "../../assets/Work/Figma.png";
import GitLab from "../../assets/Work/GitLab.png";
import GitLogo from "../../assets/Work/GitLogo.png";

const Skill = [
  {
    img: Html,
    title: "Html",
  },
  {
    img: Css,
    title: "Css",
  },
  {
    img: Js,
    title: "Javascript",
  },
  {
    img: ReactJs,
    title: "ReactJs",
  },
  {
    img: Figma,
    title: "Figma",
  },
  {
    img: GitLab,
    title: "GitLab",
  },
  {
    img: GitLogo,
    title: "Git",
  },
];

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
            <div>Age ............ 21</div>
          </div>
        </div>
      </div>
      <HeaderText headerTitle="Skills/ Tools" />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "4rem",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop:"2rem"
        }}
      >
        {Skill.map((data, index) => {
          return (
            <div
              key={index}
              style={{
                width: "50px",
                height: "50px",
                display: "flex",
                flexDirection: "column",
                alignItems:"center",
                justifyContent:"center"
              }}
            >
              <img src={data?.img} style={{ width: "100%", height: "100%" }} />
              <div><b>{data?.title}</b></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutMe;
