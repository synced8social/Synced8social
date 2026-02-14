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

                {/* Layer 3: Simple Navigation */}
                <div className={styles.navGrid}>
                    <div className={styles.column}>
                        <h4 className={styles.columnTitle}>Explore</h4>
                        <ul className={styles.linkList}>
                            <li><Link href="/websites">Website Development</Link></li>
                            <li><Link href="/upwork">Upwork Optimization</Link></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4 className={styles.columnTitle}>Get a Free Audit</h4>
                        <ul className={styles.linkList}>
                            <li>
                                <a
                                    href={`https://wa.me/923238756050?text=${encodeURIComponent(
                                        'Hi Synced! I want a free audit.\n\n1) I need: Website Development / Upwork Optimization\n2) My niche: \n3) My goal: \n4) Timeline: '
                                    )}`}
                                >
                                    WhatsApp Us
                                </a>
                            </li>
                            <li><a href="mailto:hello@synced.com">hello@synced.com</a></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4 className={styles.columnTitle}>Legal</h4>
                        <ul className={styles.linkList}>
                            <li><Link href="/privacy">Privacy Policy</Link></li>
                            <li><Link href="/terms">Terms of Use</Link></li>
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
