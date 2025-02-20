import React, { useEffect, useState } from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import HeaderText from "../components/HeaderText/HeaderText";
import AboutMe from "../page/aboutme/AboutMe";
import Contact from "../page/contact/Contact";
import Resume from "../page/resume/Resume";
import Work from "../page/work/Work";
import LinkFollow from "../page/stats/LinkFollow";
import Education from "../page/education/Education";
import { ModeProvider } from "../layout/ModeContext";
import Loader from "../components/Loader/Loader";
import Tiktakto from "../page/Games/Tiktakto/Tiktakto";

const AppRoutes = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <HashRouter hashType="slash">
      <ModeProvider>
        {loading ? (
          <Loader />
        ) : (
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
              <Route path="/game" element={<Tiktakto />} />
            </Route>
          </Routes>
        )}
      </ModeProvider>
    </HashRouter>
  );
};

export default AppRoutes;
