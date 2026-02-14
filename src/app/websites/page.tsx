import Image from 'next/image';
import CTA from '@/components/sections/CTA';
// StarIcon import removed
import { BrandPattern } from '@/components/ui/BrandPattern';
import WebsiteProof from '@/components/sections/WebsiteProof';
import MagneticButton from '@/components/ui/MagneticButton';
import { FloatingAccents } from '@/components/ui/FloatingAccents';
import styles from '@/styles/ServicePage.module.css';

export default function WebsitesPage() {
    return (
        <main>
            {/* HERO - Websites */}
            <section className={styles.heroSection}>
                <BrandPattern />
                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.heroGrid}>
                        <div>
                            <p className={styles.heroSubtitle}>
                                Any type of website. Built clean. Built to convert.
                            </p>
                            <h1 className={styles.heroTitle}>
                                Website <br />
                                <span className="text-orange">Development.</span>
                            </h1>
                            <p className={styles.heroDesc}>
                                <span style={{ color: 'var(--color-grey-text)' }}>
                                    Landing pages, business sites, portfolios, eCommerce, and custom web apps — fast, mobile-first, and SEO-ready.
                                </span>
                            </p>
                            <MagneticButton href={`https://wa.me/923238756050?text=${encodeURIComponent(
                                'Hi Synced! I want a free website audit.\n\nMy business: \nWhat I need (type of website): \nTimeline: '
                            )}`}>
                                Get a Free Audit
                            </MagneticButton>
                        </div>
                        {/* Visual Asset: Performance Dashboard */}
                        <div className={styles.heroVisual} style={{ position: 'relative', height: '400px', width: '100%', mixBlendMode: 'lighten' }}>
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'radial-gradient(circle, rgba(232, 69, 5, 0.2) 0%, transparent 70%)',
                                filter: 'blur(50px)',
                                zIndex: 0
                            }} />
                            <Image
                                src="/images/performance-dashboard-v3.png"
                                alt="High Performance Website Metrics"
                                fill
                                style={{ objectFit: 'contain', zIndex: 1 }}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTORS GRID */}
            <section className={styles.section}>
                <FloatingAccents />
                {/* ... existing code ... */}
            </section>

            {/* NEW SECTION: Device Agnostic / Responsive */}
            <section className={styles.section} style={{ background: 'var(--color-charcoal-light)' }}>
                <div className="container">
                    <div className={styles.contentGrid}>
                        <div>
                            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: 1.1, color: 'var(--color-white)' }}>
                                Flawless on <br /> <span className="text-orange">Every Screen.</span>
                            </h2>
                            <p style={{ fontSize: '1.1rem', color: 'var(--color-grey-text)', marginBottom: '2rem', lineHeight: 1.6 }}>
                                60% of traffic is mobile. We design mobile-first to ensure your site performs perfectly whether it&apos;s on a 27&quot; monitor or an iPhone.
                            </p>
                            <div className={styles.card} style={{ border: 'none', background: 'transparent', padding: 0 }}>
                                <ul className={styles.cardList} style={{ gridTemplateColumns: '1fr', gap: '1rem' }}>
                                    <li style={{ fontSize: '1.1rem' }}>• <span style={{ color: 'var(--color-white)' }}>Adaptive Layouts</span> that stack intelligently</li>
                                    <li style={{ fontSize: '1.1rem' }}>• <span style={{ color: 'var(--color-white)' }}>Touch-Optimized</span> interactive elements</li>
                                    <li style={{ fontSize: '1.1rem' }}>• <span style={{ color: 'var(--color-white)' }}>Lightweight Assets</span> for instant 4G loading</li>
                                </ul>
                            </div>
                        </div>
                        {/* Visual Asset: Responsive Showcase */}
                        <div className={styles.contentVisual} style={{ mixBlendMode: 'lighten' }}>
                            <Image
                                src="/images/responsive-showcase-v3.png"
                                alt="Responsive Design Showcase on Multiple Devices"
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <WebsiteProof />

            <CTA />
        </main>
    );
}
