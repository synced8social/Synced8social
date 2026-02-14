import { StarIcon } from '../ui/StarSystem';
import styles from './CTA.module.css';

const WHATSAPP_NUMBER = '923238756050';
const whatsappAuditLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Hi Synced! I want a free audit.\n\n1) I need: Website Development / Upwork Optimization\n2) My niche: \n3) My goal: \n4) Timeline: '
)}`;

export default function CTA() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div style={{ marginBottom: '2rem' }}>
                    <StarIcon className="text-orange" size={40} />
                </div>

                <h2 className={styles.headline}>
                    Want more <span className="text-orange">orders</span>?
                </h2>

                <p className={styles.subline}>
                    Get a free audit. We’ll tell you what to fix and what to do next — for your website or your Upwork profile.
                </p>

                <a href={whatsappAuditLink} className={styles.ctaButton}>
                    Get a Free Audit
                </a>
            </div>
        </section>
    );
}
