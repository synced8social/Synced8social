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
                    <Link href="/social" className={styles.navLink}>Social</Link>
                    <Link href="/process" className={styles.navLink}>Process</Link>
                    <Link href="/results" className={styles.navLink}>Results</Link>
                </nav>

                {/* Right Actions: CTA + Hamburger */}
                <div className={styles.rightAction}>
                    <div className={styles.desktopCTA}>
                        <MagneticButton
                            href="/contact"
                            style={{ padding: '0.75rem 2rem', fontSize: '1rem' }}
                        >
                            Start Growth
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
                    <Link href="/social" onClick={() => setMobileMenuOpen(false)}>Social</Link>
                    <Link href="/process" onClick={() => setMobileMenuOpen(false)}>Process</Link>
                    <Link href="/results" onClick={() => setMobileMenuOpen(false)}>Results</Link>
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className={styles.mobileCTA}>Start Growth</Link>
                </div>
            </div>
        </header>
    );
}
