import React from 'react';
import { Icon } from '@iconify/react';

const AdditionalServicesSection = () => {
    return (
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
    );
};

export default AdditionalServicesSection;