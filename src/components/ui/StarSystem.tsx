import React from 'react';

// Advanced Star Component
interface StarProps {
    size?: number;
    className?: string;
    style?: React.CSSProperties;
    variant?: 'glow' | 'glass' | 'solid';
    opacity?: number;
}

export const StarIcon = ({
    size = 24,
    className = '',
    style = {},
    variant = 'solid',
    opacity = 1
}: StarProps) => {

    const baseStyle: React.CSSProperties = {
        color: 'var(--color-orange-primary)', // Default base
        ...style,
    };

    // Glass/Glow Effects using strict two-tone orange
    if (variant === 'glow') {
        baseStyle.filter = 'drop-shadow(0 0 8px rgba(var(--accent-rgb), 0.60))';
    } else if (variant === 'glass') {
        baseStyle.opacity = opacity * 0.8;
        baseStyle.filter = 'blur(1px)';
        baseStyle.mixBlendMode = 'screen';
    }

    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            style={{
                transform: 'rotate(0deg)', // Removed rotation to keep it upright like the reference
                ...baseStyle
            }}
        >
            {/* 4-Pointed Curved Star (Sparkle) Shape matching the image */}
            <path d="M12 0C14.5 8.5 15.5 9.5 24 12C15.5 14.5 14.5 15.5 12 24C9.5 15.5 8.5 14.5 0 12C8.5 9.5 9.5 8.5 12 0Z" />
        </svg>
    );
};

export const StarPattern = () => (
    <div
        className="star-pattern"
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: 0.1, // Very subtle
            pointerEvents: 'none',
            zIndex: 0,
            backgroundImage: 'radial-gradient(rgba(var(--accent-rgb), 0.20) 1px, transparent 1px)', // Accent tint for pattern
            backgroundSize: '50px 50px'
        }}
    />
);
