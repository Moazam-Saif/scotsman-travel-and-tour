import React from 'react';

const Home = () => {
    return (
        <div className="min-h-screen bg-white font-['Open_Sans']">
            {/* Navigation */}
            <nav className="bg-white shadow-sm py-4 px-6 md:px-12">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div className="w-12 h-12 bg-[#0991f3] rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-lg font-['Montserrat']">STT</span>
                        </div>
                        <span className="text-2xl font-['Montserrat'] font-bold text-[#014091]">Scotsman Travel & Tours</span>
                    </div>
                    <div className="hidden md:flex space-x-8">
                        <a href="#" className="text-[#333333] hover:text-[#0991f3] font-['Open_Sans']">Home</a>
                        <a href="#" className="text-[#333333] hover:text-[#0991f3] font-['Open_Sans']">Services</a>
                        <a href="#" className="text-[#333333] hover:text-[#0991f3] font-['Open_Sans']">Destinations</a>
                        <a href="#" className="text-[#333333] hover:text-[#0991f3] font-['Open_Sans']">About</a>
                        <a href="#" className="text-[#333333] hover:text-[#0991f3] font-['Open_Sans']">Contact</a>
                    </div>
                    <button className="bg-[#f78b0f] text-white px-6 py-2 rounded-lg hover:bg-[#f6ae2d] transition font-bold font-['Montserrat']">
                        Get Quote
                    </button>
                </div>
            </nav>



            {/* Hero Section */}
            <section className="relative text-white py-32 px-6 md:px-12 min-h-[80vh] flex items-center">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: 'url(/coverstt.jpg)',
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        width: '100%',
                        height: '100%',
                    }}
                ></div>

                {/* Dark Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-6xl md:text-7xl font-['Playfair_Display'] font-bold mb-8 leading-tight text-white drop-shadow-lg">
                            Explore The World With
                            <span className="text-[#f6ae2d]"> Confidence</span>
                        </h1>
                        <p className="text-2xl mb-12 text-white/90 font-['Open_Sans'] font-light max-w-3xl mx-auto drop-shadow-md">
                            From breathtaking destinations to seamless travel experiences. We handle every detail so you can focus on creating memories.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                            <button className="bg-[#f78b0f] text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-[#f6ae2d] transition font-['Open_Sans'] shadow-lg">
                                Start Planning →
                            </button>
                            <button className="border-2 border-white text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-white hover:text-[#014091] transition font-['Open_Sans'] backdrop-blur-sm">
                                View Packages
                            </button>
                        </div>
                    </div>
                </div>
            </section>


            {/* Main Services Section */}
            <section className="py-24 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-20">
                        <h2 className="text-5xl font-['Poppins'] font-black text-[#014091] mb-6">
                            Complete Travel Solutions
                        </h2>
                        <p className="text-xl text-[#333333] max-w-3xl mx-auto font-['Lato'] font-light">
                            Everything you need for your perfect journey, all in one place
                        </p>
                    </div>

                    {/* Main Content Layout */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                        {/* Left Content */}
                        <div className="space-y-8">
                            <div className="bg-gradient-to-r from-[#0991f3]/10 to-[#014091]/10 p-8 rounded-2xl border-l-4 border-[#0991f3]">
                                <h3 className="text-2xl font-['Montserrat'] font-bold text-[#014091] mb-4">
                                    ✈️ Flight Booking & Management
                                </h3>
                                <p className="text-[#333333] font-['Open_Sans'] text-lg mb-6">
                                    Get the best deals on domestic and international flights. Our advanced booking system ensures you get competitive prices with flexible options.
                                </p>
                                <div className="flex space-x-4">
                                    <span className="bg-[#f6ae2d] text-white px-4 py-2 rounded-full text-sm font-bold">Best Prices</span>
                                    <span className="bg-[#0991f3] text-white px-4 py-2 rounded-full text-sm font-bold">24/7 Support</span>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-[#f6ae2d]/10 to-[#f78b0f]/10 p-8 rounded-2xl border-l-4 border-[#f78b0f]">
                                <h3 className="text-2xl font-['Montserrat'] font-bold text-[#014091] mb-4">
                                    🏨 Accommodation & Hotels
                                </h3>
                                <p className="text-[#333333] font-['Open_Sans'] text-lg mb-6">
                                    From luxury resorts to budget-friendly stays. We partner with top hotels worldwide to ensure comfortable accommodation for every budget.
                                </p>
                                <div className="flex space-x-4">
                                    <span className="bg-[#014091] text-white px-4 py-2 rounded-full text-sm font-bold">Verified Hotels</span>
                                    <span className="bg-[#f78b0f] text-white px-4 py-2 rounded-full text-sm font-bold">Instant Booking</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Stats/Info Box */}
                        <div className="bg-[#014091] text-white p-10 rounded-3xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#0991f3]/20 rounded-full -translate-y-16 translate-x-16"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#f6ae2d]/20 rounded-full translate-y-12 -translate-x-12"></div>

                            <h3 className="text-3xl font-['Poppins'] font-bold mb-8">Why Choose Us?</h3>

                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-[#f78b0f] rounded-lg flex items-center justify-center text-2xl">📊</div>
                                    <div>
                                        <h4 className="text-xl font-['Montserrat'] font-bold">15+ Years Experience</h4>
                                        <p className="text-blue-200 font-['Open_Sans']">Trusted by thousands of travelers</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-[#f6ae2d] rounded-lg flex items-center justify-center text-2xl">🌍</div>
                                    <div>
                                        <h4 className="text-xl font-['Montserrat'] font-bold">150+ Destinations</h4>
                                        <p className="text-blue-200 font-['Open_Sans']">Worldwide coverage</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-[#0991f3] rounded-lg flex items-center justify-center text-2xl">⭐</div>
                                    <div>
                                        <h4 className="text-xl font-['Montserrat'] font-bold">98% Customer Satisfaction</h4>
                                        <p className="text-blue-200 font-['Open_Sans']">Highly rated service</p>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full mt-8 bg-[#f78b0f] text-white py-3 rounded-lg font-['Montserrat'] font-bold hover:bg-[#f6ae2d] transition">
                                Get Your Quote
                            </button>
                        </div>
                    </div>
                </div>
            </section>



            <section className="py-20 px-6 md:px-12 bg-[#e1e3e7] relative overflow-hidden">
                {/* Pattern Background */}
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: 'url(/pattern.svg)',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '100%',
                        width: '100%',
                    }}
                ></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: 'Visa Services', icon: '📋', highlight: 'Hassle-Free Processing' },
                            { title: 'Tour Packages', icon: '🗺️', highlight: 'Curated Experiences' },
                            { title: 'Travel Insurance', icon: '🛡️', highlight: 'Complete Protection' },
                            { title: 'Car Rentals', icon: '🚗', highlight: 'Flexible Options' }
                        ].map((service, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl hover:shadow-lg transition group relative z-10">
                                <div className="text-4xl mb-4 group-hover:scale-110 transition">{service.icon}</div>
                                <h3 className="text-lg font-['Montserrat'] font-bold text-[#014091] mb-2">{service.title}</h3>
                                <p className="text-[#f78b0f] font-['Montserrat'] font-bold text-sm">{service.highlight}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* CTA Section */}
            <section className="py-24 px-6 md:px-12 bg-gradient-to-r from-[#014091] to-[#0991f3]">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <h2 className="text-4xl md:text-5xl font-['Poppins'] font-black mb-6">
                        Ready For Your Next Adventure?
                    </h2>
                    <p className="text-xl mb-10 font-['Lato'] font-light">
                        Let our travel experts create the perfect itinerary for you. Get personalized recommendations and exclusive deals.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                        <button className="bg-[#f78b0f] text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-[#f6ae2d] transition font-['Montserrat'] shadow-lg">
                            Plan My Trip
                        </button>
                        <button className="border-2 border-white text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-white hover:text-[#014091] transition font-['Montserrat']">
                            Contact Us
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#333333] text-white py-16 px-6 md:px-12">
                <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center space-x-2 mb-6">
                            <div className="w-10 h-10 bg-[#0991f3] rounded-full flex items-center justify-center">
                                <span className="text-white font-bold font-['Montserrat']">STT</span>
                            </div>
                            <span className="text-xl font-['Montserrat'] font-bold">Scotsman Travel</span>
                        </div>
                        <p className="text-gray-400 mb-6 font-['Open_Sans']">
                            Your trusted partner for unforgettable travel experiences around the world.
                        </p>
                        <div className="flex space-x-4">
                            {['📧', '📞', '📍'].map((icon, index) => (
                                <div key={index} className="w-12 h-12 bg-[#0991f3] rounded-lg flex items-center justify-center cursor-pointer hover:bg-[#f78b0f] transition">
                                    <span className="text-lg">{icon}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {[
                        { title: 'Services', items: ['Flight Booking', 'Hotels', 'Car Rental', 'Tours'] },
                        { title: 'Destinations', items: ['Dubai', 'Turkey', 'Malaysia', 'Thailand'] },
                        { title: 'Support', items: ['Contact Us', 'FAQ', 'Terms', 'Privacy'] }
                    ].map((column, index) => (
                        <div key={index}>
                            <h3 className="text-lg font-['Montserrat'] font-bold mb-6 text-[#f6ae2d]">{column.title}</h3>
                            <ul className="space-y-3">
                                {column.items.map((item, itemIndex) => (
                                    <li key={itemIndex}>
                                        <a href="#" className="text-gray-400 hover:text-[#f78b0f] transition font-['Open_Sans']">{item}</a>
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
        </div>
    );
};

export default Home;