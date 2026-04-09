import React from 'react';
import './Support.css';
import supportImage from '../assets/master_support.png'; // Woman with headset

const Support = () => {
    return (
        <section className="support-section">
            <div className="container support-container">
                <div className="support-content animate-on-scroll">
                    <h2 className="support-title">Your Partner in Modern Dentistry</h2>
                    <p className="support-text">
                        At Dentzy, we don't just take orders; we provide solutions. Our dedicated technical support team is available for real-time case consultations, ensuring every restoration fits perfectly the first time.
                    </p>
                </div>
                <div className="support-image-wrapper animate-on-scroll">
                    <img src={supportImage} alt="Technical Support Specialist" className="support-image" />
                </div>
            </div>
        </section>
    );
};

export default Support;
