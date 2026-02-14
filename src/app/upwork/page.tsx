import Image from 'next/image';
// Link import removed
import CTA from '@/components/sections/CTA';
import UpworkProof from '@/components/sections/UpworkProof';
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
                                Start winning on <br />
                                <span className="text-orange">Upwork.</span>
                            </h1>
                            <p className={styles.heroDesc}>
                                New freelancer? We optimize your Upwork profile so clients understand you fast — then we guide you on proposals and bidding to start getting orders.
                            </p>
                            <MagneticButton href={`https://wa.me/923238756050?text=${encodeURIComponent(
                                'Hi Synced! I want a free Upwork audit.\n\nMy niche: \nMy current profile link (if any): \nMy goal: '
                            )}`}>
                                Get a Free Audit
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

            {/* Proof */}
            <UpworkProof />

            <CTA />
        </main>
    );
}
