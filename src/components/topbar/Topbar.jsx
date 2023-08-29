import React from 'react';
import './topbar.scss'
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
                    <a href="#intro" className="logo">Developer in the making</a>
                    <div classname="itemContainer">
                        ☎️
                    </div>
                </div>
                <h1>Thanks for stopping by!</h1>
                    <div className="right"></div>
            </div>
            
          </div>
    );

}

export default Topbar