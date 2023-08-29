// import React from 'react';
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Portfolio1 from "./components/portfolio/Portfolio1"
import Works1 from "./components/work/Works1"
import Testimonials from "./components/testimonials/Testimonials"
import Contact from "./components/contact/Contact"
import "./app.scss"

function App() {
  return (
    <div className="app">
      <Topbar/>
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
