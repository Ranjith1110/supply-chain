import React, { useState, useEffect } from "react";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Handle scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setShowNavbar(false); // Scrolling down
            } else {
                setShowNavbar(true); // Scrolling up
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <>
            {/* Main Navbar */}
            <div
                className={`w-full bg-white shadow fixed top-0 left-0 z-50 transform transition-transform duration-300 ${
                    showNavbar ? "translate-y-0" : "-translate-y-full"
                }`}
            >
                <div className="flex items-center justify-between px-4 sm:px-6 lg:px-16 py-4 max-w-screen-xl mx-auto">

                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="#">
                            <img
                                src="/comp-logo.png"
                                alt="Company Logo"
                                className="h-8 sm:h-10 w-auto"
                            />
                        </a>
                    </div>

                    {/* Center nav links - visible on large screens */}
                    <nav className="hidden lg:flex flex-1 items-center justify-center space-x-8 text-base font-medium text-black">
                        <a href="#" className="hover:text-pink-500 transition">Home</a>
                        <a href="#" className="hover:text-pink-500 transition">Products</a>
                        <a href="#" className="hover:text-pink-500 transition">Contact Us</a>
                    </nav>

                    {/* Right Icons */}
                    <div className="flex items-center space-x-4 sm:space-x-6">
                        <a href="#" className="relative">
                            <FiHeart className="w-5 h-5 text-black" />
                        </a>
                        <a href="#" className="relative">
                            <FiShoppingCart className="w-6 h-6 text-black" />
                            <span className="absolute -top-2 -right-2 bg-pink-500 text-xs text-white rounded-full px-1">0</span>
                        </a>

                        {/* Hamburger Icon (mobile only) */}
                        <button
                            className="block lg:hidden"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <CiMenuFries className="w-6 h-6 text-black" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Overlay Menu */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-90 text-white flex flex-col items-center justify-center transition duration-300 ease-in-out">
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="absolute top-6 right-6 text-4xl"
                    >
                        <IoClose />
                    </button>

                    <nav className="text-center space-y-8 text-2xl font-semibold flex flex-col">
                        <a href="#" onClick={() => setIsMenuOpen(false)} className="hover:text-pink-400 transition">Home</a>
                        <a href="#" onClick={() => setIsMenuOpen(false)} className="hover:text-pink-400 transition">Products</a>
                        <a href="#" onClick={() => setIsMenuOpen(false)} className="hover:text-pink-400 transition">Contact Us</a>
                    </nav>

                    <button className="mt-10 bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-full transition duration-300">
                        Get Started
                    </button>
                </div>
            )}
        </>
    );
};

export default Navbar;
