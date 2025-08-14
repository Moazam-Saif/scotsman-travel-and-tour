import React from 'react';
import { Icon } from '@iconify/react';

const TestLanding = () => {
    return (
        <>
            {/* Navigation - Keep as is */}
            <nav className="w-full bg-gradient-to-r from-[#138fff] to-[#0b5699] py-6 px-6 flex items-center justify-between relative">
                <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-[#f7f7f7] rounded-full flex items-center justify-center">
                        <span className="text-[#138fff] font-bold text-sm font-['Montserrat']">STT</span>
                    </div>
                </div>
                <span
                    className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-['Montserrat'] font-extrabold text-[#f7f7f7] text-3xl tracking-wide"
                    style={{ wordSpacing: '0.2em' }}
                >
                    SCOTSMAN TRAVELS & TOURS
                </span>
                <div className="flex items-center space-x-6">
                    <div className="hidden md:flex space-x-6">
                        <a href="#" className="text-[#f7f7f7] hover:text-gray-300 font-['Open_Sans'] transition-colors">Home</a>
                        <a href="#" className="text-[#f7f7f7] hover:text-gray-300 font-['Open_Sans'] transition-colors">Services</a>
                        <a href="#" className="text-[#f7f7f7] hover:text-gray-300 font-['Open_Sans'] transition-colors">Contact</a>
                    </div>
                    <button className="bg-[#f47238] text-white px-4 py-2 rounded-lg hover:bg-gray-200 transition font-bold font-['Montserrat']">
                        Get Quote
                    </button>
                </div>
            </nav>

            {/* Hero Image - Keep as is */}
            <div className="w-full h-[510px] bg-white flex items-center justify-center">
                <img
                    src="/Desktop - 1.svg"
                    alt="Main Cover"
                    className="w-full h-full"
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                        display: 'block'
                    }}
                />
            </div>

            {/* Hero Text Section - Keep as is */}
            <div className="w-full bg-[#f36a3e] py-6 flex flex-col items-center justify-center">
                <h1 className="text-5xl md:text-6xl font-['Poppins'] font-bold mb-8 leading-tight text-white text-center drop-shadow-lg">
                    Explore The World With Confidence
                </h1>
                <p className="text-2xl mb-4 text-white/90 font-['Open_Sans'] font-light max-w-3xl mx-auto text-center drop-shadow-md">
                    From breathtaking destinations to seamless travel experiences. We handle every detail so you can focus on creating memories.
                </p>
            </div>

            {/* Main Services Section */}
            <section className="py-24 px-6 md:px-12 relative overflow-hidden"
                style={{
                    backgroundImage: 'url("planes.svg")',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                }}>
                {/* Add an overlay to ensure content readability */}
                <div className="absolute inset-0 bg-white/70 z-0"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Section Header */}
                    <div className="text-center mb-20">
                        <h2 className="text-5xl font-['Poppins'] font-black text-[#014091] mb-6">
                            Complete Travel Solutions
                        </h2>
                        <p className="text-xl text-[#333333] max-w-3xl mx-auto font-['Open_Sans'] font-light">
                            Everything you need for your perfect journey, all in one place
                        </p>
                    </div>
                    {/* Main Content Layout */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                        {/* Left Content */}
                        <div className="space-y-8">
                            <div className="bg-gradient-to-r from-[#138fff]/10 to-[#0b5699]/10 p-8 rounded-2xl border-l-4 border-[#138fff] backdrop-blur-sm bg-white/80">
                                <h3 className="text-2xl font-['Montserrat'] font-bold text-[#014091] mb-4 flex items-center gap-2">
                                    <Icon icon="mdi:airplane" className="text-2xl text-[#014091]" />
                                    Flight Booking & Management
                                </h3>
                                <p className="text-[#333333] font-['Open_Sans'] text-lg mb-6">
                                    Get the best deals on domestic and international flights. Our advanced booking system ensures you get competitive prices with flexible options.
                                </p>
                                <div className="flex space-x-4">
                                    <span className="bg-[#f47238] text-white px-4 py-2 rounded-full text-sm font-bold">Best Prices</span>
                                    <span className="bg-[#138fff] text-white px-4 py-2 rounded-full text-sm font-bold">24/7 Support</span>
                                </div>
                            </div>
                            <div className="bg-gradient-to-r from-[#f47238]/10 to-[#ff6b35]/10 p-8 rounded-2xl border-l-4 border-[#f47238] backdrop-blur-sm bg-white/80">
                                <h3 className="text-2xl font-['Montserrat'] font-bold text-[#014091] mb-4 flex items-center gap-2">
                                    <Icon icon="mdi:hotel" className="text-2xl text-[#014091]" />
                                    Accommodation & Hotels
                                </h3>
                                <p className="text-[#333333] font-['Open_Sans'] text-lg mb-6">
                                    From luxury resorts to budget-friendly stays. We partner with top hotels worldwide to ensure comfortable accommodation for every budget.
                                </p>
                                <div className="flex space-x-4">
                                    <span className="bg-[#014091] text-white px-4 py-2 rounded-full text-sm font-bold">Verified Hotels</span>
                                    <span className="bg-[#f47238] text-white px-4 py-2 rounded-full text-sm font-bold">Instant Booking</span>
                                </div>
                            </div>
                        </div>
                        {/* Right Side - Stats/Info Box */}
                        <div className="bg-gradient-to-br from-[#014091] to-[#0b5699] text-white p-10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#138fff]/20 rounded-full -translate-y-16 translate-x-16"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#f47238]/20 rounded-full translate-y-12 -translate-x-12"></div>
                            <h3 className="text-3xl font-['Poppins'] font-bold mb-8">Why Choose Us?</h3>
                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-[#f47238] rounded-lg flex items-center justify-center text-2xl">
                                        <Icon icon="mdi:chart-bar" className="text-2xl text-white" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-['Montserrat'] font-bold">15+ Years Experience</h4>
                                        <p className="text-blue-200 font-['Open_Sans']">Trusted by thousands of travelers</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-[#138fff] rounded-lg flex items-center justify-center text-2xl">
                                        <Icon icon="mdi:earth" className="text-2xl text-white" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-['Montserrat'] font-bold">150+ Destinations</h4>
                                        <p className="text-blue-200 font-['Open_Sans']">Worldwide coverage</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-[#f47238] rounded-lg flex items-center justify-center text-2xl">
                                        <Icon icon="mdi:star" className="text-2xl text-white" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-['Montserrat'] font-bold">98% Customer Satisfaction</h4>
                                        <p className="text-blue-200 font-['Open_Sans']">Highly rated service</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional Services */}
            <section className="py-20 px-6 md:px-12 bg-[#f7832d] relative overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-['Poppins'] font-bold text-[#014091] mb-6">
                            Additional Services
                        </h2>
                        <p className="text-xl text-[#333333] font-['Open_Sans']">
                            Complete travel solutions for every need
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: 'Visa Services', icon: 'mdi:file-document-outline', highlight: 'Hassle-Free Processing' },
                            { title: 'Tour Packages', icon: 'mdi:map-outline', highlight: 'Curated Experiences' },
                            { title: 'Travel Insurance', icon: 'mdi:shield-check', highlight: 'Complete Protection' },
                            { title: 'Car Rentals', icon: 'mdi:car', highlight: 'Flexible Options' }
                        ].map((service, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl hover:shadow-lg transition group relative z-10 border border-gray-100 flex flex-col items-center">
                                <Icon icon={service.icon} className="text-4xl mb-4 text-[#014091] group-hover:scale-110 transition" />
                                <h3 className="text-lg font-['Montserrat'] font-bold text-[#014091] mb-2">{service.title}</h3>
                                <p className="text-[#f47238] font-['Montserrat'] font-bold text-sm">{service.highlight}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Request A Quote Section */}
            <section className="py-20 px-4 md:px-12 flex justify-center items-center bg-[#f5f9fd]">
                <div className="w-full max-w-5xl mx-auto bg-white p-8 md:p-12 shadow-lg flex flex-row gap-8 items-stretch">
                    {/* Left Side - Stats Box */}
                    <div className="bg-[#014091] text-white flex-1 flex flex-col justify-center p-8">
                        <div className="text-center mb-8 border-l-2 border-[#f47238]">
                            <div className="text-6xl font-['Poppins'] font-black mb-4 text-[#f47238]">6,154</div>
                            <p className="text-xl font-['Montserrat'] font-bold mb-2">Successful Travel</p>
                            <p className="text-xl font-['Montserrat'] font-bold">Experiences With Us</p>
                        </div>
                        <div className="space-y-4 mb-8">
                            <p className="font-['Open_Sans'] text-white/90 leading-relaxed">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <span className="font-['Montserrat'] font-bold">Customer Stories</span>
                            <div className="w-8 h-8 bg-[#f47238] rounded-full flex items-center justify-center">
                                <span className="text-white text-sm">→</span>
                            </div>
                        </div>
                    </div>
                    {/* Right Side - Quote Form */}
                    <div className="bg-white flex-[1.5] flex flex-col justify-center p-8">
                        <h3 className="text-3xl font-['Poppins'] font-bold text-[#014091] mb-6">Request A Quote</h3>
                        <p className="text-gray-600 font-['Open_Sans'] mb-8">
                            Let's plan the perfect journey for you. Our team will get back to you as soon as possible with the best travel options.
                        </p>
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#138fff] focus:border-transparent font-['Open_Sans']"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#138fff] focus:border-transparent font-['Open_Sans']"
                                    />
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Origin"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#138fff] focus:border-transparent font-['Open_Sans']"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Destination"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#138fff] focus:border-transparent font-['Open_Sans']"
                                    />
                                </div>
                            </div>
                            <div>
                                <textarea
                                    placeholder="Additional Details"
                                    rows="4"
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#138fff] focus:border-transparent font-['Open_Sans'] resize-none"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-[#f47238] text-white py-4 rounded-lg font-['Montserrat'] font-bold text-lg hover:bg-[#ff6b35] transition transform hover:scale-[1.02] shadow-lg"
                            >
                                Submit Request →
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Partners Carousel Section */}
            <section className="py-16 px-4 md:px-12 bg-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-['Poppins'] font-bold text-[#014091] mb-10 text-center">
                        Our Airline Partners
                    </h2>
                    {/* Carousel */}
                    <div className="overflow-x-auto">
                        <div className="flex space-x-8 pb-4">
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
                                    className="min-w-[140px] h-[140px] bg-gray-50 border border-gray-200 flex flex-col items-center justify-center rounded-xl shadow hover:scale-105 transition"
                                >
                                    <img
                                        src={company.src}
                                        alt={company.name}
                                        className="max-h-12 max-w-[100px] object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 md:px-12 bg-gradient-to-r from-[#014091] to-[#138fff]">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <h2 className="text-4xl md:text-5xl font-['Poppins'] font-black mb-6">
                        Ready For Your Next Adventure?
                    </h2>
                    <p className="text-xl mb-10 font-['Open_Sans'] font-light">
                        Let our travel experts create the perfect itinerary for you. Get personalized recommendations and exclusive deals.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                        <button className="bg-[#f47238] text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-[#ff6b35] transition font-['Montserrat'] shadow-lg transform hover:scale-105">
                            Plan My Trip
                        </button>
                        <button className="border-2 border-white text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-white hover:text-[#014091] transition font-['Montserrat'] transform hover:scale-105">
                            Contact Us
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer
                className="text-white py-16 px-6 md:px-12"
                style={{
                    background: "linear-gradient(to bottom, #014091 0%, #333333 80%)"
                }}
            >
                <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center space-x-2 mb-6">
                            <div className="w-10 h-10 bg-[#138fff] rounded-full flex items-center justify-center">
                                <span className="text-white font-bold font-['Montserrat']">STT</span>
                            </div>
                            <span className="text-xl font-['Montserrat'] font-bold">Scotsman Travel & Tours</span>
                        </div>
                        <p className="text-gray-400 mb-6 font-['Open_Sans']">
                            Your trusted partner for unforgettable travel experiences around the world.
                        </p>
                        <div className="flex space-x-4">
                            {[
                                { icon: 'mdi:email-outline' },
                                { icon: 'mdi:phone-outline' },
                                { icon: 'mdi:map-marker-outline' }
                            ].map((item, index) => (
                                <div key={index} className="w-12 h-12 bg-[#138fff] rounded-lg flex items-center justify-center cursor-pointer hover:bg-[#f47238] transition">
                                    <Icon icon={item.icon} className="text-lg text-white" />
                                </div>
                            ))}
                        </div>
                    </div>
                    {[
                        { title: 'Services', items: ['Flight Booking', 'Hotels', 'Car Rental', 'Tours', 'Visas', 'Insurance'] },
                        { title: 'Destinations', items: ['Dubai', 'Turkey', 'Malaysia', 'Thailand', 'Saudi Arabia', 'Singapore'] },
                        { title: 'Support', items: ['Contact Us', 'FAQ', 'Terms & Conditions', 'Privacy Policy'] }
                    ].map((column, index) => (
                        <div key={index}>
                            <h3 className="text-lg font-['Montserrat'] font-bold mb-6 text-[#f47238]">{column.title}</h3>
                            <ul className="space-y-3">
                                {column.items.map((item, itemIndex) => (
                                    <li key={itemIndex}>
                                        <a href="#" className="text-gray-400 hover:text-[#138fff] transition font-['Open_Sans']">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-700 text-center">
                    <p className="text-gray-400 font-['Open_Sans']">© 2025 Scotsman Travel & Tours. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
};

export default TestLanding;