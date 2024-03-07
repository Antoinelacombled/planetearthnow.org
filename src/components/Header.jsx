import './Header.css'

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

import penLogo from "../../src/assets/PEN.png"

gsap.registerPlugin(ScrollTrigger);

function Header() {

  const headerRef = useRef();


  useGSAP(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top",
        end: "bottom",
        scrub: true,
        onEnter: () => {
          gsap.set(headerRef.current, { className: 'header-mega-container-transformed' });
        },
        onLeaveBack: () => {
          gsap.set(headerRef.current, { className: 'header-mega-container' });
        },
      },
    })
  }, []);

  return (
    <>
      <div ref={headerRef} className='header-mega-container'>
        <img src={penLogo} className='flag-icon' alt="Logo Planet Earth Now" />
        <nav className='header-nav'>
            <div className='header-element'>L'association</div>
            <div className='header-element bold'>instruire</div>
            <div className='header-element bold'>unir</div>
            <div className='header-element bold'>agir</div>
            <div className='header-element'>blog</div>
            <div className='header-element'>contact</div>
        </nav>
      </div>
    </>
  )
}

export default Header
