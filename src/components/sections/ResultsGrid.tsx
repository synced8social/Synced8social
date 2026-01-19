import styles from './ResultsGrid.module.css';

export default function ResultsGrid() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Results that <span className="text-orange">Compound.</span></h2>
                    <p className={styles.subtitle}>We don't deal in vanity metrics. We deal in growth.</p>
                </div>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <h3 className={styles.label}>Performance Score</h3>
                        <p className={styles.desc}>
                            Google PageSpeed metrics that boost SEO and user retention. faster sites rank higher.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.number}>2x</div>
                        <h3 className={styles.label}>Conversion Rate</h3>
                        <p className={styles.desc}>
                            Clearer messaging and faster loads lead to more action. Don't lose leads to loading screens.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.number}>100%</div>
                        <h3 className={styles.label}>Ownership</h3>
                        <p className={styles.desc}>
                            You own the code, the assets, and the system. No lock-ins. No monthly rental fees for your own site.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
