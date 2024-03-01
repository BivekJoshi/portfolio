import React, { useEffect } from "react";
import HeaderText from "../../components/HeaderText/HeaderText";
import Experience from "../../assets/Icon/Experience.png";
import Education from "../../assets/Icon/Education.png";
import DGHUB from "../../assets/DGHUB.png";
import TU from "../../assets/TU.png";
import Moonlight from "../../assets/Moonlight.png";

const EDUEXPUI = ({
  title,
  timeContext,
  head,
  address,
  desc,
  img,
  logoImg,
}) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          borderBottom: "1px solid rgb(119, 119, 119)",
        }}
      >
        {img && (
          <>
            <div style={{ width: "60px", height: "60px" }}>
              <img src={img} style={{ width: "100%", height: "100%" }} />
            </div>
            <div>{title}</div>
          </>
        )}
      </div>
      <div
        style={{
          margin: "12px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              {timeContext && (
                <div
                  style={{
                    color: "orange",
                    border: "1px solid orange",
                    width: "fit-content",
                    padding: "4px",
                    fontWeight: "bold",
                    fontSize: "12px",
                    marginBottom: "12px",
                  }}
                >
                  {timeContext}
                </div>
              )}

              <div style={{ fontSize: "16px" }}>{head}</div>
              <div style={{ fontSize: "13px" }}>{address}</div>
            </div>
            {logoImg && (
              <div style={{ width: "80px", height: "70px" }}>
                <img src={logoImg} style={{ width: "100%", height: "100%" }} />
              </div>
            )}
          </div>
          <div style={{ fontSize: "13px", color: "#6B7280" }}>{desc}</div>
        </div>
      </div>
    </>
  );
};
const Resume = () => {
  return (
    <div>
      <HeaderText headerTitle="Resume" />
      <div style={{ width: "100%", display: "flex" }}>
        <div style={{ width: "50%", padding: "8px" }}>
          <EDUEXPUI
            title="Experience"
            timeContext="PRESENT 2024"
            head="React Developer"
            address="DG HUB, Kathmandu"
            img={Experience}
            logoImg={DGHUB}
            desc=" DigiHub has been introduced in Nepal to provide a single solution
          FinTech service to all required organizations including banks and
          financial institutions, central bank, and the Government of Nepal."
          />
        </div>
        <div
          style={{
            width: "50%",
            borderLeft: "1px solid rgb(119, 119, 119)",
            padding: "8px",
          }}
        >
          <EDUEXPUI
            title="Education"
            timeContext="PRESENT 2024"
            head="Shankerdev Campus"
            address="Putalisadak, Kathmandu"
            img={Education}
            logoImg={TU}
            desc="Tribhuvan University (Oldest and the largest university in Nepal)."
          />
        </div>
      </div>
      <div style={{ width: "100%", display: "flex" }}>
        <div style={{ width: "50%", padding: "8px" }}>
          {/* <EDUEXPUI
            desc="Tribhuvan University (Oldest and the largest university in Nepal)."
          /> */}
        </div>
        <div
          style={{
            width: "50%",
            borderLeft: "1px solid rgb(119, 119, 119)",
            padding: "8px",
          }}
        >
          <EDUEXPUI
            title="Education"
            timeContext="+2 2024"
            head="Moonlight Secondary School"
            address="Kumaripati, Lalitpur"
            logoImg={Moonlight}
            desc="MOLISS  is  committed  to providing quality education of the international standards."
          />
        </div>
      </div>
      <HeaderText headerTitle="Skills" />
    </div>
  );
};

export default Resume;
