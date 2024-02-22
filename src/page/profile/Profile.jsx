import React from "react";
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

const REDIRECT = [
  {
    id: 1,
    path: "",
    icon: <MdOutlineDensitySmall />,
  },
  {
    id: 2,
    path: "",
    icon: <MdOutlineMenuBook />,
  },
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
  {
    id: 6,
    path: "",
    buttonName: "EDUCATI..",
    icon: <SiBlogger />,
  },
  {
    id: 7,
    path: "",
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
const Profile = () => {
  return (
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
              <ClickableButton icon={data?.icon} path={data?.path} buttonName={data?.buttonName}/>
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
            backgroundColor: "#111827",
            width: "97%",
            height: "100%",
            position: "absolute",
            right: 0,
            zIndex: 1,
            borderRadius: "12px",
          }}
        >
          <MainProfile />
        </div>
        <div
          style={{
            backgroundColor: "#2A2110",
            position: "relative",
            width: "100%",
            height: "100%",
            bottom: 10,
            borderRadius: "12px",
          }}
        />
      </div>
    </div>
  );
};

export default Profile;
