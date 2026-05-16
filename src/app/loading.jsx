"use client";

import { useTheme } from "next-themes";

export default function Loading() {
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme !== "light";

    return (
        <div
            className="w-full h-screen flex flex-col items-center justify-center gap-5"
            style={{
                background: isDark ? "#0D1117" : "#F0F4FA",
                fontFamily: "'Playfair Display', serif",
            }}
        >
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

                @keyframes barSlide {
                    0% { width: 0; margin-left: 0; }
                    50% { width: 100%; margin-left: 0; }
                    100% { width: 0; margin-left: 100%; }
                }

                @keyframes fade {
                    0%, 100% { opacity: 0.3; }
                    50% { opacity: 1; }
                }

                .bar-fill {
                    height: 1px;
                    width: 0;
                    background: #3A7BDE;
                    animation: barSlide 2s ease-in-out infinite;
                }

                .status-text {
                    font-size: 10px;
                    letter-spacing: 3px;
                    text-transform: uppercase;
                    animation: fade 2s ease-in-out infinite;
                    display: block;
                    text-align: center;
                    padding-left: 3px;
                }
            `}</style>

            {/* Name — padding-left দিয়ে letter-spacing offset fix */}
            <p
                className="text-2xl sm:text-3xl font-bold uppercase"
                style={{
                    color: isDark ? "#FFFFFF" : "#111827",
                    letterSpacing: "6px",
                    paddingLeft: "6px",
                    textAlign: "center",
                }}
            >
                Zahid<span style={{ color: "#2563C4" }}>.</span>
            </p>

            {/* Bar */}
            <div
                style={{
                    width: "150px",
                    height: "1px",
                    background: isDark ? "#2A3050" : "#EAF0FC",
                    overflow: "hidden",
                }}
            >
                <div className="bar-fill" />
            </div>

            {/* Status */}
            <span
                className="status-text"
                style={{ color: isDark ? "#8A96B2" : "#6B7280" }}
            >
                Loading
            </span>
        </div>
    );
}