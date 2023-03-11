import React, { useState } from 'react';
import { navigationItems } from '../../data/navigationItems';
import { Link } from 'react-router-dom';

export const redesSociales = [
    {
        nombre: "FaceBook",
        link: "https://www.facebook.com/profile.php?id=100090901749139",
        url: "https://cdn-icons-png.flaticon.com/512/145/145802.png"
    },
    {
        nombre: "Instagram",
        link: "https://www.instagram.com/totorocoagency/",
        url: "https://cdn-icons-png.flaticon.com/512/3955/3955024.png"
    },
    {
        nombre: "LinkedIn",
        link: "https://www.linkedin.com/in/davidtoro90/",
        url: "https://cdn-icons-png.flaticon.com/512/145/145807.png"
    },
]


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
                <div className={`justify-content-center align-items-center collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav justify-content-center align-items-center">
                        {navigationItems.map((item) => (
                            <li className="nav-item text-decoration-none" key={item.name}>
                                <Link onClick={handleClick} className='nav-link text-decoration-none text-black px-3' to={`/${item.href}`}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <ul className="navbar-nav justify-content-center align-items-center">
                        {redesSociales.map((red) => (
                            <li className="nav-item text-decoration-none" key={red.nombre}>
                                <a href={red.link} target="_blank" rel="noopener noreferrer">
                                    <img
                                        className="p-1"
                                        style={{
                                            width: '40px'
                                        }}
                                        src={red.url} alt={red.nombre} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </div>
    );
};
