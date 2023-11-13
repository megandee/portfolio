import './menu.scss'


const Menu1 = ( { menuOpen, setMenuOpen } ) => {
    return (
        // setting menuside to open when clicking on HB
         <div className={"menu "+(menuOpen && "active")}> 
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#portfolio1">Portfolio</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#works1">Projects</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#testimonials">Testimonials</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
          </div>
    );

}

export default Menu1