import './App.css'
import Action from './components/Action/Action'
import Header from './components/Header'
import Hero from './components/Hero'
import Mission from './components/Mission/Mission'

import { useEffect, useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Lenis from '@studio-freight/lenis';
import Axe from './components/Axe/Axe'
import Footer from './components/Footer/Footer'

gsap.registerPlugin(ScrollTrigger);

function App() {

  const squareBlue = useRef();
  const squareGreen = useRef();

  useGSAP(() => {
    gsap.to(squareBlue.current, {
      x: -1000, duration: 1.5, ease: "power3.inOut", opacity: 1,
    })
    gsap.to(squareGreen.current, {
      x: 1000, duration: 1.5, ease: "power3.inOut", opacity: 1,
    })
  }, []);

  const megaCont = useRef();

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smooth: true,

    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <div className='preloader'>
        <div ref={squareBlue} className='square blue'></div>
        <div ref={squareGreen} className='square green'></div>
      </div>
      <div ref={megaCont} className='super-container-app'>
        <Header />
        <Hero />
        <Mission />
        <Action />
        {/* <Axe /> */}
        <Footer />
      </div>
    </>
  )
}

export default App
