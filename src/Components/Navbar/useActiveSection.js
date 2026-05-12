'use client';
import { useEffect } from 'react';

const useActiveSection = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    const handleScroll = () => {
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 200; // offset for navbar height
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        const href = link.getAttribute('href').substring(1); // remove #
        if (href === current) {
          link.classList.add('text-accent'); // active link color
          link.classList.remove('text-[var(--light-primary)]', 'dark:text-[var(--dark-primary)]');
        } else {
          link.classList.remove('text-accent');
          link.classList.add('text-[var(--light-primary)]', 'dark:text-[var(--dark-primary)]');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // highlight link on page load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};

export default useActiveSection;