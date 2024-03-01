import React from "react";
import HeaderText from "../../components/HeaderText/HeaderText";
import WorkCard from "../../components/WorkCard/WorkCard";
import HRMS from "../../assets/Work/HRMS.png";
import YejusPaw from "../../assets/Work/YejusPaw.png";

const LIST = [
  {
    id: 1,
    title: "HRMS",
    subTitle: "Human Resource Management System",
    image: HRMS,
  },
  {
    id: 2,
    title: "Yejus Paw",
    subTitle: "A complete Guide for your pet",
    image: YejusPaw,
  },
  {
    id: 3,
    title: "helo",
    subTitle: "hiiii",
    image: YejusPaw,
  },
  {
    id: 3,
    title: "helo",
    subTitle: "hiiii",
    image: YejusPaw,
  },
  // {
  //   id: 4,
  //   title: "helo",
  //   subTitle: "hiiii",
  // },
];
const Work = () => {
  return (
    <div>
      <HeaderText headerTitle="Work" />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          padding: "12px",
        }}
      >
        {LIST.map((data, index) => (
          <React.Fragment key={data.id}>
            <WorkCard
              image={data?.image}
              title={data?.title}
              subTitle={data?.subTitle}
            />
            {index % 2 === 0 && index !== LIST.length - 1 && (
              <div
                style={{
                  borderRight: "1px solid rgb(119, 119, 119)",
                }}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Work;
