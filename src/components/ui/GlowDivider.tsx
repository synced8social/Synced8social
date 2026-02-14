'use client';

export const GlowDivider = () => {
    return (
        <div className="container">
            <div style={{
                position: 'relative',
                width: '100%',
                height: '1px',
                background: 'linear-gradient(90deg, transparent 0%, rgba(var(--accent-rgb), 0.50) 50%, transparent 100%)',
                opacity: 0.8,
                margin: '2rem auto'
            }}>
                {/* Visual bloom effect */}
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '60%',
                    height: '6px',
                    background: 'radial-gradient(ellipse at center, rgba(var(--accent-rgb), 0.30) 0%, transparent 70%)',
                    filter: 'blur(3px)',
                    borderRadius: '100%'
                }} />
            </div>
        </div>
    );
};
