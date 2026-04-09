import React from 'react';
import './About.css';
import aboutHeroBanner from '../assets/about_hero_banner.png';
import founderImg from '../assets/founder_profile.jpg';

const About = () => {
    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <img src={aboutHeroBanner} alt="About Dentzy" className="about-hero-img" />
            </section>

            {/* Body Content */}
            <section className="container about-main">
                <div className="about-divider"></div>

                <div className="about-content-wrapper">
                    <div className="about-text">
                        <p style={{ marginBottom: '24px' }}>
                            Dentzy is a leading Indian dental brand founded by <strong>Tanish Dinesh Poojari</strong>, a Certified Dental Technician (CDT). Built on a <strong>legacy</strong> of excellence, Dentzy is backed by its parent company, <strong>Namrata Dental Solutions</strong>, which has been a trusted leader in the dental laboratory industry mainly in Maharashtra for over <strong>30 years</strong>. By combining decades of technical expertise with modern innovation, Dentzy continues to set new standards in dental craftsmanship.
                        </p>
                        <p>
                            After observing the frequent friction between dental laboratories and clinicians—often caused by poor customer service and a lack of mutual understanding—Tanish Dinesh Poojari recognized a significant gap in the industry. To bridge this divide, he envisioned a <strong>fully digital dental laboratory ecosystem</strong>. His goal is to streamline workflows and foster seamless communication between the dental lab, the dentist, and the patient. By leveraging digital integration, Tanish aims to ensure <strong>precision</strong>, <strong>transparency</strong>, and a more efficient experience.
                        </p>
                    </div>

                    <div className="founder-section">
                        <div className="founder-card">
                            <img src={founderImg} alt="Tanish Dinesh Poojari" className="founder-image" />
                            <h4 className="founder-name">Tanish Dinesh Poojari</h4>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
