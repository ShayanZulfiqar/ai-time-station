import React, { useState, useEffect } from 'react';
import Button from './Button';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Toggle the hamburger menu
    const toggleMenu = () => setIsOpen(!isOpen);

    // Toggle Dark Mode
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    // Apply the dark mode class to the body element on component mount
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [isDarkMode]);

    return (
        <nav className="bg-gray-100 dark:bg-gray-900 p-4">
            <div className="flex justify-between items-center mx-auto container">
                <div className="font-bold text-blue-900 dark:text-white text-lg">
                    <a href="/">AI Time Station</a>
                </div>

                {/* Hamburger Icon for mobile view */}
                <button
                    className="lg:hidden text-gray-800 dark:text-white"
                    onClick={toggleMenu}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>

                {/* Links container */}
                <div
                    className={`${isOpen ? 'block' : 'hidden'
                        } lg:flex flex-col lg:flex-row items-center space-x-4 mt-4 lg:mt-0`}
                >
                    <a
                        href="/"
                        className="hover:bg-blue-700 p-2 rounded-md font-semibold hover:text-white transform transition hover:scale-105"
                    >
                        Home
                    </a>
                    <a
                        href="/HowItWork"
                        className="hover:bg-blue-700 p-2 rounded-md font-semibold hover:text-white transform transition hover:scale-105"
                    >
                        How it Works
                    </a>
                    <a
                        href="/Pricing"
                        className="hover:bg-blue-700 p-2 rounded-md font-semibold hover:text-white transform transition hover:scale-105"
                    >
                        Pricing
                    </a>
                    <a
                        href="/signup"
                        className="hover:bg-blue-700 p-2 rounded-md font-semibold hover:text-white transform transition hover:scale-105"
                    >
                        Signup
                    </a>
                    <a
                        href="/download"
                        className="hover:bg-blue-700 p-2 rounded-md font-semibold hover:text-white transform transition hover:scale-105"
                    >
                        Download
                    </a>
                    <a
                        href="/support"
                        className="hover:bg-blue-700 p-2 rounded-md font-semibold hover:text-white transform transition hover:scale-105"
                    >
                        Support
                    </a>
                </div>

                
                <Button text="Login" link="/Login" />

                {/* Dark Mode Toggle Button */}
                {/* <button
                    onClick={toggleDarkMode}
                    className="ml-4 p-2 text-white bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
                >
                    {isDarkMode ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 3v2m0 14v2m9-9h2M3 12H1m15.364-6.364l1.414 1.414M5.636 18.364l-1.414-1.414M16.243 16.243l1.414 1.414M7.757 7.757L6.343 6.343"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 3v2m0 14v2m9-9h2M3 12H1m15.364-6.364l1.414 1.414M5.636 18.364l-1.414-1.414M16.243 16.243l1.414 1.414M7.757 7.757L6.343 6.343"
                            />
                        </svg>
                    )}
                </button> */}

            </div>
        </nav>
    );
};

export default Navbar;
