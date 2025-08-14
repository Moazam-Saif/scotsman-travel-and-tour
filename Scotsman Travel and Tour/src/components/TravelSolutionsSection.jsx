import React from 'react';
import { Icon } from '@iconify/react';

const TravelSolutionsSection = () => {
    return (
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
    );
};

export default TravelSolutionsSection;