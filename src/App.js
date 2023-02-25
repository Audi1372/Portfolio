


import { Route, Routes } from 'react-router-dom';
import About from './pages/about/About';
import Home from './pages/home/Home';
import Projects from './pages/project/Projects'
import Navbar from './components/navbar/Navbar';
import Contact from './pages/contact/Contact';
import SocialLink from './components/sociallink/SocialLink';
import Skills from './pages/skills/Skills';
import Achievment from './pages/achievement/Achievment';
function App() {


  return (
    // <div style={themeChange}>
    <div className='App'>
      <header className="App-header">

        <Navbar />
        <SocialLink />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/achievement' element={<Achievment />} />

        </Routes>




        {/* <button onClick={() => setDark(!dark)}> HELLO</button>
        <h1 style={themeChange}>hello</h1> */}





      </header>
    </div>
  );
}

export default App;
