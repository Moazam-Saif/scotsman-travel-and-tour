import React from 'react';

const TestLanding = () => {
    return (
        <>
            <nav className="w-full bg-gradient-to-r from-[#138fff] to-[#0b5699] py-4 px-6 flex items-center justify-between relative">
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
            <div className="w-full h-[500px] bg-white flex items-center justify-center">
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
            <div className="w-full bg-[#f47238] py-6 flex flex-col items-center justify-center">
                <h1 className="text-5xl md:text-6xl font-['Poppins'] font-bold mb-8 leading-tight text-white text-center drop-shadow-lg">
                    Explore The World With Confidence
                </h1>
                <p className="text-2xl mb-4 text-white/90 font-['Open_Sans'] font-light max-w-3xl mx-auto text-center drop-shadow-md">
                    From breathtaking destinations to seamless travel experiences. We handle every detail so you can focus on creating memories.
                </p>
            </div>
        </>
    );
};

export default TestLanding;