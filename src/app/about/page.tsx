import CTA from '@/components/sections/CTA';

export default function AboutPage() {
    return (
        <>
            <div style={{ paddingTop: '120px', paddingBottom: '80px', background: 'var(--color-charcoal-light)' }}>
                <div className="container">
                    <h1 style={{ fontSize: '4rem', marginBottom: '2rem' }}>We Build <span className="text-orange">Growth Engines.</span></h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-grey-text)' }}>
                        We don&apos;t just build websites. We build <strong>growth engines</strong>.
                    </p>
                </div>
            </div>

            <div style={{ padding: '100px 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
                        <div>
                            <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>The Philosophy</h3>
                            <p style={{ color: 'var(--color-grey-text)', lineHeight: '1.6' }}>
                                Most agencies treat a website as a brochure. We treat it as software.
                                It must be fast, scalable, and connected. When your foundational digital asset
                                is synchronized with your external channels (Upwork, Social, Email), you stop leaking traffic and start converting.
                            </p>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>&quot;Good Already&quot; is the Enemy of Great.</h3>
                            <p style={{ color: 'var(--color-grey-text)', lineHeight: '1.6' }}>
                                We believe in "Product-Level Quality". No templates. No drag-and-drop bloat.
                                We write clean code (Next.js) because speed is a feature, and performance is credibility.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <CTA />
        </>
    );
}
