import React from 'react';
import './CoreServices.css';
import zirconiaImg from '../assets/service_zirconia_new.jpg';
import fixedImg from '../assets/service_fixed_new.jpg';
import removableImg from '../assets/service_removable_new.jpg';

const CoreServices = () => {
    const services = [
        {
            id: 1,
            title: "Ziconia & PFZ",
            description: "Experience the perfect blend of strength and aesthetics with our premium Zirconia and PFZ solutions.",
            image: zirconiaImg
        },
        {
            id: 2,
            title: "Fixed Prosthodontics",
            description: "From single crowns to full-arch bridges, our fixed restorations are crafted for longevity and fit.",
            image: fixedImg
        },
        {
            id: 3,
            title: "Removables",
            description: "Designed for comfort and long-term functionality, our removable solutions restore quality of life.",
            image: removableImg
        }
    ];

    return (
        <section className="core-services" id="products">
            <div className="container">
                <h2 className="section-title text-center animate-on-scroll">CORE SERVICES</h2>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={service.id} className="service-card animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="service-image-wrapper">
                                <img src={service.image} alt={service.title} className="service-image" />
                            </div>
                            <div className="service-content">
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoreServices;
