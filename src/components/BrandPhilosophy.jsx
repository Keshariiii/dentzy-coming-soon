import React from 'react';
import './BrandPhilosophy.css';

const BrandPhilosophy = () => {
    return (
        <section className="brand-philosophy">
            <div className="container">
                <div className="philosophy-content animate-on-scroll">
                    <h2 className="philosophy-title">BE A DENTZY CUZ...</h2>
                    <blockquote className="philosophy-quote">
                        "If <span className="highlight">Dentzy</span> were a person, they would be a
                        <span className="highlight"> tech-savvy craftsman</span> who values precision as much as empathy."
                    </blockquote>
                </div>
            </div>
        </section>
    );
};

export default BrandPhilosophy;
