'use client';

import { StarIcon } from './StarSystem';

import { useState, useEffect } from 'react';

const PatternStar = () => {
    const [opacity, setOpacity] = useState(0.1);

    useEffect(() => {
        setOpacity(Math.random() * 0.5 + 0.1);
    }, []);

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            opacity: opacity
        }}>
            <StarIcon size={12} variant="glass" opacity={0.6} />
        </div>
    );
};

export const BrandPattern = () => (
    <div
        className="brand-pattern"
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            pointerEvents: 'none',
            zIndex: 0,
            opacity: 0.15, // Low opacity per brief
        }}
    >
        {/* We use a repeating CSS grid of star icons for the pattern */}
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
            gap: '2rem',
            width: '120%',
            height: '120%',
            marginLeft: '-10%',
            marginTop: '-10%',
            transform: 'rotate(-5deg)', // Slight dynamic tilt
        }}>
            {Array.from({ length: 40 }).map((_, i) => (
                <PatternStar key={i} />
            ))}
        </div>
    </div>
);
