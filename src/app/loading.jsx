"use client";

import { useEffect, useRef } from "react";

export default function Loading() {
    const wrapperRef = useRef(null);

    useEffect(() => {
        const theme = localStorage.getItem("theme");
        const isDark =
            theme === "dark" ||
            (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches);

        if (!wrapperRef.current) return;
        const el = wrapperRef.current;

        el.style.background = isDark ? "#0D1117" : "#F0F4FA";
        el.querySelector(".l-name").style.color = isDark ? "#FFFFFF" : "#111827";
        el.querySelector(".l-track").style.background = isDark ? "#2A3050" : "#EAF0FC";
        el.querySelector(".l-status").style.color = isDark ? "#8A96B2" : "#6B7280";
    }, []);

    return (
        <div
            ref={wrapperRef}
            style={{
                width: "100%",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "20px",
                background: "#0D1117",
                fontFamily: "'Playfair Display', serif",
            }}
        >
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');

                @keyframes barSlide {
                    0% { width: 0; margin-left: 0; }
                    50% { width: 100%; margin-left: 0; }
                    100% { width: 0; margin-left: 100%; }
                }

                @keyframes fade {
                    0%, 100% { opacity: 0.3; }
                    50% { opacity: 1; }
                }

                .l-fill {
                    height: 1px;
                    width: 0;
                    background: #3A7BDE;
                    animation: barSlide 2s ease-in-out infinite;
                }

                .l-status {
                    font-size: 10px;
                    letter-spacing: 3px;
                    text-transform: uppercase;
                    color: #8A96B2;
                    animation: fade 2s ease-in-out infinite;
                    padding-left: 3px;
                }
            `}</style>

            <p
                className="l-name"
                style={{
                    color: "#FFFFFF",
                    fontSize: "clamp(1.5rem, 4vw, 1.875rem)",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "6px",
                    paddingLeft: "6px",
                    textAlign: "center",
                }}
            >
                Zahid<span style={{ color: "#2563C4" }}>.</span>
            </p>

            <div
                className="l-track"
                style={{
                    width: "150px",
                    height: "1px",
                    background: "#2A3050",
                    overflow: "hidden",
                }}
            >
                <div className="l-fill" />
            </div>

            <span className="l-status">Loading</span>
        </div>
    );
}