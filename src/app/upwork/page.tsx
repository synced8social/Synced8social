import Image from 'next/image';
// Link import removed
import CTA from '@/components/sections/CTA';
import { StarIcon } from '@/components/ui/StarSystem';
import { BrandPattern } from '@/components/ui/BrandPattern';
import MagneticButton from '@/components/ui/MagneticButton';
import { FloatingAccents } from '@/components/ui/FloatingAccents';
import styles from '@/styles/ServicePage.module.css';

// ... (imports remain)

export default function UpworkPage() {
    return (
        <main>
            {/* HERO */}
            <section className={styles.heroSection}>
                <BrandPattern />
                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.heroGrid}>
                        <div>
                            <h1 className={styles.heroTitle}>
                                Dominate Upwork. <br />
                                <span className="text-orange">Command Results.</span>
                            </h1>
                            <p className={styles.heroDesc}>
                                We optimize your Upwork profile into a high-ticket sales funnel. Rank higher, look premium, and convert viewers into clients automatically.
                            </p>
                            <MagneticButton href="/contact">
                                Optimize My Profile
                            </MagneticButton>
                        </div>
                        {/* Visual Asset: Profile Stats */}
                        <div className={styles.heroVisual} style={{ position: 'relative', height: '400px', width: '100%' }}>
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'radial-gradient(circle, rgba(232, 69, 5, 0.2) 0%, transparent 70%)',
                                filter: 'blur(40px)',
                                zIndex: 0
                            }} />
                            <Image
                                src="/images/profile-stats-v3.png" // Note: Next.js public folder serving
                                alt="Premium Upwork Profile Stats"
                                fill
                                style={{ objectFit: 'contain', zIndex: 1 }}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* THE SYSTEM */}
            <section className={styles.section} style={{ background: 'var(--color-charcoal-light)' }}>
                <FloatingAccents />
                <div className={`container ${styles.sectionContent}`}>
                    <h2 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '4rem', color: 'var(--color-white)' }}>The Profile <span className="text-orange">System</span></h2>

                    <div className={styles.grid} style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                        {/* Cards remain unchanged ... */}
                        {/* Step 1: Search Authority */}
                        <div className={styles.card}>
                            <div className={styles.cardIcon}>
                                <StarIcon size={32} />
                            </div>
                            <h3 className={styles.cardTitle}>Search Authority</h3>
                            <p className={styles.cardDesc}>
                                We research the exact keywords high-paying clients use and inject them into your title, bio, and skills to ensure you appear in the top 1% of search results.
                            </p>
                        </div>

                        {/* Step 2: Trust Signals */}
                        <div className={styles.card}>
                            <div className={styles.cardIcon}>
                                <StarIcon size={32} />
                            </div>
                            <h3 className={styles.cardTitle}>Trust Signals</h3>
                            <p className={styles.cardDesc}>
                                Your portfolio and case studies are re-written to focus on ROI and outcomes. We remove fluff and replace it with undeniable proof of competence.
                            </p>
                        </div>

                        {/* Step 3: Conversion Logic */}
                        <div className={styles.card}>
                            <div className={styles.cardIcon}>
                                <StarIcon size={32} />
                            </div>
                            <h3 className={styles.cardTitle}>Conversion Logic</h3>
                            <p className={styles.cardDesc}>
                                We restructure your specialized profiles to act as landing pages, guiding the client from "interested" to "invite to interview" with psychological triggers.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* PROVEN RESULTS (New Visual Section) */}
            <section className={styles.section}>
                <div className="container">
                    <div className={styles.contentGrid}>
                        {/* Visual Asset: Case Study */}
                        <div className={styles.contentVisual} style={{ borderRadius: '24px', overflow: 'hidden' }}>
                            <Image
                                src="/images/case-study-v3.png"
                                alt="Case Study Metrics"
                                fill
                                style={{
                                    objectFit: 'contain',
                                    padding: '2rem',
                                    mixBlendMode: 'lighten',
                                    maskImage: 'radial-gradient(circle, black 60%, transparent 100%)',
                                    WebkitMaskImage: 'radial-gradient(circle, black 60%, transparent 100%)'
                                }}
                            />
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: '100%',
                                padding: '1.5rem 2rem',
                                background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)'
                            }}>
                                <h4 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '0.2rem', fontWeight: '600' }}>TechFlow Systems</h4>
                                <p style={{ color: 'var(--color-orange-primary)', fontSize: '1rem', fontWeight: '500' }}>+300% Lead Volume</p>
                            </div>
                        </div>

                        <div>
                            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                                From &quot;Just Another Freelancer&quot; to &quot;Authority&quot;
                            </h2>
                            <p style={{ fontSize: '1.1rem', color: 'var(--color-grey-text)', marginBottom: '2rem', lineHeight: 1.6 }}>
                                See how we transformed a generic profile into a client-generating asset.
                                By aligning visual authority with persuasive copy, we tripled the invite rate in under 30 days.
                            </p>
                            {/* Stats Grid */}
                            <div className={styles.statsGrid}>
                                <div>
                                    <h3 style={{ fontSize: '2.5rem', color: 'var(--color-white)', fontWeight: 'bold' }}>3x</h3>
                                    <p style={{ color: 'var(--color-grey-text)' }}>Invites</p>
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '2.5rem', color: 'var(--color-white)', fontWeight: 'bold' }}>$150/hr</h3>
                                    <p style={{ color: 'var(--color-grey-text)' }}>Rate Achieved</p>
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
