import React from 'react';
import './CTA.css';

const CTA = () => {
    return (
        <section className="cta-section">
            <div className="container cta-container">
                <div className="cta-content">
                    <h2 className="cta-title">ARE YOU A DENTIST?</h2>
                    <p className="cta-description">Join our network of professionals and elevate your practice with Dentzy.</p>
                </div>
                <div className="cta-action">
                    <button className="btn btn-primary cta-btn">GET STARTED</button>
                </div>
            </div>
            <div className="cta-bg-overlay"></div>
        </section>
    );
};

export default CTA;
