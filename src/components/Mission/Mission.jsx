import './Mission.css'

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import wavesImage from "../../assets/waves.png"
import plantImages from "../../assets/plants.png"

import onu from "../../assets/onu.jpg"

gsap.registerPlugin(ScrollTrigger);

function Mission() {

  const redBox = useRef();
  const blueBox = useRef();
  const container = useRef();

  useGSAP(() => {
    gsap.to(redBox.current, {
      x: 50.5, duration: 1, ease: "power3.inOut", opacity: 1, scrollTrigger: {
        trigger: redBox.current,
        start: "top 50%",
        end: "top 20%",
        toggleActions: "play none none none",
      }
    })
    gsap.to(blueBox.current, {
      x: -50.5, duration: 1, ease: "power3.inOut", opacity: 1, scrollTrigger: {
        trigger: redBox.current,
        start: "top 50%",
        end: "top 20%",
        toggleActions: "play none none none",
      }
    })
  }, { scope: container })



  const squareStyleOne = {
    backgroundImage: `url(${wavesImage}), linear-gradient(360deg, rgba(27, 49, 99, 0.567) 0%, rgba(27, 49, 99, 0) -50%), linear-gradient(0deg, rgba(46, 80, 158, 0.93), rgba(46, 80, 158, 0.93))`,
    backgroundBlendMode: 'multiply',
    backgroundSize: 'cover',
  };

  const squareStyleTwo = {
    backgroundColor: "black",
    backgroundBlendMode: 'multiply',
    backgroundSize: 'cover',
  };

  return (
    <div className='mega-container-mission' ref={container}>
      <div className='square-mission one' style={squareStyleOne} ref={redBox}>
        <h1>NOTRE MISSION</h1>
        <p>Éclairer les citoyens du monde autour des réalités environnementales et exhorter chacun à l'action et à la mobilisation.</p>
        <button>EN SAVOIR PLUS</button>
      </div>

      <div className='square-mission two' style={squareStyleTwo} ref={blueBox}>
        {/* <img className='img-mission-two' src={onu} /> */}
      </div>
    </div >
  )
}

export default Mission
