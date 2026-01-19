import Image from 'next/image';
import ProcessSection from '@/components/sections/Process';
import CTA from '@/components/sections/CTA';
import { BrandPattern } from '@/components/ui/BrandPattern';
import MagneticButton from '@/components/ui/MagneticButton';
// FloatingAccents removed as unused
import styles from '@/styles/ServicePage.module.css';

export default function ProcessPage() {
    return (
        <main>
            {/* HERO */}
            <section className={styles.heroSection}>
                <BrandPattern />
                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.heroGrid}>
                        <div>
                            <h1 className={styles.heroTitle}>
                                The Blueprint <br />
                                <span className="text-orange">For Scale.</span>
                            </h1>
                            <p className={styles.heroSubtitle}>
                                We don&apos;t guess. We engineer outcome-driven systems.
                            </p>
                            <p className={styles.processDescription}>We audit your current state, find the &apos;leaks&apos;, and map the exact trajectory to your goal. No fluff, just data.</p>
                            <MagneticButton href="/contact">
                                Start The Process
                            </MagneticButton>
                        </div>
                        {/* Visual Asset: System Architecture */}
                        <div className={styles.heroVisual}>
                            <Image
                                src="/images/process-architecture-v3.png"
                                alt="System Architecture Diagram"
                                fill
                                style={{ objectFit: 'contain', mixBlendMode: 'lighten' }}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* EXISTING PROCESS Steps */}
            <ProcessSection />

            {/* NEW SECTION: The Roadmap Visual */}
            <section className={styles.section} style={{ background: 'var(--color-charcoal-light)' }}>
                <div className="container">
                    <div className={styles.contentGrid}>
                        {/* Visual Asset: Timeline */}
                        <div className={styles.contentVisual} style={{ mixBlendMode: 'lighten' }}>
                            <Image
                                src="/images/process-timeline-v3.png"
                                alt="Project Workflow Timeline"
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </div>

                        <div>
                            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: 1.1, color: 'var(--color-white)' }}>
                                Transparent <br /> <span className="text-orange">Timelines.</span>
                            </h2>
                            <p style={{ fontSize: '1.1rem', color: 'var(--color-grey-text)', marginBottom: '2rem', lineHeight: 1.6 }}>
                                No black boxes. You&apos;ll know exactly where we are, what&apos;s shipping next, and when you&apos;ll see ROI. We prioritize speed without sacrificing stability.
                            </p>
                            <div className={styles.card} style={{ border: 'none', background: 'transparent', padding: 0 }}>
                                <div className={styles.statsGrid}>
                                    <div>
                                        <h3 style={{ fontSize: '2.5rem', color: 'var(--color-white)', fontWeight: 'bold' }}>14 Days</h3>
                                        <p style={{ color: 'var(--color-grey-text)' }}>Avg. Launch</p>
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '2.5rem', color: 'var(--color-white)', fontWeight: 'bold' }}>Daily</h3>
                                        <p style={{ color: 'var(--color-grey-text)' }}>Updates</p>
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
