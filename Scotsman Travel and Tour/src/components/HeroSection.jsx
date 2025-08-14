import React from 'react';

const HeroSection = () => {
    return (
        <>
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
        </>
    );
};

export default HeroSection;