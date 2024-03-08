import './Axe.css'
import videoFlag from "../../assets/1219wSound.mp4"

function Axe() {

  return (
    <>
      <div className='mega-container-axe'>

        <div className='title-container-axe'>
          <h1 className='title-axe'>LE DRAPEAU DE L'URGENCE CLIMATIQUE</h1>
          <div className='text-axe'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis officia magnam ab perspiciatis fuga reprehenderit ipsa consectetur, earum, excepturi voluptatum vel! Quibusdam iure minus excepturi culpa perspiciatis mollitia sequi nobis.</div>
        </div>

        <div className='container-video-axe'>
          <video
            className="video-flag desktop-only"
            loop
            autoPlay
            playsInline
            muted
            alt="video du drapeau earth flag one flottant"
          >
            <source src={videoFlag} type="video/mp4" />
          </video>
        </div>

      </div >
    </>
  )
}

export default Axe
