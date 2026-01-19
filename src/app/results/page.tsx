import Image from 'next/image';
import CTA from '@/components/sections/CTA';
import Value from '@/components/sections/Value';
import { BrandPattern } from '@/components/ui/BrandPattern';
import MagneticButton from '@/components/ui/MagneticButton';
import { FloatingAccents } from '@/components/ui/FloatingAccents';
import styles from '@/styles/ServicePage.module.css';

export default function ResultsPage() {
    return (
        <main>
            {/* HERO */}
            <section className={styles.heroSection}>
                <BrandPattern />
                <div className={`container ${styles.heroContent}`}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <h1 className={styles.heroTitle}>
                                Logic. Systems. <br />
                                <p className={styles.heroSubtitle}>
                                    Real revenue. Real retention. That&apos;s the only metric we track.
                                </p>
                                <span className="text-orange">Revenue.</span>
                            </h1>
                            <p className={styles.heroDesc}>
                                We don't sell design; we sell outcomes. Our 7-figure growth systems are engineered to turn traffic into ownership and clicks into cash.
                            </p>
                            <MagneticButton href="/contact">
                                Scale Your Revenue
                            </MagneticButton>
                        </div>
                        {/* Visual Asset: Revenue Growth */}
                        <div className={styles.heroVisual} style={{ position: 'relative', height: '400px', width: '100%', mixBlendMode: 'lighten' }}>
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'radial-gradient(circle, rgba(232, 69, 5, 0.2) 0%, transparent 70%)',
                                filter: 'blur(50px)',
                                zIndex: 0
                            }} />
                            <Image
                                src="/images/results-revenue.png"
                                alt="7-Figure Revenue Growth Chart"
                                fill
                                style={{ objectFit: 'contain', zIndex: 1 }}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* SYSTEM FUNNEL SECTION */}
            <section className={styles.section} style={{ background: 'var(--color-charcoal-light)' }}>
                <FloatingAccents />
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                        {/* Visual Asset: Funnel */}
                        <div style={{ position: 'relative', height: '500px', width: '100%', mixBlendMode: 'lighten' }}>
                            <Image
                                src="/images/results-funnel.png"
                                alt="Conversion Optimization Funnel"
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </div>

                        <div>
                            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: 1.1, color: 'var(--color-white)' }}>
                                The Growth <br /> <span className="text-orange">Engine.</span>
                            </h2>
                            <p style={{ fontSize: '1.1rem', color: 'var(--color-grey-text)', marginBottom: '2rem', lineHeight: 1.6 }}>
                                Traffic is vanity. Sales are sanity. We build end-to-end funnels that capture attention, nurture trust, and automatically convert leads into high-ticket sales.
                            </p>
                            <div className={styles.card} style={{ border: 'none', background: 'transparent', padding: 0 }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                                    <div>
                                        <h3 style={{ fontSize: '2.5rem', color: 'var(--color-white)', fontWeight: 'bold' }}>24/7</h3>
                                        <p style={{ color: 'var(--color-grey-text)' }}>Automated Sales</p>
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '2.5rem', color: 'var(--color-white)', fontWeight: 'bold' }}>30%</h3>
                                        <p style={{ color: 'var(--color-grey-text)' }}>Higher Conversion</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Value />

            {/* EXPECTED OUTCOMES GRID */}
            <div style={{ padding: '100px 0' }}>
                <div className="container">
                    <h2 style={{ fontSize: '3rem', marginBottom: '4rem', textAlign: 'center' }}>Expected Measures</h2>

                    <div className={styles.grid} style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                        <div className={styles.card}>
                            <h3 style={{ fontSize: '3.5rem', color: 'var(--color-orange-primary)', marginBottom: '0.5rem', fontWeight: '800' }}>90+</h3>
                            <p style={{ color: 'var(--color-white)', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '1rem' }}>Performance Score</p>
                            <p className={styles.cardDesc}>
                                Google PageSpeed metrics that boost SEO and user retention. Fast sites rank better and sell more.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <h3 style={{ fontSize: '3.5rem', color: 'var(--color-orange-primary)', marginBottom: '0.5rem', fontWeight: '800' }}>2x</h3>
                            <p style={{ color: 'var(--color-white)', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '1rem' }}>Conversion Rate</p>
                            <p className={styles.cardDesc}>
                                Clearer messaging, psychological triggers, and faster loads lead to more immediate action.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <h3 style={{ fontSize: '3.5rem', color: 'var(--color-orange-primary)', marginBottom: '0.5rem', fontWeight: '800' }}>100%</h3>
                            <p style={{ color: 'var(--color-white)', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '1rem' }}>Ownership</p>
                            <p className={styles.cardDesc}>
                                You own the code, the assets, and the system. No monthly platform lock-ins. You control your destiny.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <CTA />
        </main>
    );
}
