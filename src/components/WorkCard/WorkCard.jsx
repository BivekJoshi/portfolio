import React from "react";

const WorkCard = ({image,title,subTitle}) => {
  return (
    <div>
      <div
        style={{ width: "300px", height: "170px" }}
      >
        <img src={image} style={{width:"100%",height:"100%"}}/>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
          marginBottom:"12px"
        }}
      >
        <div>{title}</div>
        <div>{subTitle}</div>
      </div>
    </div>
  );
};

export default WorkCard;
