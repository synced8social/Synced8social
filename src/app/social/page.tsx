import Link from 'next/link';
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

            <CTA />
        </main>
    );
}
