import React from 'react';
import Hero from '../components/Hero';
import CoreServices from '../components/CoreServices';
import Process from '../components/Process';
import BrandPhilosophy from '../components/BrandPhilosophy';
import CTA from '../components/CTA';


const Home = () => {
    return (
        <>
            <Hero />
            <CoreServices />
            <Process />
            <BrandPhilosophy />
            <CTA />
        </>
    );
};

export default Home;
