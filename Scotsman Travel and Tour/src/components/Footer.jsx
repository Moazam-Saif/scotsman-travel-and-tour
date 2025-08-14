import React from 'react';
import { Icon } from '@iconify/react';

const Footer = () => {
    return (
        <footer className="text-white py-12 md:py-16 px-4 md:px-6 lg:px-12 bg-[#333333]">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                <div className="text-center sm:text-left">
                    <div className="flex items-center justify-center sm:justify-start space-x-2 mb-4 md:mb-6">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-[#138fff] rounded-full flex items-center justify-center">
                            <span className="text-white font-bold font-['Montserrat'] text-sm md:text-base">STT</span>
                        </div>
                        <span className="text-lg md:text-xl font-['Montserrat'] font-bold">Scotsman Travel & Tours</span>
                    </div>
                    <p className="text-gray-400 mb-4 md:mb-6 font-['Open_Sans'] text-sm md:text-base">
                        Your trusted partner for unforgettable travel experiences around the world.
                    </p>
                    <div className="flex justify-center sm:justify-start space-x-3 md:space-x-4">
                        {[
                            { icon: 'mdi:email-outline' },
                            { icon: 'mdi:phone-outline' },
                            { icon: 'mdi:map-marker-outline' }
                        ].map((item, index) => (
                            <div key={index} className="w-10 h-10 md:w-12 md:h-12 bg-[#138fff] rounded-lg flex items-center justify-center cursor-pointer hover:bg-[#f47238] transition">
                                <Icon icon={item.icon} className="text-base md:text-lg text-white" />
                            </div>
                        ))}
                    </div>
                </div>
                {[
                    { title: 'Services', items: ['Flight Booking', 'Hotels', 'Car Rental', 'Tours', 'Visas', 'Insurance'] },
                    { title: 'Destinations', items: ['Dubai', 'Turkey', 'Malaysia', 'Thailand', 'Saudi Arabia', 'Singapore'] },
                    { title: 'Support', items: ['Contact Us', 'FAQ', 'Terms & Conditions', 'Privacy Policy'] }
                ].map((column, index) => (
                    <div key={index} className="text-center sm:text-left">
                        <h3 className="text-base md:text-lg font-['Montserrat'] font-bold mb-4 md:mb-6 text-[#f47238]">{column.title}</h3>
                        <ul className="space-y-2 md:space-y-3">
                            {column.items.map((item, itemIndex) => (
                                <li key={itemIndex}>
                                    <a href="#" className="text-gray-400 hover:text-[#138fff] transition font-['Open_Sans'] text-sm md:text-base">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="max-w-7xl mx-auto mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-700 text-center">
                <p className="text-gray-400 font-['Open_Sans'] text-sm md:text-base">© 2025 Scotsman Travel & Tours. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;