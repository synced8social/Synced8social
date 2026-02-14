import styles from './Process.module.css';
import { FloatingAccents } from '../ui/FloatingAccents';

const steps = [
    {
        num: '01',
        title: 'Audit',
        desc: 'We review what you have (or start from zero) and define the fastest path to results.'
    },
    {
        num: '02',
        title: 'Fix',
        desc: 'We improve the fundamentals: messaging, structure, and the parts that affect conversions.'
    },
    {
        num: '03',
        title: 'Build',
        desc: 'Website build or Upwork optimization — executed cleanly with best practices.'
    },
    {
        num: '04',
        title: 'Launch',
        desc: 'We ship, verify everything, and hand over a simple checklist for the next steps.'
    }
];

export default function Process() {
    return (
        <section className={styles.section} id="process">
            <div className="container">
                <h2 style={{ fontSize: '3rem', marginBottom: '4rem', color: 'var(--color-white)' }}>The <span className="text-orange">Protocol</span></h2>

                <div className={styles.protocolGrid}>
                    {steps.map((step, index) => (
                        <div key={step.num} className={styles.protocolStep}>
                            <div className={styles.numberContainer}>
                                <div className={styles.stepNumber}>{step.num}</div>
                                {/* Horizontal Line Connector (not for last item) */}
                                {index !== steps.length - 1 && (
                                    <div className={styles.connector} />
                                )}
                            </div>
                            <h3 className={styles.stepTitle}>{step.title}</h3>
                            <p className={styles.stepDesc}>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
