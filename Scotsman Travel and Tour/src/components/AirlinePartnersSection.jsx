import React from 'react';

const AirlinePartnersSection = () => {
    return (
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
    );
};

export default AirlinePartnersSection;