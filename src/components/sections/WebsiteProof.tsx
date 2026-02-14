import Image from 'next/image';
import styles from './ResultsGrid.module.css';

export default function WebsiteProof() {
    return (
        <section className={styles.section} id="proof">
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}><span className="text-orange">Websites</span> Proof</h2>
                    <p className={styles.subtitle}>
                        Demo thumbnails (concepts). Replace with real client work as you collect projects.
                    </p>
                </div>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <h3 className={styles.label}>Landing Pages</h3>
                        <p className={styles.desc}>Fast, clean pages focused on one action: convert.</p>
                        <div style={{ marginTop: '1rem', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }}>
                            <Image
                                src="/proof/website-demo-landing.svg"
                                alt="Landing page demo thumbnail"
                                width={1600}
                                height={900}
                                style={{ width: '100%', height: 'auto', display: 'block' }}
                            />
                        </div>
                    </div>

                    <div className={styles.card}>
                        <h3 className={styles.label}>Business Websites</h3>
                        <p className={styles.desc}>Clear offer + trust + CTA. Easy for anyone to understand.</p>
                        <div style={{ marginTop: '1rem', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }}>
                            <Image
                                src="/proof/website-demo-business.svg"
                                alt="Business website demo thumbnail"
                                width={1600}
                                height={900}
                                style={{ width: '100%', height: 'auto', display: 'block' }}
                            />
                        </div>
                    </div>

                    <div className={styles.card}>
                        <h3 className={styles.label}>eCommerce</h3>
                        <p className={styles.desc}>Product pages designed for speed and conversions.</p>
                        <div style={{ marginTop: '1rem', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }}>
                            <Image
                                src="/proof/website-demo-ecommerce.svg"
                                alt="eCommerce website demo thumbnail"
                                width={1600}
                                height={900}
                                style={{ width: '100%', height: 'auto', display: 'block' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
