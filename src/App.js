import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import React, {useRef} from 'react';
import resumePDF from './Vernon-Resume-08-08-23.pdf';
import {Parallax, ParallaxLayer} from '@react-spring/parallax';
import resumePDFNew from './Vernon-Web-Developer-Resume-10-14-23.pdf';

function App() {
  //initializing variables with useRef hook
const HomeRef = useRef(null);
const AboutMeRef = useRef(null);
const ResumeRef = useRef(null);
const PortfolioRef = useRef(null);
const ContactRef = useRef(null);
  
  // Have to use the functions below to reference the location of each section. When the click action happens
  //the functions get called

  const scrollToHome = () => {
    return HomeRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToAboutMe = () => {
    return AboutMeRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToResume = () => {
    return ResumeRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToPortfolio = () => {
    return PortfolioRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    return ContactRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  
 
  // useEffect(()=>{
  //   console.log('Home', HomeRef.current);
  //   console.log(AboutMeRef.current);


  // },[AboutMeRef])

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = resumePDFNew;
    link.download = './Vernon-Web-Developer-Resume-10-14-23.pdf'; // Specify the desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <div className="App">
            <Header
            scrollToHome = {scrollToHome}
            scrollToAboutMe = {scrollToAboutMe}
            scrollToResume = {scrollToResume}
            scrollToPortfolio = {scrollToPortfolio}
            scrollToContact = {scrollToContact}
            />
            <Home HomeRef = {HomeRef}/>
            <AboutMe AboutMeRef={AboutMeRef} downloadResume = {downloadResume}/>
            <Resume ResumeRef={ResumeRef} downloadResume={downloadResume}/>
            <Portfolio PortfolioRef = {PortfolioRef}/>
            <Contact ContactRef = {ContactRef}/>
    </div>
  );
}

export default App;
