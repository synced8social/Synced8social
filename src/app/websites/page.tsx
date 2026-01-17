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

            <ResultsGrid />

            <CTA />
        </main>
    );
}
