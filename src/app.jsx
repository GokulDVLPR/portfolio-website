import About from './section/about/about';

import Education from './section/education/Education';
import Footer from './section/Footer/Footer';
import Header from './section/header/Header';
import NavBar from './section/navbar/NavBar';
import Skills from './section/skills/Skills';



const App = () => {
  return (
    <main>
       <NavBar/>
      <Header/>
      <About/>
      <Skills/>
    <Education/>
  <Footer/>
    </main>

  )
}

export default App;