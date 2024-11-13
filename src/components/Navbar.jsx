import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
import Button from './Button';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-black shadow-md p-4">
            {/* Large Screen Navbar */}
            <div className="hidden lg:flex container mx-auto justify-between items-center">
                {/* Logo */}
                <a href="/" className="text-lg font-bold text-blue-900">
                    <img src={logo} width="130px" alt="Logo" />
                </a>

                {/* Desktop Menu */}
                <div className="flex items-center space-x-4">
                    <a
                        href="/"
                        className="hover:bg-blue-700 p-2 rounded-md text-white font-semibold hover:text-white transition duration-300"
                    >
                        Home
                    </a>
                    <a
                        href="/HowItWork"
                        className="hover:bg-blue-700 p-2 rounded-md text-white font-semibold hover:text-white transition duration-300"
                    >
                        How it Works
                    </a>
                    <a
                        href="/Pricing"
                        className="hover:bg-blue-700 p-2 rounded-md text-white font-semibold hover:text-white transition duration-300"
                    >
                        Pricing
                    </a>
                    <a
                        href="/signup"
                        className="hover:bg-blue-700 p-2 rounded-md text-white font-semibold hover:text-white transition duration-300"
                    >
                        Signup
                    </a>
                    <a
                        href="/Download"
                        className="hover:bg-blue-700 p-2 rounded-md text-white font-semibold hover:text-white transition duration-300"
                    >
                        Download
                    </a>
                    <a
                        href="/Support"
                        className="hover:bg-blue-700 p-2 rounded-md text-white font-semibold hover:text-white transition duration-300"
                    >
                        Support
                    </a>

                    {/* Login Button */}
                    <Button text="Login" link="/Login" />
                </div>
            </div>

            {/* Mobile Screen Navbar */}
            <div className="lg:hidden container mx-auto flex justify-between items-center">
                {/* Logo */}
                <a href="/" className="text-lg font-bold text-blue-900">
                    <img src={logo} width="130px" alt="Logo" />
                </a>

                {/* Hamburger Button */}
                <button
                    className="text-gray-800"
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
            </div>

            {/* Mobile Menu (when the hamburger button is clicked) */}
            {isOpen && (
                <div className="lg:hidden mt-10 z-50 flex flex-col items-center space-y-4 absolute top-16 left-0 w-full bg-white shadow-lg py-4">
                    <a
                        href="/"
                        className="hover:bg-blue-700 p-2 rounded-md font-semibold hover:text-white transition duration-300"
                    >
                        Home
                    </a>
                    <a
                        href="/HowItWork"
                        className="hover:bg-blue-700 p-2 rounded-md font-semibold hover:text-white transition duration-300"
                    >
                        How it Works
                    </a>
                    <a
                        href="/Pricing"
                        className="hover:bg-blue-700 p-2 rounded-md font-semibold hover:text-white transition duration-300"
                    >
                        Pricing
                    </a>
                    <a
                        href="/signup"
                        className="hover:bg-blue-700 p-2 rounded-md font-semibold hover:text-white transition duration-300"
                    >
                        Signup
                    </a>
                    <a
                        href="/Download"
                        className="hover:bg-blue-700 p-2 rounded-md font-semibold hover:text-white transition duration-300"
                    >
                        Download
                    </a>
                    <a
                        href="/Support"
                        className="hover:bg-blue-700 p-2 rounded-md font-semibold hover:text-white transition duration-300"
                    >
                        Support
                    </a>

                    {/* Login Button */}
                    <Button text="Login" link="/Login" />
                </div>
            )}
        </nav>
    );
};

export default Navbar;
