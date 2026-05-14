"use client"
import { useEffect } from 'react';

export default function CursorEffect() {
    useEffect(() => {
        const cursor = document.getElementById('cursor');
        const follower = document.getElementById('follower');

        const moveCursor = (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';

            setTimeout(() => {
                follower.style.left = e.clientX + 'px';
                follower.style.top = e.clientY + 'px';
            }, 80); // slight delay for follower trail effect
        };

        window.addEventListener('mousemove', moveCursor);
        return () => window.removeEventListener('mousemove', moveCursor);
    }, []);

    return null;
}