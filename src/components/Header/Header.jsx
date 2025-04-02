import React, { useState, useEffect, useRef } from 'react'
import './Header.css'

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileNavActive, setIsMobileNavActive] = useState(false);
    const headerRef = useRef(null);
    const navbarRef = useRef(null);
    const navToggleRef = useRef(null);

    // SCROLL EVENT HANDLER
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // SMOOTH SCROLL HANDLER
    const handleSmoothScroll = (e) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;

        const headerHeight = headerRef.current.offsetHeight;
        const scrollOffset = headerHeight + 1;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - scrollOffset;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });

        // CLOSE MOBILE MENU AFTER CLICKING A LINK
        if (isMobileNavActive) {
            setIsMobileNavActive(false);
        }
    };

    // CLOSE MOBILE NAV WHEN CLICKING OUTSIDE
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                navbarRef.current &&
                navToggleRef.current &&
                !navbarRef.current.contains(e.target) &&
                !navToggleRef.current.contains(e.target) &&
                isMobileNavActive
            ) {
                setIsMobileNavActive(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isMobileNavActive]);

    // MOBILE NAV TOGGLE HANDLER
    const handleNavToggle = (e) => {
        e.preventDefault();
        setIsMobileNavActive(!isMobileNavActive);
    };

    return (
        <header
            ref={headerRef}
            id="header"
            className={isScrolled ? 'header-scrolled' : ''}
        >
            <div className="container">
                {/* LOGO IMAGE */}
                <div className="logo">
                    <img src="images/logo.png" width="265" height="auto" alt="Logo"/>
                </div>

                {/* MOBILE NAV TOGGLE BUTTON */}
                <i 
                    ref={navToggleRef}
                    className={`mobile-nav-toggle fa-solid ${isMobileNavActive ? 'fa-times' : 'fa-bars'}`}
                    onClick={handleNavToggle}
                ></i>

                {/* NAV-MENU */}
                <nav
                    ref={navbarRef}
                    id="navbar"
                    className={isMobileNavActive ? 'mobile-nav-active' : ''}
                >
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="#hero" onClick={handleSmoothScroll}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#classes" onClick={handleSmoothScroll}>Classes</a>
                        </li>
                        <li className="nav-item">
                            <a href="#trainers" onClick={handleSmoothScroll}>Trainer</a>
                        </li>
                        <li className="nav-item">
                            <a href="#comments" onClick={handleSmoothScroll}>Review</a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" onClick={handleSmoothScroll}>Contact</a>
                        </li>
                        <li className="nav-item">
                            <a href="#join-us" onClick={handleSmoothScroll}>
                                <button className="nav-btn">
                                    JOIN US
                                </button>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
