import { StarIcon } from '../ui/StarSystem';
import { BrandPattern } from '../ui/BrandPattern';
import MagneticButton from '../ui/MagneticButton';
import styles from './Hero.module.css';

const WHATSAPP_NUMBER = '923238756050';
const whatsappAuditLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Hi Synced! I want a free audit.\n\n1) I need: Website Development / Upwork Optimization\n2) My niche: \n3) My goal: \n4) Timeline: '
)}`;

export default function Hero() {
    return (
        <section className={styles.hero}>
            <BrandPattern />

            {/* Abstract System Visual (Orbital/Shape) */}
            <div className={styles.systemShape}>
                <div className={styles.shapeCore} />
                <div className={styles.shapeOrbit} />
            </div>

            {/* Decorative Premium Stars - Max 2-3 per strict rules */}
            <div style={{ position: 'absolute', right: '15%', top: '25%', zIndex: 1 }}>
                <StarIcon size={64} variant="glow" />
            </div>
            <div style={{ position: 'absolute', left: '10%', bottom: '20%', zIndex: 1, opacity: 0.6 }}>
                <StarIcon size={32} variant="glass" />
            </div>

            <div className="container">
                <div className={styles.content}>
                    <h1 className={styles.headline}>
                        Websites that <span className="text-orange">convert</span>.
                        <br />
                        Upwork profiles that <span className="badge-upwork">get invites</span>.
                    </h1>

                    <p className={styles.subline}>
                        Two offers only.
                        <strong> Websites</strong> for businesses + brands, and
                        <strong> Upwork optimization</strong> for new freelancers.
                        Clear profile + portfolio + a 30‑day plan to increase views → invites → orders.
                    </p>

                    <div className={styles.ctaGroup}>
                        <MagneticButton href={whatsappAuditLink}>
                            Get a Free Audit
                        </MagneticButton>
                    </div>
                </div>
            </div>
        </section>
    );
}
