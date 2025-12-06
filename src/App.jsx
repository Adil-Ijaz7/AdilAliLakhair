import React, { useState } from 'react'
import Home from './pages/Home'
import Skills from './components/Skills'
import Navbar from './components/Navbar'
import About from './components/About'
import Footer from './components/Footer'
import ProjectsEnhanced from './components/ProjectsEnhanced'
import Contact from './components/Contact'
import CustomCursor from './utils/CursorAnimation'
import LoadingScreen from './components/LoadingScreen'
import BackToTop from './components/BackToTop'
import Testimonials from './components/Testimonials'
import StatsCounter from './components/StatsCounter'
import Timeline from './components/Timeline'

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      ) : (
        <div className='font-sora scroll-smooth overflow-x-hidden bg-white dark:bg-gray-900 transition-colors duration-300'>
          <CustomCursor/>
          <Navbar />
          <Home />
          <StatsCounter />
          <About />
          <Timeline />
          <Skills />
          <ProjectsEnhanced />
          <Testimonials />
          <Contact />
          <Footer />
          <BackToTop />
        </div>
      )}
    </>
  )
}
