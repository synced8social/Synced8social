import Link from 'next/link';
import styles from './HomeOffers.module.css';

export default function HomeOffers() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.grid}>
                    {/* Websites */}
                    <div className={styles.card}>
                        <h2 className={styles.title}>
                            Website <span className="text-orange">Development</span>
                        </h2>
                        <p className={styles.desc}>
                            Any type of website — landing pages, business sites, eCommerce, portfolios.
                            Clean design, fast load, and clear messaging.
                        </p>

                        <div className={styles.pills}>
                            <span className={styles.pill}>Next.js / React</span>
                            <span className={styles.pill}>Speed + SEO</span>
                            <span className={styles.pill}>Mobile‑first</span>
                        </div>

                        <div className={styles.actions}>
                            <Link href="/websites" className={`${styles.link} ${styles.primary}`}>Explore Websites</Link>
                            <Link href="/websites#proof" className={styles.link}>See Proof</Link>
                        </div>
                    </div>

                    {/* Upwork */}
                    <div className={`${styles.card} ${styles.cardUpwork}`}>
                        <h2 className={styles.title}>
                            Upwork <span className="text-upwork">Optimization</span>
                        </h2>
                        <p className={styles.desc}>
                            For new freelancers: we rewrite your profile, upgrade your portfolio, and give you a 30‑day plan to increase
                            views → invites → orders.
                        </p>

                        <div className={styles.pills}>
                            <span className={styles.pill}>Profile rewrite</span>
                            <span className={styles.pill}>Portfolio upgrade</span>
                            <span className={styles.pill}>Proposals + routine</span>
                        </div>

                        <div className={styles.actions}>
                            <Link href="/upwork" className={`${styles.link} ${styles.upwork}`}>Explore Upwork</Link>
                            <Link href="/upwork#proof" className={styles.link}>See Proof</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
