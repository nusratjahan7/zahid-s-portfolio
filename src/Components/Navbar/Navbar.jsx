"use client"
import { useState } from 'react';
// import './navbar.css';
import useActiveSection from './useActiveSection';
import Link from 'next/link';
import { ThemeSwitch } from './ThemeToggle';


const Navbar = () => {
    const [open, setOpen] = useState(false);
    useActiveSection();
    return (
        <nav className='px-6 py-5  bg-[var(--bg-light)] dark:bg-[var(--bg-dark)] sticky top-0 right-0 left-0 z-50'>
            {/* Top bar */}
            <div className="flex justify-between items-center">
                <a href="#" className="nav-logo font1 text-2xl font-bold text-(--light-primary) dark:text-(--dark-primary) tracking-[-0.5px]">
                    Z<span className="text-accent font1"> I</span>
                </a>

                <ul className="nav-links hidden md:flex gap-10 list-none">
                    <li><a href="#about" className='text-(--light-primary) dark:text-(--dark-primary)'>About</a></li>
                    <li><a href="#skills" className='text-(--light-primary) dark:text-(--dark-primary)'>Skills</a></li>
                    <li><a href="#projects" className='text-(--light-primary) dark:text-(--dark-primary)'>Projects</a></li>
                    <li><a href="#contact" className='text-(--light-primary) dark:text-(--dark-primary)' >Contact</a></li>
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
                <div className='flex items-center gap-8'>
                    <ThemeSwitch />
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden text-(--light-primary) dark:text-(--dark-primary) text-3xl"
                        aria-label="Toggle menu"
                    >
                        {open ? '✕' : '☰'}
                    </button>
                </div>
            </div>

            {/* Mobile dropdown — now INSIDE <nav> */}
            {open && (
                <div className="md:hidden w-11/12 mx-auto mb-4 rounded-2xl border border-(--light-secondary)/20 dark:bg-(--dark-bg) dark:border dark:border-(--dark2) backdrop-blur-xl px-6 py-6 mt-2">
                    <ul className="nav-links flex flex-col gap-5 list-none text-(--light-primary) dark:text-(--dark-primary)">
                        <li>
                            <a href="#about" onClick={() => setOpen(false)} className="block  hover:text-accent uppercase transition">
                                About
                            </a>
                        </li>

                        <li>
                            <a href="#skills" onClick={() => setOpen(false)} className="block  hover:text-accent uppercase transition">
                                Skills
                            </a>
                        </li>
                        <li>
                            <a href="#projects" onClick={() => setOpen(false)} className="block  hover:text-accent uppercase transition">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="#contact" onClick={() => setOpen(false)} className="block   hover:text-accent uppercase transition">
                                Contact
                            </a>
                        </li>
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