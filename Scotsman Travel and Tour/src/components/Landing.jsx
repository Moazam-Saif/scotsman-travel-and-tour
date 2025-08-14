import React, { useRef } from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import TravelSolutionsSection from './TravelSolutionsSection';
import AdditionalServicesSection from './AdditionalServicesSection';
import QuoteSection from './QuoteSection';
import AirlinePartnersSection from './AirlinePartnersSection';
import CallToActionSection from './CallToActionSection';
import Footer from './Footer';

const Landing = () => {
    const quoteRef = useRef(null);

    const scrollToQuote = () => {
        if (quoteRef.current) {
            quoteRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <Navbar scrollToQuote={scrollToQuote} />
            <HeroSection />
            <TravelSolutionsSection />
            <AdditionalServicesSection />
            <QuoteSection ref={quoteRef} />
            <AirlinePartnersSection />
            <CallToActionSection />
            <Footer />
        </>
    );
};

export default Landing;