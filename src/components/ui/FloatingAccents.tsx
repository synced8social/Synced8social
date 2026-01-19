'use client';

import { StarIcon } from './StarSystem';
import { useEffect, useState } from 'react';

export const FloatingAccents = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    if (!mounted) return null;

    // Random positions for a natural, scattered look
    const accents = [
        { top: '15%', left: '10%', size: 16, opacity: 0.6, animationDelay: '0s' },
        { top: '45%', right: '15%', size: 24, opacity: 0.4, animationDelay: '2s' },
        { bottom: '20%', left: '20%', size: 12, opacity: 0.5, animationDelay: '1.5s' },
        { top: '10%', right: '25%', size: 10, opacity: 0.3, animationDelay: '3s' },
    ];

    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            pointerEvents: 'none',
            zIndex: 0
        }}>
            {accents.map((accent, i) => (
                <div key={i} style={{
                    position: 'absolute',
                    top: accent.top,
                    left: accent.left,
                    right: accent.right,
                    bottom: accent.bottom,
                    color: 'var(--color-orange-primary)',
                    opacity: accent.opacity,
                    filter: 'blur(1px)',
                    animation: `pulse 4s ease-in-out infinite ${accent.animationDelay}`
                }}>
                    <StarIcon size={accent.size} />
                </div>
            ))}
            <style jsx>{`
                @keyframes pulse {
                    0%, 100% { transform: scale(1); opacity: 0.4; }
                    50% { transform: scale(1.2); opacity: 0.8; }
                }
            `}</style>
        </div>
    );
};
