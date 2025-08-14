import React from 'react';

const QuoteSection = React.forwardRef((props, ref) => {
    return (
        <section
            ref={ref}
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
    );
});

QuoteSection.displayName = 'QuoteSection';

export default QuoteSection;