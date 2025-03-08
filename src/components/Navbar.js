import React, { useState } from 'react';
import './Navbar.css';
import { MdLightMode, MdNightlight, MdMenu, MdClose } from 'react-icons/md';
import { Sun, Moon } from 'lucide-react';
import { useNavigate, NavLink } from 'react-router-dom'; // Import NavLink for active styles

// MobileMenu Component
const MobileMenu = ({ toggleTheme, theme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <header className='mobile-menu'>
            <div className='mobile-menu-toggle' onClick={toggle}>
                <MdMenu size={30} />
            </div>
            {isOpen && (
                <div className='mobile-menu-content' onClick={toggle}>
                    <ul>
                        <li>
                            <div className='mobile-menu-toggle-close'>
                                <MdClose size={30} />
                            </div>
                        </li>
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) => isActive ? 'active' : ''}
                                onClick={toggle} // Close menu when clicking
                            >
                                Fonts
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/colors"
                                className={({ isActive }) => isActive ? 'active' : ''}
                                onClick={toggle} // Close menu when clicking
                            >
                                Colors
                            </NavLink>
                        </li>
                        <li>
                            <button onClick={toggleTheme}>
                                {theme === 'light' ? (
                                    <Moon className='icon' size={30} />
                                ) : (
                                    <Sun className='icon' size={30} />
                                )}
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
};

// Navbar Component
const Navbar = ({ toggleTheme, theme }) => {
    const navigate = useNavigate(); // Use the navigate hook
    const logo = "FONTer";

    // Update the toggleTheme function to prevent page reload
    const handleToggleTheme = () => {
        toggleTheme(); // Toggle theme
        navigate(window.location.pathname); // Keep user on current route
    };

    return (
        <header>
            <nav className='navbar'>
                <div className='logo'>
                    <a href="/"><h1>{logo}</h1></a>
                </div>
                {MobileMenu({ toggleTheme: handleToggleTheme, theme })} {/* Pass the updated handleToggleTheme */}
                <ul className='nav-list'>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive ? 'active' : ''}
                        >
                            Fonts
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/colors"
                            className={({ isActive }) => isActive ? 'active' : ''}
                        >
                            Colors
                        </NavLink>
                    </li>
                    <li>
                        <button onClick={handleToggleTheme}>
                            {theme === 'light' ? (
                                <Moon className='icon' size={30} />
                            ) : (
                                <Sun className='icon' size={30} />
                            )}
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
