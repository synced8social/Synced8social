import Image from 'next/image';
import CTA from '@/components/sections/CTA';
import { StarIcon } from '@/components/ui/StarSystem';
import { BrandPattern } from '@/components/ui/BrandPattern';
import MagneticButton from '@/components/ui/MagneticButton';
import { FloatingAccents } from '@/components/ui/FloatingAccents';
import styles from '@/styles/ServicePage.module.css';

export default function RealEstatePage() {
    return (
        <main>
            {/* HERO */}
            <section className={styles.heroSection}>
                <BrandPattern />
                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.heroGrid}>
                        <div>
                            <h1 className={styles.heroTitle}>
                                Listings to <br />
                                <span className="text-orange">Closings.</span>
                            </h1>
                            <p className={styles.heroDesc}>
                                Premium property platforms that capture leads before they leave. We combine stunning visual galleries with aggressive lead capture systems.
                            </p>
                            <MagneticButton href="/contact">
                                Launch Platform
                            </MagneticButton>
                        </div>
                        {/* Visual Asset: Responsive Showcase (Reused for Visual relevance) */}
                        <div className={styles.heroVisual}>
                            <Image
                                src="/images/responsive-showcase-v3.png"
                                alt="Real Estate Platform Showcase"
                                fill
                                style={{ objectFit: 'contain', mixBlendMode: 'lighten' }}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURES GRID */}
            <section className={styles.section}>
                <FloatingAccents />
                <div className={`container ${styles.sectionContent}`}>
                    <div className={styles.grid}>
                        <div className={styles.card}>
                            <StarIcon size={32} />
                            <h3 className={styles.cardTitle}>IDX Integration</h3>
                            <p className={styles.cardDesc}>
                                Seamless live MLS data feeds (Rets/Reso web api) that keep your listings automatically updated 24/7.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <StarIcon size={32} />
                            <h3 className={styles.cardTitle}>Virtual Tours</h3>
                            <p className={styles.cardDesc}>
                                Immersive 3D walkthroughs (Matterport integration) and high-res video headers that sell the dream instantly.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <StarIcon size={32} />
                            <h3 className={styles.cardTitle}>Agent Portals</h3>
                            <p className={styles.cardDesc}>
                                Dedicated dashboards for your agents to manage leads, track viewings, and close deals via CRM sync (kvCORE, Follow Up Boss).
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <CTA />
        </main>
    );
}
