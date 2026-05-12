'use client';
import { useEffect } from 'react';

const useActiveSection = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    const handleScroll = () => {
      let current = '';
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 200) {
          current = s.getAttribute('id');
        }
      });
      navLinks.forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + current ? 'var(--accent)' : '';
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};

export default useActiveSection;