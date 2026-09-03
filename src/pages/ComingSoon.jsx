import React from 'react';
import './ComingSoon.css';

const ComingSoon = () => {
    return (
        <section className="hero" style={{ minHeight: '100vh', width: '100%', background: 'var(--bg-gradient)', paddingTop: 0 }}>
            <div className="container hero-content">
                <div className="hero-text-side">
                    <p className="hero-overline animate-on-scroll">DENTZY</p>
                    <h1 className="hero-title animate-on-scroll">
                        COMING <br />
                        SOON.
                    </h1>
                    <p className="hero-subtitle animate-on-scroll">
                        We are currently crafting a new digital experience.<br />
                        (Stay tuned for the reveal.)
                    </p>
                    {/* Removed buttons for a pure 'Coming Soon' state, or could keep a 'Notify Me' */}
                </div>

                <div className="hero-visual-side">
                    <div className="typo-stack">
                        <div className="typo-line layer-1">DENTZY</div>
                        <div className="typo-line layer-2">FUTURE</div>
                        <div className="typo-line layer-3">LOADING</div>
                        <div className="typo-line layer-4">...</div>
                        <div className="typo-line layer-5">WAIT</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComingSoon;
