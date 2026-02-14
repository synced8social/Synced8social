import Image from 'next/image';
import styles from './ResultsGrid.module.css';

export default function ResultsGrid() {
    return (
        <section className={styles.section} id="proof">
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Proof & <span className="text-orange">Results</span></h2>
                    <p className={styles.subtitle}>Real work. Clear outcomes. (Client details hidden where needed.)</p>
                </div>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <h3 className={styles.label}>Upwork Profile Optimization</h3>
                        <p className={styles.desc}>
                            We improve positioning, structure, and clarity so clients understand your value fast.
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
                        <h3 className={styles.label}>Job Success Score</h3>
                        <p className={styles.desc}>
                            Strong performance signals matter. We help you present your profile like a professional.
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
                                alt="Upwork job success score"
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                style={{ objectFit: 'cover', objectPosition: 'center top' }}
                            />
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.number}>100%</div>
                        <h3 className={styles.label}>You Own Everything</h3>
                        <p className={styles.desc}>
                            You own the code, assets, and setup. No lock-in. Clean handoff.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
