import Link from 'next/link';
// Image import removed
import { BrandPattern } from '../ui/BrandPattern';
import { FloatingAccents } from '../ui/FloatingAccents';
import { StarIcon } from '../ui/StarSystem';
import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            {/* Layer 2: Visual Brand Layer (Background Pattern) */}
            <BrandPattern />

            {/* Floating Star Accents (Sharp stars) */}
            <FloatingAccents />

            {/* NEW: Heavy Ambient Blurs (Glassy/Mac-like background depth) */}
            <div style={{
                position: 'absolute',
                top: '0%',
                left: '20%',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(232, 69, 5, 0.08) 0%, transparent 70%)',
                filter: 'blur(80px)',
                zIndex: 0,
                pointerEvents: 'none',
            }} />
            <div style={{
                position: 'absolute',
                bottom: '0%',
                right: '10%',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(232, 69, 5, 0.05) 0%, transparent 60%)',
                filter: 'blur(100px)',
                zIndex: 0,
                pointerEvents: 'none',
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>

                {/* Layer 1: Brand Closure Section */}
                <div className={styles.closureSection}>
                    <h2 className={styles.closureTitle}>
                        Revenue-ready websites. <br />
                        <span className="text-orange">Systems that scale.</span>
                    </h2>
                    <p className={styles.closureSubtitle}>
                        Websites first. Platforms aligned. Growth engineered.
                    </p>
                </div>

                {/* Layer 3: Navigation & Services */}
                <div className={styles.navGrid}>

                    {/* Column 1: Explore */}
                    <div className={styles.column}>
                        <h4 className={styles.columnTitle}>Explore</h4>
                        <ul className={styles.linkList}>
                            <li><Link href="/websites">Websites</Link></li>
                            <li><Link href="/upwork">Upwork</Link></li>
                            <li><Link href="/social">Social & Support</Link></li>
                            <li><Link href="/process">Process</Link></li>
                            <li><Link href="/results">Results</Link></li>
                            <li><Link href="/about">About</Link></li>
                        </ul>
                    </div>

                    {/* Column 2: Services (Detailed) */}
                    <div className={styles.column}>
                        <h4 className={styles.columnTitle}>Services</h4>
                        <ul className={styles.linkList}>
                            <li><Link href="/websites">High-Performance Websites</Link></li>
                            <li><Link href="/ecommerce">E-commerce Solutions</Link></li>
                            <li><Link href="/real-estate">Real Estate Platforms</Link></li>
                            <li><Link href="/upwork">Upwork Optimization</Link></li>
                            <li><Link href="/social">Social & Customer Support</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Connect */}
                    <div className={styles.column}>
                        <h4 className={styles.columnTitle}>Connect</h4>
                        <ul className={styles.linkList}>
                            <li><a href="mailto:hello@synced.com">hello@synced.com</a></li>
                            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter / X</a></li>
                        </ul>
                    </div>
                </div>

                {/* Layer 4: Trust & Identity Line */}
                <div className={styles.trustSection}>
                    <StarIcon size={16} className="text-orange" />
                    <p className={styles.trustText}>Built to support scalable growth systems.</p>
                    <StarIcon size={16} className="text-orange" />
                </div>

                {/* Layer 5: Legal & Utility */}
                <div className={styles.legalSection}>
                    <p>&copy; {currentYear} Synced Inc.</p>
                    <div className={styles.legalLinks}>
                        <Link href="/privacy">Privacy Policy</Link>
                        <Link href="/terms">Terms of Use</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}
