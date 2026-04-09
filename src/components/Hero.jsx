import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <div className="hero-text-side">
                    <p className="hero-overline animate-on-scroll">CREY ON CO.</p>
                    <h1 className="hero-title animate-on-scroll">
                        Precision &<br />
                        Aesthetics.
                    </h1>
                    <p className="hero-subtitle animate-on-scroll">
                        And you're it!<br />
                        (Your partner in modern dentistry.)
                    </p>
                    <div className="hero-actions animate-on-scroll">
                        <button className="btn btn-primary">GET STARTED</button>
                        <button className="btn btn-outline" style={{ borderColor: '#333', color: '#888' }}>Learn More</button>
                    </div>
                </div>

                <div className="hero-visual-side">
                    <div className="typo-stack">
                        <div className="typo-line layer-1">DENTZY</div>
                        <div className="typo-line layer-2">LABS</div>
                        <div className="typo-line layer-3">EST.</div>
                        <div className="typo-line layer-4">2026</div>
                        <div className="typo-line layer-5">PREMIUM</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
