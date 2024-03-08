import './Action.css'

import agriculture from '../../assets/agriculture.png'
import reforestation from '../../assets/reforestation.png'
import biodiversite from '../../assets/biodiversite.png'

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Action() {
  const container = useRef();
  const clap = useRef();
  const refAgriculture = useRef();
  const refReforestation = useRef()
  const refBiodiversite = useRef()
  const overlayAgri = useRef();
  const overlayRefo = useRef();
  const overlayBio = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: clap.current,
        start: "top 80%",
        end: "top 30%",
        scrub: true,
      },
    });

    tl.to(refAgriculture.current, { opacity: 1, duration: 0.6 })
      .to(refReforestation.current, { opacity: 1, duration: 0.6 })
      .to(refBiodiversite.current, { opacity: 1, duration: 0.6 })
      .to(overlayAgri.current, { opacity: 1, duration: 0.4 })
      .to(overlayRefo.current, { opacity: 1, duration: 0.4 })
      .to(overlayBio.current, { opacity: 1, duration: 0.4 });
  }, []);


  useGSAP(() => {
    gsap.context(() => {
      const tlp = gsap.timeline({
        scrollTrigger: {
          target: clap.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      })

      tlp.to(refAgriculture.current, { y: -470 }, 0)
      tlp.to(refReforestation.current, { y: -470 }, 0)
      tlp.to(refBiodiversite.current, { y: -470 }, 0)
    })
  })

  const bounceIn = (element) => {
    gsap.to(element, { scale: 1.10, duration: 0.7, ease: "elastic.out(1,0.3)" });
  };

  const bounceOut = (element) => {
    gsap.to(element, { scale: 1, duration: 0.7, ease: "elastic.out(1,0.3)" });
  };

  return (
    <div ref={container} className='mega-container-action'>
      <div className='title-container-action'>
        <h1 className='title-action'>NOS CHAMPS D'ACTION</h1>
        <div ref={clap} className='text-action'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis officia magnam ab perspiciatis fuga reprehenderit ipsa consectetur, earum, excepturi voluptatum vel! Quibusdam iure minus excepturi culpa perspiciatis mollitia sequi nobis.</div>
      </div>
      <div className='container-img-action'>
        <div className='image-container'>
          <img ref={refAgriculture} src={agriculture} className='img-action agriculture'
            onMouseEnter={() => bounceIn(refAgriculture.current)}
            onMouseLeave={() => bounceOut(refAgriculture.current)} />
        </div>
        <div className='image-container'>
          <img ref={refReforestation} src={reforestation} className='img-action reforestation'
            onMouseEnter={() => bounceIn(refReforestation.current)}
            onMouseLeave={() => bounceOut(refReforestation.current)} />
        </div>
        <div className='image-container'>
          <img ref={refBiodiversite} src={biodiversite} className='img-action biodiversite'
            onMouseEnter={() => bounceIn(refBiodiversite.current)}
            onMouseLeave={() => bounceOut(refBiodiversite.current)} />
        </div>
      </div>
    </div>
  )
}

export default Action
