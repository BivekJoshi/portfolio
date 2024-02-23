import React from "react";
import HeaderText from "../../components/HeaderText/HeaderText";
import LinkUI from "../../components/LinkUI/LinkUI";
import Discord from "../../assets/Discord.png";
import Facebook from "../../assets/Facebook.png";
import Git from "../../assets/Git.png";
import Insta from "../../assets/Insta.png";
import LinkIn from "../../assets/Linkin.png";

const LinkFollow = () => {
  const LINK_LIST = [
    {
      id: 1,
      image: Git,
      title: "Github",
      desc: "Star my projects on Github",
      redirectUrl: "https://github.com/BivekJoshi",
    },
    {
      id: 2,
      image: Facebook,
      title: "Facebook",
      desc: "Follow me on Facebook",
      redirectUrl: "https://www.facebook.com/bivek.joshi.56",
    },
    {
      id: 5,
      image: LinkIn,
      title: "LinkedIn",
      desc: "Let's connect on Linkedin",
      redirectUrl: "https://www.linkedin.com/in/bivek-joshi-68b02b239/",
    },
    {
      id: 3,
      image: Insta,
      title: "Instagram",
      desc: "Follow me on Instagram",
      redirectUrl: "https://www.instagram.com/bivek.joshi.56/",
    },
    {
      id: 4,
      image: Discord,
      title: "Discord",
      desc: "Let's chat on Discord. My username - bvkjosi",
      redirectUrl: "https://discord.com/",
    },
  ];
  return (
    <div>
      <HeaderText headerTitle="Links" />
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {LINK_LIST.map((data, index) => {
          return (
            <div key={data?.id || index}>
              <LinkUI
                image={data?.image}
                title={data?.title}
                desc={data?.desc}
                redirectUrl={data?.redirectUrl}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LinkFollow;
