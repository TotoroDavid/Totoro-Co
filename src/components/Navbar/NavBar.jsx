import React, { useState } from 'react';
import { navigationItems } from '../../data/navigationItems';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const handleClick = () => {
        setIsOpen(false);
    };

    return (
        <div className='container'>
            <nav className="px-5 navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <img
                    className='img_'
                    src="https://raw.githubusercontent.com/TotoroDavid/You-dont-know-JS/master/animals_15-%5BConverted%5D%20(1).png"
                    style={{
                        width: '70px'
                    }}
                    alt="" />
                <button className="navbar-toggler" type="button" onClick={toggle}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav d-flex justify-content-center">
                        {navigationItems.map((item) => (
                            <li className="nav-item text-decoration-none" key={item.name}>
                                <Link onClick={handleClick} className='nav-link text-decoration-none text-black px-3' to={`/${item.href}`}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </div>
    );
};
