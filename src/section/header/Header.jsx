import './Header.css'
import assets from '../../Assets/assets.jpg'

import {FaWhatsappSquare} from 'react-icons/fa'
import{AiFillInstagram} from 'react-icons/ai'
import{FaSquareXTwitter} from 'react-icons/fa6'
import{MdEmail} from 'react-icons/md'


const Header = () => (
  <header id="header">
    <div className='container header__container'>
      <div className='header__profile'>
        <img src={assets} alt="Header Portrait" />
      </div>

      <h3>GOKUL D</h3>


      <p>Welcome to my portfolio. While I may not have a vast array of professional experience to share just yet,
        what I do have is an unbridled passion for creativity and a burning desire to learn and grow.
        This portfolio is a glimpse into my journey as I explore the world of design and innovation.
             Join me in this exciting adventure, where every pixel, line,
        and idea represents my dedication to honing my craft and making a mark in the world of design.</p>


      <div className='header__socials'>
        <a href='https://twitter.com/@GokulDcruze26' target='_blank' rel="noopener noreferrer">
          <FaSquareXTwitter />
         </a>
       <a href='https://msng.link/o?funtastic_gokul=ig' target='_blank' rel='noopener noreferrer'>
          <AiFillInstagram/>
       </a>
       <a href='https://wa.link/ltawv6' target='_blank' rel='noopener noreferrer'>
           <FaWhatsappSquare/>
       </a>
       <a href='mailto:gokuldhanasekar2626@gmail.com' target='_blank' rel='noopener noreferrer'>
        <MdEmail/>
       </a>


      </div>




    </div>
  </header>
);

export default Header