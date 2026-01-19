import Image from 'next/image';
import CTA from '@/components/sections/CTA';
import { StarIcon } from '@/components/ui/StarSystem';
import { BrandPattern } from '@/components/ui/BrandPattern';
import MagneticButton from '@/components/ui/MagneticButton';
import { FloatingAccents } from '@/components/ui/FloatingAccents';
import styles from '@/styles/ServicePage.module.css';

export default function EcommercePage() {
    return (
        <main>
            {/* HERO */}
            <section className={styles.heroSection}>
                <BrandPattern />
                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.heroGrid}>
                        <div>
                            <h1 className={styles.heroTitle}>
                                Storefronts that <br />
                                <span className="text-orange">Sell 24/7.</span>
                            </h1>
                            <p className={styles.heroDesc}>
                                Stop treating your store like a catalog. We build high-conversion e-commerce engines designed to maximize average order value (AOV) and lifetime value (LTV).
                            </p>
                            <MagneticButton href="/contact">
                                Build Your Store
                            </MagneticButton>
                        </div>
                        {/* Visual Asset: Revenue Logic (Reused for E-com relevance) */}
                        <div className={styles.heroVisual}>
                            <Image
                                src="/images/results-revenue.png"
                                alt="E-commerce Revenue Growth"
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
                            <h3 className={styles.cardTitle}>Frictionless Checkout</h3>
                            <p className={styles.cardDesc}>
                                One-click purchasing, automated cart recovery, and streamlined payment flows (Stripe, PayPal, Apple Pay) to reduce abandonment.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <StarIcon size={32} />
                            <h3 className={styles.cardTitle}>Global Scalability</h3>
                            <p className={styles.cardDesc}>
                                Multi-currency, multi-language, and automated tax handling via Shopify Plus or WooCommerce. Sell to anyone, anywhere.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <StarIcon size={32} />
                            <h3 className={styles.cardTitle}>Inventory Sync</h3>
                            <p className={styles.cardDesc}>
                                Real-time connection between your warehouse, website, and ad channels (Meta/Google). Never oversell again.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <CTA />
        </main>
    );
}
