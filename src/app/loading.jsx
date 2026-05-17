"use client";

export default function Loading() {
    return (
        <div className="loading-wrapper">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

                .loading-wrapper {
                    width: 100%;
                    height: 100vh;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 20px;
                    background: #F0F4FA;
                    font-family: 'Playfair Display', serif;
                    transition: background 0.3s;
                }

                /* next-themes dark mode class */
                :is(.dark, [data-theme="dark"]) .loading-wrapper {
                    background: #0D1117;
                }

                :is(.dark, [data-theme="dark"]) .loading-name {
                    color: #FFFFFF;
                }

                :is(.dark, [data-theme="dark"]) .loading-bar-track {
                    background: #2A3050;
                }

                :is(.dark, [data-theme="dark"]) .loading-status {
                    color: #8A96B2;
                }

                @keyframes barSlide {
                    0% { width: 0; margin-left: 0; }
                    50% { width: 100%; margin-left: 0; }
                    100% { width: 0; margin-left: 100%; }
                }

                @keyframes fade {
                    0%, 100% { opacity: 0.3; }
                    50% { opacity: 1; }
                }

                .loading-name {
                    color: #111827;
                    font-size: clamp(1.5rem, 4vw, 1.875rem);
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 6px;
                    padding-left: 6px;
                    text-align: center;
                    transition: color 0.3s;
                }

                .loading-bar-track {
                    width: 150px;
                    height: 1px;
                    background: #EAF0FC;
                    overflow: hidden;
                    transition: background 0.3s;
                }

                .loading-bar-fill {
                    height: 1px;
                    width: 0;
                    background: #3A7BDE;
                    animation: barSlide 2s ease-in-out infinite;
                }

                .loading-status {
                    font-size: 10px;
                    letter-spacing: 3px;
                    text-transform: uppercase;
                    color: #6B7280;
                    animation: fade 2s ease-in-out infinite;
                    padding-left: 3px;
                    transition: color 0.3s;
                }
            `}</style>

            <p className="loading-name">
                Zahid<span style={{ color: "#2563C4" }}>.</span>
            </p>

            <div className="loading-bar-track">
                <div className="loading-bar-fill" />
            </div>

            <span className="loading-status">Loading</span>
        </div>
    );
}