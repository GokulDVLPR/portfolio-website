import './Skills.css'
import Skill from '../../Assets/skills.jpg.jpg'
const Skills = () => {
  return (
   <section id="Skills"><h2>Skills</h2>

   <div className='skills__container'>
    <img className='skills__image' src={Skill} alt='Img..'></img>
    <div className='skills__para'>

    <p>As a passionate and experienced full-stack web developer, I possess a diverse skill set that enables me to build robust and dynamic web applications from concept to deployment.
       My proficiency in both front-end and back-end technologies, combined with a deep understanding of web development principles, allows me to create seamless user experiences and scalable solutions.
       FRONT-END: Html,Css, JavaScript,ReactJS.
       BACK_END: NodeJS, ExpressJS, MongoDB,Github.
       </p>

</div>
</div>

       
   </section>
  )
}

export default Skills