import "./Education.css";
import education from "../../Assets/HeroImage.jpg.jpg";

const Education = () => {
  return (
    <section id="Education"><h2>Education</h2>
      <div className="education__container">
        <img className="education__image" src={education} alt="img..."></img>
        <div className="education__para">
          <p>
            I have a strong educational foundation in computer science and web
            development, which has laid the groundwork for my career as a
            full-stack web developer. I earned my Bachelor's degree in Computer
            Science from University of Madras and i completed course of Full Stack 
            Development from Greens Technology. This is where I gained a comprehensive
            understanding of software engineering, algorithms, and data
            structures. During my academic journey, I actively participated in
            various coding competitions and hackathons, honing my
            problem-solving skills and programming abilities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
