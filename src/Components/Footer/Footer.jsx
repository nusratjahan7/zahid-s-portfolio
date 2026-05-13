import React from 'react';

const Footer = () => {
    return (
        <footer className="py-3 border-t border-(--light-secondary)/10 text-center text-sm text-(--light-secondary) dark:text-(--dark-secondary)">
            © {new Date().getFullYear()} Zahidul Islam · Registered Cardiac Nurse, Dhaka
        </footer>
    );
};

export default Footer;