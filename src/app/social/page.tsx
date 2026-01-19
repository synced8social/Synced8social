import Image from 'next/image';
import { GrowthGraph } from '@/components/visuals/GrowthGraph';
import CTA from '@/components/sections/CTA';
import { StarIcon } from '@/components/ui/StarSystem';
import { BrandPattern } from '@/components/ui/BrandPattern';
import MagneticButton from '@/components/ui/MagneticButton';
import { FloatingAccents } from '@/components/ui/FloatingAccents';
import styles from '@/styles/ServicePage.module.css';

export default function SocialPage() {
    return (
        <main>
            {/* HERO */}
            <section className={styles.heroSection}>
                <BrandPattern />
                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.heroGrid}>
                        <div>
                            <h1 className={styles.heroTitle}>
                                Growth on <br />
                                <span className="text-orange">Autopilot.</span>
                            </h1>
                            <p className={styles.heroDesc}>
                                We handle the noise so you can handle the business. From content growth to customer support chats, we manage your brand's digital voice 24/7.
                            </p>
                            <MagneticButton href="/contact">
                                Delegate Your Social
                            </MagneticButton>
                        </div>
                        {/* Visual Asset: Growth Graph */}
                        <div className={styles.heroVisual} style={{ position: 'relative', height: '400px', width: '100%' }}>
                            <GrowthGraph />
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURES GRID */}
            <section className={styles.section}>
                <FloatingAccents />
                <div className={`container ${styles.sectionContent}`}>
                    <div className={styles.grid}>

                        {/* Feature 1: Inbound Growth */}
                        <div className={styles.card}>
                            <div className={styles.cardIcon}>
                                <StarIcon size={32} />
                            </div>
                            <h3 className={styles.cardTitle}>Inbound Growth</h3>
                            <p className={styles.cardDesc}>
                                Consistent posting schedules, community engagement, and strategic content distribution to grow your following organically.
                            </p>
                            <ul className={styles.cardList}>
                                <li>• Daily Engagement Routines</li>
                                <li>• Twitter/X & LinkedIn Growth</li>
                                <li>• Content Scheduling & Analytics</li>
                            </ul>
                        </div>

                        {/* Feature 2: Support & Operations */}
                        <div className={styles.card}>
                            <div className={styles.cardIcon}>
                                <StarIcon size={32} />
                            </div>
                            <h3 className={styles.cardTitle}>Customer Support</h3>
                            <p className={styles.cardDesc}>
                                Never miss a lead or a complaint. Our trained support agents manage your DMs and bio links to ensure every visitor is heard.
                            </p>
                            <ul className={styles.cardList}>
                                <li>• 24/7 DM Monitoring</li>
                                <li>• Lead Qualification & Handoff</li>
                                <li>• Reputation Management</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* NEW SECTION: Support Interface Visual */}
            <section className={styles.section} style={{ background: 'var(--color-charcoal-light)' }}>
                <div className="container">
                    <div className={styles.contentGrid}>
                        {/* Visual Asset: Support Interface */}
                        <div className={styles.contentVisual}>
                            <Image
                                src="/images/social-support-v3.png"
                                alt="Premium Customer Support Interface"
                                fill
                                style={{
                                    objectFit: 'contain',
                                    mixBlendMode: 'lighten',
                                    maskImage: 'radial-gradient(circle, black 60%, transparent 100%)',
                                    WebkitMaskImage: 'radial-gradient(circle, black 60%, transparent 100%)'
                                }}
                            />
                        </div>

                        <div>
                            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: 1.1, color: 'var(--color-white)' }}>
                                Real Humans, <br /> <span className="text-orange">Real Speed.</span>
                            </h2>
                            <p style={{ fontSize: '1.1rem', color: 'var(--color-grey-text)', marginBottom: '2rem', lineHeight: 1.6 }}>
                                Chatbots annoy customers. We deploy real, trained support agents who speak your brand&apos;s voice and solve problems in under 5 minutes.
                            </p>
                            <div className={styles.card} style={{ border: 'none', background: 'transparent', padding: 0 }}>
                                <div className={styles.statsGrid}>
                                    <div>
                                        <h3 style={{ fontSize: '2.5rem', color: 'var(--color-white)', fontWeight: 'bold' }}>&lt;5m</h3>
                                        <p style={{ color: 'var(--color-grey-text)' }}>Response Time</p>
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '2.5rem', color: 'var(--color-white)', fontWeight: 'bold' }}>24/7</h3>
                                        <p style={{ color: 'var(--color-grey-text)' }}>Coverage</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTA />
        </main>
    );
}
