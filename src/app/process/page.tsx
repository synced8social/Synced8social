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
                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '4rem', alignItems: 'center' }}>
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
                        <div className={styles.heroVisual} style={{ position: 'relative', height: '400px', width: '100%', mixBlendMode: 'lighten' }}>
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'radial-gradient(circle, rgba(232, 69, 5, 0.2) 0%, transparent 70%)',
                                filter: 'blur(50px)',
                                zIndex: 0
                            }} />
                            <Image
                                src="/images/process-architecture-v3.png"
                                alt="System Architecture Diagram"
                                fill
                                style={{ objectFit: 'contain', zIndex: 1 }}
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
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                        {/* Visual Asset: Timeline */}
                        <div style={{ position: 'relative', height: '500px', width: '100%', mixBlendMode: 'lighten' }}>
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
                                No black boxes. You'll know exactly where we are, what's shipping next, and when you'll see ROI. We prioritize speed without sacrificing stability.
                            </p>
                            <div className={styles.card} style={{ border: 'none', background: 'transparent', padding: 0 }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
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
