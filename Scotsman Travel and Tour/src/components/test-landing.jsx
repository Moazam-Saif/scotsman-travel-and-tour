import React, { useState, useRef } from 'react';
import { Icon } from '@iconify/react';

const TestLanding = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const quoteRef = useRef(null);

    const scrollToQuote = () => {
        setMenuOpen(false);
        if (quoteRef.current) {
            quoteRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <nav className="w-full bg-gradient-to-r from-[#138fff] to-[#0b5699] py-4 md:py-6 px-4 md:px-6 flex items-center justify-between relative">
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-[#f7f7f7] rounded-full flex items-center justify-center">
                        <span className="text-[#138fff] font-bold text-xs md:text-sm font-['Montserrat']">STT</span>
                    </div>
                </div>
                <span
                    className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-['Montserrat'] font-extrabold text-[#f7f7f7] text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-wide text-center"
                    style={{ wordSpacing: '0.2em' }}
                >
                    <span className="hidden sm:inline">SCOTSMAN TRAVELS & TOURS</span>
                    <span className="sm:hidden">SCOTSMAN T&T</span>
                </span>
                <div className="flex items-center space-x-2 md:space-x-6 h-full">
                    <div className="hidden lg:flex space-x-6">
                        <a href="#" className="text-[#f7f7f7] hover:text-gray-300 font-['Open_Sans'] transition-colors">Home</a>
                        <a href="#" className="text-[#f7f7f7] hover:text-gray-300 font-['Open_Sans'] transition-colors">Services</a>
                        <a href="#" className="text-[#f7f7f7] hover:text-gray-300 font-['Open_Sans'] transition-colors">Contact</a>
                        <button
                            className="bg-[#f47238] text-white px-3 py-2 md:px-4 rounded-lg hover:bg-gray-200 transition font-bold font-['Montserrat'] text-sm md:text-base"
                            onClick={scrollToQuote}
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
                    <div className="absolute top-full left-0 w-full bg-[#0b5699] shadow-lg z-50 flex flex-col items-center py-4 animate-fade-in">
                        <a href="#" className="w-full text-center py-2 text-[#f7f7f7] hover:text-gray-300 font-['Open_Sans'] transition-colors border-b border-[#138fff]">Home</a>
                        <a href="#" className="w-full text-center py-2 text-[#f7f7f7] hover:text-gray-300 font-['Open_Sans'] transition-colors border-b border-[#138fff]">Services</a>
                        <a href="#" className="w-full text-center py-2 text-[#f7f7f7] hover:text-gray-300 font-['Open_Sans'] transition-colors border-b border-[#138fff]">Contact</a>
                        <button
                            className="w-[90%] mx-auto mt-3 bg-[#f47238] text-white px-4 py-2 rounded-lg hover:bg-gray-200 transition font-bold font-['Montserrat'] text-base"
                            onClick={scrollToQuote}
                        >
                            Get Quote
                        </button>
                    </div>
                )}
            </nav>

            <div className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[510px] bg-white flex items-center justify-center">
                <img
                    src="/Desktop - 1.svg"
                    alt="Main Cover"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="w-full bg-[#f36a3e] py-4 md:py-6 px-4 flex flex-col items-center justify-center">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-['Poppins'] font-bold mb-4 md:mb-8 leading-tight text-white text-center drop-shadow-lg">
                    Explore The World With Confidence
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4 text-white/90 font-['Open_Sans'] font-light max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto text-center drop-shadow-md">
                    From breathtaking destinations to seamless travel experiences. We handle every detail so you can focus on creating memories.
                </p>
            </div>

            <section className="py-12 md:py-16 lg:py-24 px-4 md:px-6 lg:px-12 relative overflow-hidden"
                style={{
                    backgroundImage: 'url("planes.svg")',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                }}>
                <div className="absolute inset-0 bg-white/70 z-0"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-12 md:mb-16 lg:mb-20">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-['Poppins'] font-black text-[#014091] mb-4 md:mb-6">
                            Complete Travel Solutions
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#333333] max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto font-['Open_Sans'] font-light">
                            Everything you need for your perfect journey, all in one place
                        </p>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mb-12 md:mb-16 lg:mb-20">
                        <div className="space-y-6 md:space-y-8">
                            <div className="bg-gradient-to-r from-[#138fff]/10 to-[#0b5699]/10 p-6 md:p-8 rounded-xl md:rounded-2xl border-l-4 border-[#138fff] backdrop-blur-sm bg-white/80">
                                <h3 className="text-lg sm:text-xl md:text-2xl font-['Montserrat'] font-bold text-[#014091] mb-3 md:mb-4 flex items-center gap-2">
                                    <Icon icon="mdi:airplane" className="text-lg sm:text-xl md:text-2xl text-[#014091]" />
                                    Flight Booking & Management
                                </h3>
                                <p className="text-[#333333] font-['Open_Sans'] text-sm sm:text-base md:text-lg mb-4 md:mb-6">
                                    Get the best deals on domestic and international flights. Our advanced booking system ensures you get competitive prices with flexible options.
                                </p>
                                <div className="flex flex-wrap gap-2 md:gap-4">
                                    <span className="bg-[#f47238] text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold">Best Prices</span>
                                    <span className="bg-[#138fff] text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold">24/7 Support</span>
                                </div>
                            </div>
                            <div className="bg-gradient-to-r from-[#f47238]/10 to-[#ff6b35]/10 p-6 md:p-8 rounded-xl md:rounded-2xl border-l-4 border-[#f47238] backdrop-blur-sm bg-white/80">
                                <h3 className="text-lg sm:text-xl md:text-2xl font-['Montserrat'] font-bold text-[#014091] mb-3 md:mb-4 flex items-center gap-2">
                                    <Icon icon="mdi:hotel" className="text-lg sm:text-xl md:text-2xl text-[#014091]" />
                                    Accommodation & Hotels
                                </h3>
                                <p className="text-[#333333] font-['Open_Sans'] text-sm sm:text-base md:text-lg mb-4 md:mb-6">
                                    From luxury resorts to budget-friendly stays. We partner with top hotels worldwide to ensure comfortable accommodation for every budget.
                                </p>
                                <div className="flex flex-wrap gap-2 md:gap-4">
                                    <span className="bg-[#014091] text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold">Verified Hotels</span>
                                    <span className="bg-[#f47238] text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold">Instant Booking</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-[#014091] to-[#0b5699] text-white p-6 md:p-8 lg:p-10 relative overflow-hidden rounded-xl md:rounded-2xl">
                            <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-[#138fff]/20 rounded-full -translate-y-12 translate-x-12 md:-translate-y-16 md:translate-x-16"></div>
                            <div className="absolute bottom-0 left-0 w-16 h-16 md:w-24 md:h-24 bg-[#f47238]/20 rounded-full translate-y-8 -translate-x-8 md:translate-y-12 md:-translate-x-12"></div>
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-['Poppins'] font-bold mb-6 md:mb-8">Why Choose Us?</h3>
                            <div className="space-y-4 md:space-y-6">
                                <div className="flex items-center space-x-3 md:space-x-4">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-[#f47238] rounded-lg flex items-center justify-center">
                                        <Icon icon="mdi:chart-bar" className="text-lg md:text-2xl text-white" />
                                    </div>
                                    <div>
                                        <h4 className="text-base sm:text-lg md:text-xl font-['Montserrat'] font-bold">15+ Years Experience</h4>
                                        <p className="text-blue-200 font-['Open_Sans'] text-sm md:text-base">Trusted by thousands of travelers</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3 md:space-x-4">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-[#138fff] rounded-lg flex items-center justify-center">
                                        <Icon icon="mdi:earth" className="text-lg md:text-2xl text-white" />
                                    </div>
                                    <div>
                                        <h4 className="text-base sm:text-lg md:text-xl font-['Montserrat'] font-bold">150+ Destinations</h4>
                                        <p className="text-blue-200 font-['Open_Sans'] text-sm md:text-base">Worldwide coverage</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3 md:space-x-4">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-[#f47238] rounded-lg flex items-center justify-center">
                                        <Icon icon="mdi:star" className="text-lg md:text-2xl text-white" />
                                    </div>
                                    <div>
                                        <h4 className="text-base sm:text-lg md:text-xl font-['Montserrat'] font-bold">98% Customer Satisfaction</h4>
                                        <p className="text-blue-200 font-['Open_Sans'] text-sm md:text-base">Highly rated service</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section 
                className="py-8 md:py-12 px-4 md:px-6 lg:px-12 relative overflow-hidden min-h-[400px] md:min-h-[450px] lg:h-[500px] bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url("additional.svg")'
                }}
            >
                <div className="max-w-7xl mx-auto relative z-10 h-full flex flex-col justify-center">
                    <div className="text-center mb-8 md:mb-12 lg:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-['Poppins'] font-bold text-[#014091] mb-4 md:mb-6">
                            Additional Services
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-[#333333] font-['Open_Sans']">
                            Complete travel solutions for every need
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                        {[
                            { title: 'Visa Services', icon: 'mdi:file-document-outline', highlight: 'Hassle-Free Processing' },
                            { title: 'Tour Packages', icon: 'mdi:map-outline', highlight: 'Curated Experiences' },
                            { title: 'Travel Insurance', icon: 'mdi:shield-check', highlight: 'Complete Protection' },
                            { title: 'Car Rentals', icon: 'mdi:car', highlight: 'Flexible Options' }
                        ].map((service, index) => (
                            <div key={index} className="bg-white/50 backdrop-blur-md p-4 md:p-6 rounded-xl hover:shadow-lg hover:bg-white/30 transition-all duration-300 group relative z-10 border border-white/30 flex flex-col items-center">
                                <Icon icon={service.icon} className="text-3xl md:text-4xl mb-3 md:mb-4 text-[#014091] group-hover:scale-110 transition" />
                                <h3 className="text-base md:text-lg font-['Montserrat'] font-bold text-[#014091] mb-2 text-center">{service.title}</h3>
                                <p className="text-[#f47238] font-['Montserrat'] font-bold text-xs md:text-sm text-center">{service.highlight}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section
                ref={quoteRef}
                className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-12 flex justify-center items-center bg-[#f5f9fd]"
            >
                <div className="w-full max-w-5xl mx-auto bg-white p-6 md:p-8 lg:p-12 shadow-lg flex flex-col lg:flex-row gap-6 md:gap-8 items-stretch">
                    <div className="bg-[#014091] text-white flex-1 flex flex-col justify-center p-6 md:p-8 rounded-lg lg:rounded-none">
                        <div className="text-center mb-6 md:mb-8">
                            <div className="text-4xl sm:text-5xl md:text-6xl font-['Poppins'] font-black mb-3 md:mb-4 text-[#f47238]">6,154</div>
                            <p className="text-lg md:text-xl font-['Montserrat'] font-bold mb-1 md:mb-2">Successful Travel</p>
                            <p className="text-lg md:text-xl font-['Montserrat'] font-bold">Experiences With Us</p>
                        </div>
                        <div className="space-y-4 mb-6 md:mb-8">
                            <p className="font-['Open_Sans'] text-white/90 leading-relaxed text-sm md:text-base">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </p>
                        </div>
                        <div className="flex items-center justify-center lg:justify-start space-x-3">
                            <span className="font-['Montserrat'] font-bold text-sm md:text-base">Customer Stories</span>
                            <div className="w-8 h-8 bg-[#f47238] rounded-full flex items-center justify-center">
                                <span className="text-white text-sm">→</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white flex-1 lg:flex-[1.5] flex flex-col justify-center p-6 md:p-8">
                        <h3 className="text-2xl md:text-3xl font-['Poppins'] font-bold text-[#014091] mb-4 md:mb-6 text-center lg:text-left">Request A Quote</h3>
                        <p className="text-gray-600 font-['Open_Sans'] mb-6 md:mb-8 text-sm md:text-base text-center lg:text-left">
                            Let's plan the perfect journey for you. Our team will get back to you as soon as possible with the best travel options.
                        </p>
                        <form className="space-y-4 md:space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#138fff] focus:border-transparent font-['Open_Sans'] text-sm md:text-base"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#138fff] focus:border-transparent font-['Open_Sans'] text-sm md:text-base"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Origin"
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#138fff] focus:border-transparent font-['Open_Sans'] text-sm md:text-base"
                                />
                                <input
                                    type="text"
                                    placeholder="Destination"
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#138fff] focus:border-transparent font-['Open_Sans'] text-sm md:text-base"
                                />
                            </div>
                            <textarea
                                placeholder="Additional Details"
                                rows="4"
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#138fff] focus:border-transparent font-['Open_Sans'] resize-none text-sm md:text-base"
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full bg-[#f47238] text-white py-3 md:py-4 rounded-lg font-['Montserrat'] font-bold text-base md:text-lg hover:bg-[#ff6b35] transition transform hover:scale-[1.02] shadow-lg"
                            >
                                Submit Request →
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-16 px-4 md:px-6 lg:px-12 bg-white relative">
                <div className="max-w-5xl mx-auto relative z-10">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-['Poppins'] font-bold text-[#014091] mb-8 md:mb-10 text-center">
                        Our Airline Partners
                    </h2>
                    <div className="overflow-x-auto">
                        <div className="flex space-x-4 md:space-x-6 lg:space-x-8 pb-4">
                            {[
                                { name: "Emirates", src: "/logos/emirates.png" },
                                { name: "Qatar Airways", src: "/logos/qatar.png" },
                                { name: "Turkish Airlines", src: "/logos/turkish.png" },
                                { name: "Etihad Airways", src: "/logos/etihad.png" },
                                { name: "Singapore Airlines", src: "/logos/singapore.png" },
                                { name: "Saudi Arabian Airlines", src: "/logos/saudi.png" }
                            ].map((company, idx) => (
                                <div
                                    key={company.name}
                                    className="min-w-[100px] h-[100px] md:min-w-[120px] md:h-[120px] lg:min-w-[140px] lg:h-[140px] bg-gray-50 border border-gray-200 flex flex-col items-center justify-center rounded-xl shadow hover:scale-105 transition"
                                >
                                    <img
                                        src={company.src}
                                        alt={company.name}
                                        className="max-h-8 max-w-[80px] md:max-h-10 md:max-w-[90px] lg:max-h-12 lg:max-w-[100px] object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-20 lg:py-24 px-4 md:px-6 lg:px-12" style={{
                    backgroundImage: 'url("planeinside-bg.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}>
                <div className="max-w-4xl mx-auto text-center text-white">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-['Poppins'] font-black mb-4 md:mb-6">
                        Ready For Your Next Adventure?
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl mb-8 md:mb-10 font-['Open_Sans'] font-light px-4">
                        Let our travel experts create the perfect itinerary for you. Get personalized recommendations and exclusive deals.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6 px-4">
                        <button className="bg-[#f47238] text-white px-6 py-3 md:px-8 lg:px-10 md:py-4 rounded-lg text-base md:text-lg font-bold hover:bg-[#ff6b35] transition font-['Montserrat'] shadow-lg transform hover:scale-105">
                            Plan My Trip
                        </button>
                        <button className="border-2 border-white text-white px-6 py-3 md:px-8 lg:px-10 md:py-4 rounded-lg text-base md:text-lg font-bold hover:bg-white hover:text-[#014091] transition font-['Montserrat'] transform hover:scale-105">
                            Contact Us
                        </button>
                    </div>
                </div>
            </section>

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
        </>
    );
};

export default TestLanding;