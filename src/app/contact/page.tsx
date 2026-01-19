import IntakeForm from '@/components/forms/IntakeForm';
import { BrandPattern } from '@/components/ui/BrandPattern';
// import styles from '@/styles/Contact.module.css'; // Removing unused import } from '@/components/ui/FloatingAccents';
import styles from '@/styles/ServicePage.module.css';

export default function Contact() {
    return (
        <main style={{ minHeight: '100vh', background: 'var(--color-charcoal)' }}>
            <BrandPattern />
            {/* Ambient Background */}
            <div style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '1000px',
                height: '1000px',
                background: 'radial-gradient(circle, rgba(232, 69, 5, 0.05) 0%, transparent 70%)',
                filter: 'blur(100px)',
                zIndex: 0,
                pointerEvents: 'none',
            }} />



            <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '120px', paddingBottom: '80px' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', lineHeight: 1.1 }}>
                        Initiate <span className="text-orange">Growth Protocol.</span>
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-grey-text)' }}>
                        Tell us your objective. We&apos;ll engineer the system to get you there.
                    </p>
                </div>

                <IntakeForm />
            </div>
        </main>
    );
}
