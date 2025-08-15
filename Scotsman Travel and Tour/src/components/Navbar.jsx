import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

const Navbar = ({ scrollToQuote }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleQuoteClick = () => {
        setMenuOpen(false);
        scrollToQuote();
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`w-full bg-gradient-to-r from-[#138fff] to-[#0b5699] py-4 md:py-6 px-4 md:px-6 flex items-center justify-between relative z-50 sticky top-0 transition-opacity duration-300 ${scrolled ? 'opacity-80' : 'opacity-100'}`}
        >
            <div className="flex items-center space-x-2">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#f7f7f7] rounded-full flex items-center justify-center">
                    <img
                        src="/logostt.jpg"
                        alt="Logo"
                        className="w-full h-full object-contain rounded-full"
                    />
                </div>
            </div>
            <span
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-['Montserrat'] font-extrabold text-[#f7f7f7] text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-wide text-center"
                style={{ wordSpacing: '0.2em' }}
            >
                <span className="hidden sm:inline">SCOTSMAN TRAVEL & TOURS</span>
                <span className="sm:hidden">SCOTSMAN T&T</span>
            </span>
            <div className="flex items-center space-x-2 md:space-x-6 h-full">
                <div className="hidden lg:flex space-x-6 items-center">
                    <button
                        className="text-[#f7f7f7] bg-transparent py-2 rounded-lg font-['Open_Sans'] text-sm md:text-base font-bold hover:text-gray-300 transition"
                        onClick={() => window.location.href = "#"}
                    >
                        Home
                    </button>
                    <button
                        className="text-[#f7f7f7] bg-transparent py-2 rounded-lg font-['Open_Sans'] text-sm md:text-base font-bold hover:text-gray-300 transition"
                        onClick={() => window.location.href = "#"}
                    >
                        Services
                    </button>
                    <button
                        className="text-[#f7f7f7] bg-transparent py-2 rounded-lg font-['Open_Sans'] text-sm md:text-base font-bold hover:text-gray-300 transition"
                        onClick={() => window.location.href = "#"}
                    >
                        Contact
                    </button>
                    <button
                        className="bg-[#f47238] text-white px-3 py-2 md:px-4 rounded-lg hover:bg-gray-200 transition font-bold font-['Montserrat'] text-sm md:text-base"
                        onClick={handleQuoteClick}
                    >
                        Get Quote
                    </button>
                </div>
                <button
                    className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md text-white focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Open menu"
                >
                    <Icon icon={menuOpen ? "mdi:close" : "mdi:menu"} className="text-2xl" />
                </button>
            </div>
            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-[#0b5699] shadow-lg z-50 flex flex-col items-center py-4 lg:hidden">
                    <button
                        className="w-full text-center py-2 text-[#f7f7f7] hover:text-gray-300 font-['Open_Sans'] transition-colors border-b border-white"
                        onClick={() => {
                            setMenuOpen(false);
                            window.location.href = "#";
                        }}
                    >
                        Home
                    </button>
                    <button
                        className="w-full text-center py-2 text-[#f7f7f7] hover:text-gray-300 font-['Open_Sans'] transition-colors border-b border-white"
                        onClick={() => {
                            setMenuOpen(false);
                            window.location.href = "#";
                        }}
                    >
                        Services
                    </button>
                    <button
                        className="w-full text-center py-2 text-[#f7f7f7] hover:text-gray-300 font-['Open_Sans'] transition-colors border-b border-white"
                        onClick={() => {
                            setMenuOpen(false);
                            window.location.href = "#";
                        }}
                    >
                        Contact
                    </button>
                    <button
                        className="w-[90%] mx-auto mt-3 bg-[#f47238] text-white px-4 py-2 rounded-lg hover:bg-gray-200 transition font-bold font-['Montserrat'] text-base"
                        onClick={handleQuoteClick}
                    >
                        Get Quote
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;