import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import HeaderText from "../components/HeaderText/HeaderText";
import AboutMe from "../page/aboutme/AboutMe";
import Contact from "../page/contact/Contact";
import Resume from "../page/resume/Resume";
import Work from "../page/work/Work";
import LinkFollow from "../page/stats/LinkFollow";
import Education from "../page/education/Education";
import { ModeProvider } from "../layout/ModeContext";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <ModeProvider>
        <Routes>
          <Route exact path="*" element={<p>Error</p>} />
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<AboutMe />} />
            <Route path="/aboutMe" element={<AboutMe />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/work" element={<Work />} />
            <Route path="/stats" element={<LinkFollow />} />
            <Route path="/education" element={<Education />} />
          </Route>
        </Routes>
      </ModeProvider>
    </BrowserRouter>
  );
};

export default AppRoutes;
