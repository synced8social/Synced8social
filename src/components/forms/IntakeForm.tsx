'use client';

import { useState } from 'react';
import { StarIcon } from '../ui/StarSystem';
import styles from './IntakeForm.module.css';

type FormData = {
    service: string;
    budget: string;
    description: string;
    name: string;
    email: string;
    company: string;
};

const INITIAL_DATA: FormData = {
    service: '',
    budget: '',
    description: '',
    name: '',
    email: '',
    company: ''
};

const SERVICES = [
    {
        id: 'website',
        label: 'Website',
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
        )
    },
    {
        id: 'ecommerce',
        label: 'E-commerce',
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
        )
    },
    {
        id: 'upwork',
        label: 'Upwork',
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
            </svg>
        )
    },
    {
        id: 'social',
        label: 'Social',
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
        )
    }
];

const BUDGETS = [
    { id: 'starter', label: '< $5k' },
    { id: 'growth', label: '$5k - $15k' },
    { id: 'scale', label: '$15k+' }
];

export default function IntakeForm() {
    const [step, setStep] = useState(1);
    const [data, setData] = useState<FormData>(INITIAL_DATA);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const updateData = (field: keyof FormData, value: string) => {
        setData(prev => ({ ...prev, [field]: value }));
    };

    const handleNext = () => {
        if (step < 3) setStep(prev => prev + 1);
        else handleSubmit();
    };

    const handleBack = () => {
        if (step > 1) setStep(prev => prev - 1);
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSuccess(true);
    };

    if (isSuccess) {
        return (
            <div className={styles.container} style={{ textAlign: 'center', padding: '5rem 2rem' }}>
                <div style={{ marginBottom: '2rem' }}>
                    <StarIcon size={64} className="text-orange" />
                </div>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>Received.</h2>
                <p style={{ color: 'var(--color-grey-text)', fontSize: '1.2rem', marginBottom: '2rem' }}>
                    We&apos;ve started analyzing your request. Expect a personalized roadmap in your inbox within 24 hours.
                </p>
                <button
                    onClick={() => window.location.href = '/'}
                    className={styles.backButton}
                >
                    Return Home
                </button>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.stepIndicator}>
                <span className={styles.stepTitle}>
                    {step === 1 && "Select Protocol"}
                    {step === 2 && "Define Scope"}
                    {step === 3 && "Identification"}
                </span>
                <span className={styles.stepCounter}>Step {step} / 3</span>
            </div>

            {/* STEP 1: SERVICE SELECTION */}
            {step === 1 && (
                <div>
                    <div className={styles.grid}>
                        {SERVICES.map(s => (
                            <div
                                key={s.id}
                                className={`${styles.selectionCard} ${data.service === s.id ? styles.active : ''}`}
                                onClick={() => updateData('service', s.id)}
                            >
                                <span className={styles.icon}>{s.icon}</span>
                                <h3>{s.label}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* STEP 2: DETAILS */}
            {step === 2 && (
                <div>
                    <label className={styles.label}>Estimated Investment</label>
                    <div className={styles.grid} style={{ gridTemplateColumns: 'repeat(3, 1fr)', marginBottom: '2rem' }}>
                        {BUDGETS.map(b => (
                            <div
                                key={b.id}
                                className={`${styles.selectionCard} ${data.budget === b.id ? styles.active : ''}`}
                                onClick={() => updateData('budget', b.id)}
                                style={{ padding: '1rem' }}
                            >
                                <span style={{ fontWeight: 'bold' }}>{b.label}</span>
                            </div>
                        ))}
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.label}>
                            {data.service === 'website' && "Tell us about your site needs (Features, CMS, Design Style)"}
                            {data.service === 'ecommerce' && "Tell us about your products, platform preference, and sales goals"}
                            {data.service === 'upwork' && "Link your current profile and describe your niche/skills"}
                            {data.service === 'social' && "Which platforms? (LinkedIn, X, IG) What is your content style?"}
                            {!data.service && "Tell us about the goal"}
                        </label>
                        <textarea
                            className={styles.textarea}
                            placeholder={
                                data.service === 'website' ? "e.g. We need a high-performance marketing site with CMS..." :
                                    data.service === 'ecommerce' ? "e.g. Scaling a fashion brand on Shopify..." :
                                        "We currently have X traffic but want Y..."
                            }
                            value={data.description}
                            onChange={(e) => updateData('description', e.target.value)}
                        />
                    </div>
                </div>
            )}

            {/* STEP 3: CONTACT INFO */}
            {step === 3 && (
                <div>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Your Name</label>
                        <input
                            type="text"
                            className={styles.input}
                            placeholder="John Doe"
                            value={data.name}
                            onChange={(e) => updateData('name', e.target.value)}
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Work Email</label>
                        <input
                            type="email"
                            className={styles.input}
                            placeholder="john@company.com"
                            value={data.email}
                            onChange={(e) => updateData('email', e.target.value)}
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Company / Website</label>
                        <input
                            type="text"
                            className={styles.input}
                            placeholder="company.com"
                            value={data.company}
                            onChange={(e) => updateData('company', e.target.value)}
                        />
                    </div>
                </div>
            )}

            {/* NAVIGATION */}
            <div className={styles.buttonGroup}>
                {step > 1 && (
                    <button onClick={handleBack} className={styles.backButton}>
                        Back
                    </button>
                )}
                <button
                    onClick={handleNext}
                    className={styles.nextButton}
                    disabled={
                        (step === 1 && !data.service) ||
                        (step === 2 && (!data.budget || !data.description)) ||
                        (step === 3 && (!data.name || !data.email))
                    }
                    style={{ opacity: ((step === 1 && !data.service) || (step === 2 && (!data.budget || !data.description)) || (step === 3 && (!data.name || !data.email))) ? 0.5 : 1 }}
                >
                    {step === 3 ? (isSubmitting ? 'Processing...' : 'Initialize Protocol') : 'Next Step'}
                </button>
            </div>
        </div>
    );
}
