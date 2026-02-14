import Image from 'next/image';
import styles from './ResultsGrid.module.css';

export default function ResultsGrid() {
    return (
        <section className={styles.section} id="proof">
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}><span className="text-upwork">Upwork</span> Proof</h2>
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
                        <div className={`${styles.number} ${styles.numberUpwork}`}>100%</div>
                        <h3 className={styles.label}>Stats & Visibility</h3>
                        <p className={styles.desc}>
                            We optimize your profile so it looks premium and gets more visibility (views), more invites, and better conversions.
                            Results vary by niche, rate, and consistency — no fake guarantees.
                        </p>
                        <div
                            style={{
                                marginTop: '1rem',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                border: '1px solid rgba(255,255,255,0.08)',
                                position: 'relative',
                                width: '100%',
                                height: '420px',
                                background: 'rgba(0,0,0,0.25)'
                            }}
                        >
                            <Image
                                src="/proof/upwork-jss.png"
                                alt="Upwork stats"
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                style={{ objectFit: 'contain', objectPosition: 'center' }}
                            />
                        </div>

                        <div style={{ marginTop: '1.25rem', color: 'var(--color-grey-text)', fontSize: '0.95rem', lineHeight: 1.55 }}>
                            <strong style={{ color: 'var(--color-white)' }}>What you get (Upwork Optimization):</strong>
                            <ul style={{ marginTop: '0.6rem', paddingLeft: '1.2rem' }}>
                                <li><strong style={{ color: 'var(--color-white)' }}>Profile rewrite</strong>: title, overview, and specialized profiles</li>
                                <li><strong style={{ color: 'var(--color-white)' }}>Portfolio upgrade</strong>: we add/organize projects and convert them into clean case studies</li>
                                <li><strong style={{ color: 'var(--color-white)' }}>Proposal guidance</strong>: simple templates + what to write and when to send</li>
                                <li><strong style={{ color: 'var(--color-white)' }}>30‑day invite plan</strong>: daily actions to improve views, invites, and order flow</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={`${styles.number} ${styles.numberUpwork}`}>30</div>
                        <h3 className={styles.label}>How it works (30 days)</h3>
                        <p className={styles.desc}>
                            Week 1: profile + positioning. Week 2: portfolio + case studies. Week 3–4: proposals + bidding routine.
                            Goal: increase views → invites → orders. No guarantees, just a proven system.
                        </p>
                    </div>
                </div>

                <div className={styles.header} style={{ marginTop: '5rem' }}>
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
