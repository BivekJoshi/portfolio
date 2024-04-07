import React, { useEffect, useState } from "react";
import ClickableButton from "../../components/ClickableButton/ClickableButton";
import MainProfile from "./MainProfile";
import { MdOutlineMenuBook } from "react-icons/md";
import { AiFillProfile } from "react-icons/ai";
import { SiBlogger } from "react-icons/si";
import { FaLocationArrow } from "react-icons/fa6";
import { IoStatsChartSharp } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { MdOutlineDensitySmall } from "react-icons/md";
import MyPhoto from "../../assets/MyPhoto.jpg";
import Cv from "../../assets/BivekCv.pdf";

const REDIRECT = [
  // {
  //   id: 1,
  //   path: "",
  //   icon: <MdOutlineDensitySmall />,
  // },
  // {
  //   id: 2,
  //   path: "",
  //   icon: <MdOutlineMenuBook />,
  // },
  {
    id: 3,
    path: "aboutMe",
    buttonName: "ABOUT",
    icon: <IoMdContact />,
  },
  {
    id: 4,
    path: "resume",
    buttonName: "RESUME",
    icon: <AiFillProfile />,
  },
  {
    id: 5,
    path: "work",
    buttonName: "WORKS",
    icon: <FaEye />,
  },
  // {
  //   id: 6,
  //   path: "education",
  //   buttonName: "EDUCATI..",
  //   icon: <SiBlogger />,
  // },
  {
    id: 7,
    path: "stats",
    buttonName: "STATS",
    icon: <IoStatsChartSharp />,
  },
  {
    id: 8,
    path: "contact",
    buttonName: "CONTACT",
    icon: <FaLocationArrow />,
  },
];
const Profile = ({ mode }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as per your requirement
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {
        isMobile ?
          <div>
            <div
              style={{
                backgroundColor: mode === "dark" ? "#111827" : "rgb(229, 229, 229)",
                width: "95%",
                height: "10%",
                borderRadius: "12px",
                margin: "12px 0px",
                padding: "12px",
                display: "flex",
                gap: "16px"
              }}
            >
              <div style={{ width: "80px", height: "80px" }}>
                <img
                  src={MyPhoto}
                  style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                  alt="MyPhoto"
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column", marginTop: "12px" }}>
                <div style={{ fontSize: "15px", fontWeight: "bold" }}>
                  Bivek Pd. Joshi
                </div>
                <div style={{ fontSize: "15px", fontWeight: "bold" }}>
                  React Frontend Developer
                </div>
                <a href={Cv} download="BivekCv.pdf">
                  <button style={{
                    backgroundColor: mode === "dark" ? "#705017" : "#EFCB89",
                    // border: "1px solid #E5E5E5",
                    padding: "7px",
                    borderRadius: "6px",
                    width: "134px",
                    color: "black",
                    fontWeight: "bold",
                    boxShadow: "inherit"
                  }}>
                    Download Cv
                  </button>
                </a>

              </div>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: ".5rem",
              }}
            >
              {REDIRECT.map((data, index) => {
                return (
                  <div key={index}>
                    <ClickableButton
                      icon={data?.icon}
                      path={data?.path}
                      buttonName={data?.buttonName}
                      mode={mode}
                    />
                  </div>
                );
              })}
            </div>
          </div> :
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
            }}
          >
            <div
              style={{
                width: "17%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: ".5rem",
              }}
            >
              {REDIRECT.map((data, index) => {
                return (
                  <div key={index}>
                    <ClickableButton
                      icon={data?.icon}
                      path={data?.path}
                      buttonName={data?.buttonName}
                      mode={mode}
                    />
                  </div>
                );
              })}
            </div>
            <div
              style={{
                width: "83%",
                borderRadius: "12px",
                position: "relative",
              }}
            >
              <div
                style={{
                  backgroundColor: mode === "dark" ? "#111827" : "rgb(229, 229, 229)",
                  width: "97%",
                  height: "100%",
                  position: "absolute",
                  right: 0,
                  zIndex: 1,
                  borderRadius: "12px",
                  boxShadow:
                    mode === "dark"
                      ? "5px 0 5px rgb(7, 11, 20)"
                      : "5px 0 5px rgb(147, 147, 147)",
                }}
              >
                <MainProfile mode={mode} />
              </div>
              <div
                style={{
                  // backgroundColor: "red",
                  backgroundColor: mode === "dark" ? "#705017" : "#EFCB89",
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  bottom: 10,
                  borderRadius: "12px",
                }}
              />
            </div>
          </div>
      }

    </>

  );
};

export default Profile;
