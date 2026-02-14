import { StarIcon } from '../ui/StarSystem';
import styles from './Services.module.css';

export default function Services() {
    return (
        <section className={styles.section} id="services">
            <div className="container">
                <div className={styles.heading}>
                    <h2>
                        What we <span className="text-orange">offer</span>
                    </h2>
                    <p>Just two services. Clear outcomes. No confusion.</p>
                </div>

                <div className={styles.servicesGrid}>
                    {/* Offer #1 */}
                    <div className={styles.mainServiceCard}>
                        <div>
                            <StarIcon className="text-orange" size={32} />
                            <h3 className={styles.serviceTitle} style={{ marginTop: '1rem' }}>
                                Website Development
                            </h3>
                            <p className={styles.serviceDescription}>
                                We build any type of website: landing pages, business sites, portfolios, eCommerce, and custom web apps.
                                Fast, clean, mobile-first, and ready to convert visitors into leads.
                            </p>
                            <ul style={{ listStyle: 'none', color: 'var(--color-grey-text)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <li>✓ Modern Next.js / React</li>
                                <li>✓ Speed + SEO best practices</li>
                                <li>✓ Clean UI, clear messaging, strong CTAs</li>
                            </ul>
                        </div>
                        <div className={styles.highlight}>
                            Offer #1 <StarIcon size={16} />
                        </div>
                    </div>

                    {/* Offer #2 */}
                    <div className={styles.secondaryServiceCard}>
                        <h3 className={styles.secondaryTitle}>Upwork Optimization (New Freelancers)</h3>
                        <p className={styles.secondaryDescription}>
                            We rewrite and position your profile so clients understand your value in seconds.
                            Then we guide you on proposals and bidding so you can start getting orders.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
