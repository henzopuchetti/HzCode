import React, { useState } from 'react';
import "./Navbar.css"
import MobileNav from '../MobileNav/MobileNav';




const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

  return(
    <>

        <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

        <nav className='nav-wrapper'>
            <div className="nav-content">
                <img className="logo" src="./assets/images/LogoHzCode.png" alt=""/>

                <ul>
                    <li>
                        <a className='menu-item' href='#hero'>Home</a>
                    </li>
                    <li>
                        <a className='menu-item' href='#workexperience'>Experiência</a>
                    </li>
                    <li>
                        <a className='menu-item' href='#contactme'>Contato</a>
                    </li>

                    <button className='contact-btn' onClick={() => {}}>
                        Contrate-me
                    </button>
                </ul>

                <button className="menu-btn" onClick={toggleMenu}>
                    <span 
                        className={"material-symbols-outlined"}
                        style={{ fontSize: "1.8rem" }}
                    >
                        {openMenu ? "close" : "menu"}
                    </span>
                </button>
            </div>
        </nav>
    </>
  );
}

export default Navbar;