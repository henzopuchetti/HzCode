import React from 'react';
import "./MobileNav.css"

const MobileNav = ({ isOpen, toggleMenu}) => {
  return(
    <>
        <div className={`mobile-menu ${isOpen ? "active" : "" }`} onClick={toggleMenu}>
            <div className="mobile-menu-container">
                <img className="logo" src="./assets/images/LogoHzCode.png" alt="" />
                <ul>
                    <li>
                        <a className='menu-item'>Home</a>
                    </li>
                    <li>
                        <a className='menu-item'>Skills</a>
                    </li>
                    <li>
                        <a className='menu-item'>Experiência</a>
                    </li>
                    <li>
                        <a className='menu-item'>Contato</a>
                    </li>

                    <button className='contact-btn' onClick={() => {}}>
                        Contrate-me
                    </button>
                </ul>
            </div>
        </div>
    </>
  );
}

export default MobileNav;