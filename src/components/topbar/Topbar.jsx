import React from 'react';
import './topbar.scss'
import {Person, Mail} from "@material-ui/icons"
// ./ because its in the same file

// export default function Topbar() {
  
//   <div classname="topbar">

//   </div> 
// } 
// export default function Topbar() {
//     return (
//           <div className="topbar">
//             <h1>
//               genius.
//             </h1>
//           </div>
//     );
//   }
const Topbar = () => {
    return (
          <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Fullstack Developer</a>
                    <div classname="itemContainer">
                        <Person classname="icon"/>
                        <span>316-559-0973</span>
                    </div>
                    <div classname="itemContainer">
                        <Mail classname="icon"/>
                        <span>MeganDeRisi@gmail.com</span>
                    </div>
                </div>
                {/* <h1>Thanks for stopping by!</h1> */}
                    <div className="right"></div>
            </div>
            
          </div>
    );

}

export default Topbar