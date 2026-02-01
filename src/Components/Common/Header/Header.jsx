import React, { useEffect, useState } from 'react'
import "./Header.scss"
import logoWhite from "../../../assets/Logo/DripHub-Logo.png"
import { useLocation } from 'react-router-dom'
import service247Icon from "../../../assets/Icons/service24-icon.png"
import whatsappIcon from "../../../assets/Common/whatsapp.svg"
import { FaWhatsapp } from 'react-icons/fa'

export default function Header(){
    const location = useLocation()
    const [ isSticky, setIsSticky ] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if(location.pathname === "/thank-you" || location.pathname !== "/") {
                setIsSticky(true)
            } else if(window.scrollY > 100) {
                setIsSticky(true)
            } else {
                setIsSticky(false)
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [location.pathname]);

    return (
        <nav className='navbar-container'>
            <div className={`navbar ${isSticky ? "sticky" : ""} ${location.pathname === "/thank-you" ? "thank-you-header" : ""}`}>
                <div className="logo-div">
                    <a href="/" className="logo-link">
                        <img src={logoWhite} alt="City Doctor Logo" className="logo" />
                    </a>
                </div>

                <div className="call-div-right">
                    <a href="https://wa.me/971503890119" className="unified-service-button" target="_blank" rel="noopener noreferrer">
                        <div className="service-section">
                            <img src={service247Icon} alt="24/7 Services" className="service-icon" />
                        </div>
                        <div className="divider"></div>
                        <div className="whatsapp-section">
                            <FaWhatsapp className="whatsapp-icon-btn" />
                            <span className="whatsapp-number">050 389 0119</span>
                        </div>
                    </a>
                </div>

            </div>
        </nav>
    )
}