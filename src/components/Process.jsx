import React from 'react';
import './Process.css';

const Process = () => {
    const steps = [
        { id: 1, title: "RECEIVE" },
        { id: 2, title: "REVIVE" },
        { id: 3, title: "RESTORE" }
    ];

    return (
        <section className="process-section">
            <div className="container">
                <h2 className="section-title text-center animate-on-scroll">THE DENTZY PROCESS</h2>
                <div className="process-timeline">
                    {steps.map((step, index) => (
                        <React.Fragment key={step.id}>
                            <div className="process-step animate-on-scroll" style={{ animationDelay: `${index * 0.2}s` }}>
                                <h3 className="process-step-title">{step.title}</h3>
                            </div>
                            {index < steps.length - 1 && <div className="step-connector"></div>}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
