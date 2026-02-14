import { StarIcon } from '../ui/StarSystem';
import styles from './Value.module.css';

export default function Value() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.textColumn}>
                        <h2>Why choose <span className="text-orange">Synced?</span></h2>

                        <ul className={styles.valueList}>
                            <li className={styles.valueItem}>
                                <div className={styles.iconBox}>
                                    <StarIcon size={20} />
                                </div>
                                <div className={styles.itemContent}>
                                    <h3>Easy to Understand</h3>
                                    <p>Clear copy, clean layout, and strong CTAs — so visitors know what you offer and what to do next.</p>
                                </div>
                            </li>

                            <li className={styles.valueItem}>
                                <div className={styles.iconBox}>
                                    <div style={{ fontWeight: 'bold' }}>⚡</div>
                                </div>
                                <div className={styles.itemContent}>
                                    <h3>Fast + SEO Ready</h3>
                                    <p>We build modern websites that load fast and follow SEO best practices.</p>
                                </div>
                            </li>

                            <li className={styles.valueItem}>
                                <div className={styles.iconBox}>
                                    <div style={{ fontWeight: 'bold' }}>🎯</div>
                                </div>
                                <div className={styles.itemContent}>
                                    <h3>Upwork Strategy for Beginners</h3>
                                    <p>We optimize your profile and guide your proposals/bidding so you can start getting orders.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.visualColumn}>
                        <div className="star-pattern" style={{ opacity: 0.5, borderRadius: 'inherit' }} />

                        {/* Abstract representation of success/speed */}
                        <div className={styles.statCard} style={{ top: '20%', left: '10%' }}>
                            <div className={styles.statNumber}>99</div>
                            <div className={styles.statLabel}>Performance Score</div>
                        </div>

                        <div className={styles.statCard} style={{ bottom: '20%', right: '10%' }}>
                            <div className={styles.statNumber}>3x</div>
                            <div className={styles.statLabel}>Conversion Uplift</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
