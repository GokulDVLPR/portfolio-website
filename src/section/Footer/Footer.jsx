import './Footer.css'
import{AiFillLinkedin} from 'react-icons/ai'
import{BsGithub} from 'react-icons/bs'
import data from './data'

const Footer = () => {
  return (
   <footer id="footer"> 

    <a href='#' className='footer__logo'>Gokul</a>
    <ul className='permlinks'>
    {
      data.map(item => <li key={item.id}><a href={item.link}> {item.title}</a></li>)
    }     

    </ul>
    <div className="footer__social"> 
     <a href="http://www.linkedin.com/in/gokul-d-9b6343293?utm_source=share&utm_campaign=share_
     via&utm_content=profile&utm_medium=android_app"><AiFillLinkedin/></a>
     <a href="https://github.com/GokulDVLPR"><BsGithub/></a>
    
    </div>
    <div className="footer__copyright">
      <small> &copy; Gokul Developer.All Rights Reserved</small>
    </div>
   </footer>
  )
}

export default Footer