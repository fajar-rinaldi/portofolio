import './App.css';
import { useState, useEffect } from "react";
import styled, { ThemeProvider } from 'styled-components';
import {darkTheme} from "./utils/Theme"
import Navbar from './components/Navbar';
import Hero from './components/HeroSection';
import Skills from './components/Skills';
import Education from './components/education';
import Experience from './components/Experience';
import Projects from "./components/Projects";
import { BrowserRouter as Router} from "react-router-dom";
import Contact from "./components/Contact";
import ProjectDetails from "./components/ProjectDetails";
import Certificate from "./components/Certificate";
import Footer from "./components/Footer";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg, 
      rgba(204, 0, 187, 0.15) 0%, 
      rgba(201, 32, 184, 0) 50%
    ), 
    linear-gradient(
      141.27deg, rgba(0, 70, 209, 0) 50%, 
      rgba(0, 70, 209, 0.15) 100%
      );
    width: 100%;
    clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`;


function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal)
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Navbar />
        <Body>
          <Hero/>
          <Wrapper>
            <Skills />
            <Experience />
          </Wrapper>
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <Wrapper>
            <Education />
            <Certificate />
            <Contact />
          </Wrapper>
          <Footer />
          {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
