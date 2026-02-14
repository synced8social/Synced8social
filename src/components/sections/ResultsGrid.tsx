import Image from 'next/image';
import styles from './ResultsGrid.module.css';

export default function ResultsGrid() {
    return (
        <section className={styles.section} id="proof">
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}><span className="text-orange">Upwork</span> Proof</h2>
                    <p className={styles.subtitle}>
                        Proof from profile optimizations (client details hidden). Results vary by niche, pricing, and activity.
                    </p>
                </div>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <h3 className={styles.label}>Profile Optimization</h3>
                        <p className={styles.desc}>
                            Clear positioning + clean structure so clients understand your value fast.
                        </p>
                        <div style={{ marginTop: '1rem', display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
                            <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }}>
                                <Image
                                    src="/proof/upwork-profile-blurred.jpg"
                                    alt="Upwork profile (identity blurred)"
                                    width={1600}
                                    height={1206}
                                    style={{ width: '100%', height: 'auto', display: 'block' }}
                                />
                            </div>
                            <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }}>
                                <Image
                                    src="/proof/upwork-profile-2-blurred.jpg"
                                    alt="Upwork profile (identity blurred)"
                                    width={1600}
                                    height={1192}
                                    style={{ width: '100%', height: 'auto', display: 'block' }}
                                />
                            </div>
                            <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }}>
                                <Image
                                    src="/proof/upwork-profile-3-blurred.jpg"
                                    alt="Upwork profile (identity blurred)"
                                    width={1600}
                                    height={1197}
                                    style={{ width: '100%', height: 'auto', display: 'block' }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.number}>100%</div>
                        <h3 className={styles.label}>Performance Signals</h3>
                        <p className={styles.desc}>
                            We optimize what clients see first: clarity, trust, and professional presentation.
                        </p>
                        <div
                            style={{
                                marginTop: '1rem',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                border: '1px solid rgba(255,255,255,0.08)',
                                position: 'relative',
                                width: '100%',
                                height: '360px'
                            }}
                        >
                            <Image
                                src="/proof/upwork-jss.png"
                                alt="Upwork stats"
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                style={{ objectFit: 'cover', objectPosition: 'center top' }}
                            />
                        </div>

                        <div style={{ marginTop: '1rem', color: 'var(--color-grey-text)', fontSize: '0.95rem', lineHeight: 1.5 }}>
                            <strong style={{ color: 'var(--color-white)' }}>What you get:</strong>
                            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.2rem' }}>
                                <li>Profile rewrite (title, overview, specialized profiles)</li>
                                <li>Portfolio structure + case study format</li>
                                <li>Proposal & bidding guidance (beginner-friendly)</li>
                                <li>30-day action plan to increase visibility and invites</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.number}>30</div>
                        <h3 className={styles.label}>30-Day Invite Plan</h3>
                        <p className={styles.desc}>
                            No fake guarantees. We aim for more invites and better conversions — based on your niche and consistency.
                        </p>
                    </div>
                </div>

                <div className={styles.header} style={{ marginTop: '5rem' }}>
                    <h2 className={styles.title}><span className="text-orange">Website</span> Proof</h2>
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
