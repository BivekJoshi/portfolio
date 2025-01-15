import React, { useEffect, useState } from "react";
import HeaderText from "../../components/HeaderText/HeaderText";
import WorkCard from "../../components/WorkCard/WorkCard";
import HRMS from "../../assets/Work/HRMS.png";
import YejusPaw from "../../assets/Work/YejusPaw.png";
import Render from "../../assets/Work/Render.png";
import ClientsPortal from "../../assets/Work/ClientsPortal.png";
import WorkModal from "../../components/Modal/WorkModal";

const LIST = [
  {
    id: 6,
    title: "Legal Remit",
    subTitle: "Send Money From Abroad",
    image: ClientsPortal,
  },
  {
    id: 7,
    title: "Bizaree System",
    subTitle: "Complete Restro Management System",
    image: ClientsPortal,
  },
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
    desc: "Yeju’s Paw is a comprehensive online platform to cater the need of pet lover’s and enthusiast. It provides wide range of products and services related to pets making this system one stop-shop for all your pet need. The main aim of this project is to provide user-friendly interface for the pet owners or future pet owners to create a seamless and enjoyable experience by connecting the customer inquiry to the available pet store or pet owner. The significance of this project lies in its potential to revolutionize pet care, empower pet owners, strengthen the veterinarian-pet owner relationship, and contribute to the overall well-being of pets in a modern and technologically advanced manner.",
  },
  {
    id: 3,
    title: "Render Education",
    subTitle: "Your Carrer Our Responsibility",
    image: Render,
    desc: "",
  },
  {
    id: 4,
    title: "Clients Portal",
    subTitle: "Complete Back office For Client",
    image: ClientsPortal,
  },
  {
    id: 5,
    title: "KYC",
    subTitle: "Know Your Client.",
    image: ClientsPortal,
  },
];
const Work = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
                  isMobile={isMobile}
                />
              </div>
              {index % 2 === 0 && index !== LIST.length - 1 && !isMobile && (
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
