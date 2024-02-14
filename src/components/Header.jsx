import './Header.css'

import flag from "../assets/DrapeauPNG.png"

function Header() {

  return (
    <>
    <div className='header-mega-container'>
        <img className='flag-icon' src={flag}/>
        <div className='header-element' >d1sss</div>
        <div className='header-element'>d2</div>
        <div className='header-element'>d3</div>
    </div>
    </>
  )
}

export default Header
