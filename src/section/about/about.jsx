import "./about.css";
import Download from "../../Assets/download.jpeg";
import Resume from "../../Assets/GokulResume.pdf";
import { AiOutlineCloudDownload } from "react-icons/ai";
const about = () => {
  return (
    <section id="about"><h2>About Me</h2>
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={Download} alt=" wait.." />
          </div>
        </div>
        <div className="about__right">
          
          <div className="about__cards"></div>
          <p>
            Hi,My name is D.Gokul from vettuvankeni,chennai. I'm a Fullstack Web
            Developer with a Bachelor of degree in Computer Science.I am a Self Motivated professional
            and Team Worker.I am eagerly waiting to show my skills in the Developement field.
             Get in touch today with the details of your
            project let's get started! check out my resume box below!...
          </p>

          <a href={Resume} download className="btn primary">
            Download Cv
            <AiOutlineCloudDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
