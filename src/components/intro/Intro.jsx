import { useEffect } from 'react';
import './intro.scss'
import { init } from 'ityped'
// import { useEffect, useRef } from "react"

const Intro = () => {
  //1:14:31
  // const textRef = useRef();

//   useEffect(() => {
//    init(textRef.current, {
//      showCursor: false,
//      backDelay: 1500,
//      backSpeed: 50,
//      strings: ["Developer", "Computer Scientist"],
// }) 
//     console.log(textRef) 
// // dependency is []
//   },[])
    return (
          <div className="intro" id="intro">
                <div className="left">
                  <div className="imgContainer">
                    <img src="https://media.licdn.com/dms/image/D4E03AQHSVzRxcpvrUg/profile-displayphoto-shrink_800_800/0/1690327717159?e=1698883200&v=beta&t=FP8HUy6BJJfkTIi90-Y7_O-P23Tu8yWZYfLKiVV9GRo" alt="profile image"/>
                  </div>
                </div>
            <div className="right">
              <div className="wrapper">
                <br></br>
                <h2>Hello, I'm</h2>
                <h1>Megan</h1>
                {/* <h3>Full-stack <span ref{textRef}>Developer</span></h3> */}
                <h3>Full-stack <span>Developer</span></h3>
                  <a href="#portfolio">
                    <img src="https://cdn-icons-png.flaticon.com/128/8677/8677674.png" alt="down arrow"></img>
                  </a>
              </div>
            </div>
          </div>
    );

}

export default Intro