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
        <ClickableButton icon={<MdOutlineDensitySmall/>}/>
        <ClickableButton icon={<MdOutlineMenuBook/>}/>
        <ClickableButton icon={<IoMdContact/>} buttonName="ABOUT"/>
        <ClickableButton icon={<AiFillProfile/>} buttonName="RESUME"/>
        <ClickableButton icon={<FaEye/>} buttonName="WORKS"/>
        <ClickableButton icon={<SiBlogger/>} buttonName="BLOG"/>
        <ClickableButton icon={<IoStatsChartSharp/>} buttonName="STATS"/>
        <ClickableButton icon={<FaLocationArrow/>} buttonName="CONTACT"/>
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
            borderRadius:"12px"
          }}
        >
          <MainProfile/>
        </div>
        <div
          style={{
            backgroundColor: "#2A2110",
            position: "relative",
            width: "100%",
            height: "100%",
            bottom: 10,
            borderRadius:"12px"
          }}
        />
      </div>
    </div>
  );
};

export default Profile;
