import Image from 'next/image';
import styles from './ResultsGrid.module.css';

export default function UpworkProof() {
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
                        <h3 className={styles.upworkTitle}>Profile Optimization</h3>
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

                        <div style={{ marginTop: '1.25rem', color: 'var(--color-grey-text)', fontSize: '0.95rem', lineHeight: 1.55, textAlign: 'left' }}>
                            <strong style={{ color: 'var(--color-white)' }}>What you get (Upwork Optimization):</strong>
                            <ul style={{ marginTop: '0.6rem', paddingLeft: '1.2rem' }}>
                                <li><strong style={{ color: 'var(--color-white)' }}>Profile rewrite</strong>: title, overview, and specialized profiles</li>
                                <li><strong style={{ color: 'var(--color-white)' }}>Portfolio upgrade</strong>: add/organize projects into clean case studies</li>
                                <li><strong style={{ color: 'var(--color-white)' }}>Proposal guidance</strong>: templates + what to write and when to send</li>
                                <li><strong style={{ color: 'var(--color-white)' }}>30‑day invite plan</strong>: daily actions to improve views, invites, and order flow</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={`${styles.number} ${styles.numberUpwork}`}>30</div>
                        <h3 className={styles.label}>How it works (30 days)</h3>
                        <div className={styles.desc} style={{ textAlign: 'left' }}>
                            <ul style={{ marginTop: '0.25rem', paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                                <li><strong>Week 1:</strong> Profile + positioning</li>
                                <li><strong>Week 2:</strong> Portfolio + case studies</li>
                                <li><strong>Week 3–4:</strong> Proposals + bidding routine</li>
                                <li><strong>Goal:</strong> Views → Invites → Orders</li>
                            </ul>

                            <div style={{ marginTop: '1rem', display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
                                <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }}>
                                    <Image
                                        src="/proof/upwork-proposal.jpg"
                                        alt="Upwork proposal insights"
                                        width={1600}
                                        height={1417}
                                        style={{ width: '100%', height: 'auto', display: 'block' }}
                                    />
                                </div>
                                <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }}>
                                    <Image
                                        src="/proof/upwork-coverletter.jpg"
                                        alt="Upwork cover letter example"
                                        width={1600}
                                        height={1132}
                                        style={{ width: '100%', height: 'auto', display: 'block' }}
                                    />
                                </div>
                            </div>

                            <p style={{ marginTop: '0.9rem', color: 'var(--color-grey-text)' }}>
                                No guarantees — just a proven system based on your niche, rate, and consistency.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
