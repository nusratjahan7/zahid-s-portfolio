"use client";
import { useState } from "react";
import useActiveSection from "./useActiveSection";
import Link from "next/link";
import { ThemeSwitch } from "./ThemeToggle";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    useActiveSection();

    // Array for navbar links
    const navLinks = [
        { label: "About", href: "#about" },
        { label: "Experience", href: "#experience" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" },
    ];

    return (
        <nav className="px-6 py-5 bg-[var(--bg-light)] dark:bg-[var(--bg-dark)] sticky top-0 right-0 left-0 z-50 transition-colors duration-300">
            {/* Top bar */}
            <div className="flex justify-between items-center">
                <a
                    href="#"
                    className="nav-logo font1 text-2xl font-bold text-[var(--light-primary)] dark:text-[var(--dark-primary)] tracking-[-0.5px]"
                >
                    Z<span className="text-accent font1"> I</span>
                </a>

                {/* Desktop Links */}
                <ul className="nav-links hidden md:flex gap-10 list-none">
                    {navLinks.map(({ label, href }) => (
                        <li key={label}>
                            <a
                                href={href}
                                className="text-[var(--light-primary)] dark:text-[var(--dark-primary)] hover:text-accent transition-colors"
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <Link
                            href="/Resume.pdf"
                            download="Nusrat_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="nav-cta uppercase bg-accent px-6 py-2.5 rounded-full font-medium transition-all ease-in-out duration-300"
                        >
                            Download CV
                        </Link>
                    </li>
                </ul>

                {/* Theme switch + Mobile menu toggle */}
                <div className="flex items-center gap-8">
                    <ThemeSwitch />
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden text-[var(--light-primary)] dark:text-[var(--dark-primary)] text-3xl"
                        aria-label="Toggle menu"
                    >
                        {open ? "✕" : "☰"}
                    </button>
                </div>
            </div>

            {/* Mobile dropdown */}
            {open && (
                <div className="md:hidden w-11/12 mx-auto mb-4 rounded-2xl border border-[var(--light-secondary)]/20 dark:bg-[var(--bg-dark)] dark:border-[var(--dark2)] backdrop-blur-xl px-6 py-6 mt-2 transition-colors duration-300">
                    <ul className="nav-links flex flex-col gap-5 list-none text-[var(--light-primary)] dark:text-[var(--dark-primary)]">
                        {navLinks.map(({ label, href }) => (
                            <li key={label}>
                                <a
                                    href={href}
                                    onClick={() => setOpen(false)}
                                    className="block hover:text-accent uppercase transition-colors"
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                        <li>
                            <Link
                                href="/Resume.pdf"
                                download="Nusrat_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="nav-cta uppercase bg-accent px-6 py-2.5 rounded-full font-medium transition-all ease-in-out duration-300"
                            >
                                Download CV
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;