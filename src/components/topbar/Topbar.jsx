import React from 'react';
import './topbar.scss'
import {Person, Mail} from "@material-ui/icons"
// ./ because its in the same file

const Topbar = ({menuOpen, setMenuOpen}) => {
    return (
        // supposed to have this line below
          <div className={"topbar active" + (menuOpen && "active")}>
        {/* // not this line below */}
        {/* // <div className="topbar active"> */}
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Full-stack Developer</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>316-558-0973</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>MeganDeRisi@gmail.com</span>
                    </div>
                </div>
                {/* need to figure out why X isnt working // not able to close out side menu w/out refreshing page */}
                    <div className="right">
                        <div className="hamburger" onClick={() =>setMenuOpen(!menuOpen)}>
                        {/* <div className="hamburger"> */}
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                        </div>
                        
                    </div>
            </div>
            
          </div>
    );

}

export default Topbar