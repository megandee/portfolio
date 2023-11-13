import React from 'react'
import './portfolio.scss'
// ./ because its in the same file

// export default function portfolio() {
//     <div classname="portfolio">

//     </div>
// } 
const Portfolio1 = () => {
    return (
          <div className="portfolio1" id="portfolio1">
            <h1>
              Portfolio
            </h1>
            <ul>
              <li>Featured</li>
              <li>Web App</li>
              <li>Featured</li>
            </ul>
            <div className="container"> 
              <div className='item'>
                <img src="" alt=""/>
                <h3>Banking App</h3>
              </div> 

            </div>
          </div>
    );

}

export default Portfolio1




  