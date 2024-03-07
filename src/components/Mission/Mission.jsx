import './Mission.css'

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import wavesImage from "../../assets/waves.png"
import plantImages from "../../assets/plants.png"

gsap.registerPlugin(ScrollTrigger);

function Mission() {

  const redBox = useRef();
  const blueBox = useRef();
  const container = useRef();

  useGSAP(() => {
    gsap.to(redBox.current, {
      x: 116.5, duration: 1, ease: "power3.inOut", opacity: 1, scrollTrigger: {
        trigger: redBox.current,
        start: "top 50%",
        end: "top 20%",
        toggleActions: "play none none none",
      }
    })
    gsap.to(blueBox.current, {
      x: -116.5, duration: 1, ease: "power3.inOut", opacity: 1, scrollTrigger: {
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
    backgroundImage: `url(${plantImages}), linear-gradient(0deg, rgba(32, 97, 32, 0.4) 0%, rgba(0, 0, 0, 0) 57%), linear-gradient(0deg, rgba(51, 153, 51, 0.84), rgba(51, 153, 51, 0.84))`,
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
        <h1>NOTRE VISION</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet.</p>
        <button>EN SAVOIR PLUS</button>
      </div>
    </div>
  )
}

export default Mission
