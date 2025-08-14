import React from 'react';

const CallToActionSection = () => {
    return (
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
    );
};

export default CallToActionSection;