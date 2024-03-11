import React, { useState } from "react";
import HeaderText from "../../components/HeaderText/HeaderText";
import WorkCard from "../../components/WorkCard/WorkCard";
import HRMS from "../../assets/Work/HRMS.png";
import YejusPaw from "../../assets/Work/YejusPaw.png";
import WorkModal from "../../components/Modal/WorkModal";

const LIST = [
  {
    id: 1,
    title: "HRMS",
    subTitle: "Human Resource Management System",
    image: HRMS,
    desc: "Human Resoure Managemant aims to simplify and better manage the tasks of the Human Resourse Departments (HRD) in an organization. With HRMS, organaization xan enjoy a centralized platform for various HR functions like employee Information. recruitments processes, attendnce, payroll, employee benefits,etc.  ",
  },
  {
    id: 2,
    title: "Yejus Paw",
    subTitle: "A complete Guide for your pet",
    image: YejusPaw,
    desc: "",
  },
  {
    id: 3,
    title: "helo",
    subTitle: "hiiii",
    image: YejusPaw,
    desc: "",
  },
  {
    id: 3,
    title: "helo",
    subTitle: "hiiii",
    image: YejusPaw,
    desc: "",
  },
  // {
  //   id: 4,
  //   title: "helo",
  //   subTitle: "hiiii",
  // },
];
const Work = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  const handleOpenModal = (data) => {
    setModalData(data);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <div>
      <div>
        <HeaderText headerTitle="Works (Each Projects is a unique piece of development)" />
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
              <div onClick={() => handleOpenModal(data)}>
                <WorkCard
                  image={data?.image}
                  title={data?.title}
                  subTitle={data?.subTitle}
                />
              </div>
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
      {openModal && <WorkModal data={modalData} onClose={handleCloseModal} />}
    </div>
  );
};

export default Work;
