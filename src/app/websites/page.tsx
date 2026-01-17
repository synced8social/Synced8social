import Image from 'next/image';
import CTA from '@/components/sections/CTA';
import { StarIcon } from '@/components/ui/StarSystem';
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
                            <h1 className={styles.heroTitle}>
                                Websites that <br />
                                <span className="text-orange">Mean Business.</span>
                            </h1>
                            <p className={styles.heroDesc}>
                                We don't build brochures. We build high-performance growth engines tailored to your industry's specific revenue drivers.
                            </p>
                            <MagneticButton href="/contact">
                                Start Your Build
                            </MagneticButton>
                        </div>
                        {/* Visual Asset: Performance Dashboard */}
                        <div className={styles.heroVisual} style={{ position: 'relative', height: '400px', width: '100%' }}>
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'radial-gradient(circle, rgba(232, 69, 5, 0.2) 0%, transparent 70%)',
                                filter: 'blur(50px)',
                                zIndex: 0
                            }} />
                            <Image
                                src="/images/performance-dashboard.png"
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
                <div className={`container ${styles.sectionContent}`}>
                    <div className={styles.grid}>

                        {/* Card 1: Business / SaaS */}
                        <div className={styles.card}>
                            <div className={styles.cardIcon}>
                                <StarIcon size={32} />
                            </div>
                            <h3 className={styles.cardTitle}>Business & SaaS</h3>
                            <p className={styles.cardDesc}>
                                Built for trust and conversion. We implement clear value propositions,
                                automated demo flows, and CRM integrations to turn visitors into qualified leads.
                            </p>
                            <ul className={styles.cardList}>
                                <li>• High-Converting Landing Pages</li>
                                <li>• Hubspot / Salesforce Integration</li>
                                <li>• Instant Load Times (Core Web Vitals)</li>
                            </ul>
                        </div>

                        {/* Card 2: E-commerce */}
                        <div className={styles.card}>
                            <div className={styles.cardIcon}>
                                <StarIcon size={32} />
                            </div>
                            <h3 className={styles.cardTitle}>E-commerce</h3>
                            <p className={styles.cardDesc}>
                                Frictionless shopping experiences. We focus on speed, mobile optimization,
                                and one-click checkout flows to maximize Average Order Value.
                            </p>
                            <ul className={styles.cardList}>
                                <li>• Shopify / WooCommerce Custom builds</li>
                                <li>• Cart Abandonment Recovery Systems</li>
                                <li>• Mobile-First UX Design</li>
                            </ul>
                        </div>

                        {/* Card 3: Real Estate */}
                        <div className={styles.card}>
                            <div className={styles.cardIcon}>
                                <StarIcon size={32} />
                            </div>
                            <h3 className={styles.cardTitle}>Real Estate</h3>
                            <p className={styles.cardDesc}>
                                Capture leads before they leave. We build property showcases that load instantly
                                and capture buyer intent through strategic forms.
                            </p>
                            <ul className={styles.cardList}>
                                <li>• IDX Integration Capability</li>
                                <li>• Virtual Tour Optimization</li>
                                <li>• Lead Capture Magnets</li>
                            </ul>
                        </div>

                        {/* Card 4: Personal Brand */}
                        <div className={styles.card}>
                            <div className={styles.cardIcon}>
                                <StarIcon size={32} />
                            </div>
                            <h3 className={styles.cardTitle}>Personal Brand</h3>
                            <p className={styles.cardDesc}>
                                Authority at scale. We build platforms that position you as the expert,
                                grow your newsletter, and sell your courses or services.
                            </p>
                            <ul className={styles.cardList}>
                                <li>• Newsletter Growth Integration</li>
                                <li>• Digital Product Sales Funnels</li>
                                <li>• Media Kits & Press Pages</li>
                            </ul>
                        </div>

                    </div>
                </div>
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
                        <div style={{ position: 'relative', height: '500px', width: '100%' }}>
                            <Image
                                src="/images/responsive-showcase.png"
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
