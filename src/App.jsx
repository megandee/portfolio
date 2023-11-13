// import React from 'react';
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Portfolio1 from "./components/portfolio/Portfolio1"
import Works1 from "./components/work/Works1"
import Testimonials from "./components/testimonials/Testimonials"
import Contact from "./components/contact/Contact"
import "./app.scss"
import{ useState } from 'react';
import Menu1 from "./components/menu/Menu1";

function App() {
  const[menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu1 menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
      <Intro/>
      <Portfolio1/>
      <Works1/>
      <Testimonials/>
      <Contact/>
      </div>
      
    
    </div>
  );
}

export default App;
