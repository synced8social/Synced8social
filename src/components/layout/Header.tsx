'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MagneticButton from '../ui/MagneticButton';
import styles from './Header.module.css';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [mobileMenuOpen]);

    return (
        <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
            <div className={`container ${styles.navContainer}`}>
                {/* Logo - Left */}
                <Link href="/" className={styles.logoContainer} onClick={() => setMobileMenuOpen(false)}>
                    <Image
                        src="/images/Logo.png"
                        alt="Synced Logo"
                        fill
                        style={{ objectFit: 'contain', objectPosition: 'left' }}
                        priority
                    />
                </Link>

                {/* Desktop Navigation - Center */}
                <nav className={styles.centeredNav}>
                    <Link href="/websites" className={styles.navLink}>Websites</Link>
                    <Link href="/upwork" className={styles.navLink}>Upwork</Link>
                </nav>

                {/* Right Actions: CTA + Hamburger */}
                <div className={styles.rightAction}>
                    <div className={styles.desktopCTA}>
                        <MagneticButton
                            href={`https://wa.me/923238756050?text=${encodeURIComponent(
                                'Hi Synced! I want a free audit.\n\n1) I need: Website Development / Upwork Optimization\n2) My niche: \n3) My goal: \n4) Timeline: '
                            )}`}
                            style={{ padding: '0.75rem 2rem', fontSize: '1rem' }}
                        >
                            Free Audit
                        </MagneticButton>
                    </div>

                    {/* Hamburger Button */}
                    <button
                        className={`${styles.hamburger} ${mobileMenuOpen ? styles.open : ''}`}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.menuVisible : ''}`}>
                <div className={styles.mobileLinks}>
                    <Link href="/websites" onClick={() => setMobileMenuOpen(false)}>Websites</Link>
                    <Link href="/upwork" onClick={() => setMobileMenuOpen(false)}>Upwork</Link>
                    <a
                        href={`https://wa.me/923238756050?text=${encodeURIComponent(
                            'Hi Synced! I want a free audit.\n\n1) I need: Website Development / Upwork Optimization\n2) My niche: \n3) My goal: \n4) Timeline: '
                        )}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className={styles.mobileCTA}
                    >
                        Free Audit
                    </a>
                </div>
            </div>
        </header>
    );
}
