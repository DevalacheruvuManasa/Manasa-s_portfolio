import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50);
            let currentSectionId = '';
            const sections = document.querySelectorAll('section[id], footer[id]');
            const scrollY = window.pageYOffset;

            sections.forEach(current => {
                const sectionHeight = current.offsetHeight;
                const sectionTop = current.offsetTop - 150;
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    currentSectionId = current.getAttribute('id');
                }
            });
            if (window.innerHeight + scrollY >= document.body.offsetHeight - 50) {
                currentSectionId = 'contact';
            }
            setActiveLink(currentSectionId || 'home');
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [menuOpen]);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Certifications', 'Contact'];

    return (
        <>
            <header className={`header ${scrolled ? 'scrolled' : ''}`}>
                <nav className="navbar container">
                    <a href="#home" className="site-logo">Lakshmi Manasa</a>
                    <ul className="nav-list-desktop">
                        {navLinks.map(link => (
                            <li key={link} className="nav-item">
                                <a href={`#${link.toLowerCase()}`} className={`nav-link ${activeLink === link.toLowerCase() ? 'active-link' : ''}`}>{link}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="nav-toggle" onClick={toggleMenu}><Menu size={24} /></div>
                </nav>
            </header>

            <div className={`nav-backdrop ${menuOpen ? 'show-backdrop' : ''}`} onClick={toggleMenu}></div>
            
            <div className={`nav-menu-panel ${menuOpen ? 'show-menu' : ''}`}>
                <div className="nav-menu-header">
                     <a href="#home" className="site-logo" onClick={closeMenu}>Lakshmi Manasa</a>
                     <div className="nav-close" onClick={toggleMenu}><X size={28} /></div>
                </div>
                <ul className="nav-list-mobile">
                    {navLinks.map(link => (
                        <li key={link} className="nav-item">
                            <a href={`#${link.toLowerCase()}`} className={`nav-link ${activeLink === link.toLowerCase() ? 'active-link' : ''}`} onClick={closeMenu}>{link}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Header;