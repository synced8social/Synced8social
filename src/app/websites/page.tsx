import Image from 'next/image';
import CTA from '@/components/sections/CTA';
// StarIcon import removed
import { BrandPattern } from '@/components/ui/BrandPattern';
import ResultsGrid from '@/components/sections/ResultsGrid';
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
                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <p className={styles.heroSubtitle}>
                                Your site shouldn&apos;t just look good. It should print money.
                            </p>
                            <h1 className={styles.heroTitle}>
                                Websites that <br />
                                <span className="text-orange">Mean Business.</span>
                            </h1>
                            <p className={styles.heroDesc}>
                                <p style={{ color: 'var(--color-grey-text)' }}>We build high-octane stores that convert. Optimized for AOV and LTV. It&apos;s not just a shop; it&apos;s a machine.</p>
                            </p>
                            <MagneticButton href="/contact">
                                Start Your Build
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
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: 1.1, color: 'var(--color-white)' }}>
                                Flawless on <br /> <span className="text-orange">Every Screen.</span>
                            </h2>
                            <p style={{ fontSize: '1.1rem', color: 'var(--color-grey-text)', marginBottom: '2rem', lineHeight: 1.6 }}>
                                60% of traffic is mobile. We design mobile-first to ensure your site performs perfectly whether it's on a 27" monitor or an iPhone.
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
                        <div style={{ position: 'relative', height: '500px', width: '100%', mixBlendMode: 'lighten' }}>
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

            <ResultsGrid />

            <CTA />
        </main>
    );
}
