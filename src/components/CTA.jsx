export default function CTA() {
    return (
        <section className="py-24 bg-surface">
            <div className="max-w-5xl mx-auto px-6">
                <div className="relative rounded-3xl bg-hero-gradient overflow-hidden p-12 lg:p-20 text-center">
                    {/* BG effects */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-accent/20 blur-3xl" />
                        <div className="absolute -bottom-12 -left-12 w-64 h-64 rounded-full bg-primary-light/20 blur-3xl" />
                    </div>

                    <div className="relative z-10">
                        <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent font-semibold text-sm rounded-full uppercase tracking-widest mb-6">
                            Partner With Tryfecta
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
                            Let's Build a Stronger
                            <br />
                            <span className="text-accent">Corporate Foundation</span>
                        </h2>
                        <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                            Ready to move from fragmented outsourcing to a single, integrated, accountable management model?
                            Contact us to learn how Tryfecta's company-owned structure transforms your back-office operations.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <a href="#contact"
                                className="px-8 py-4 bg-accent hover:bg-accent-light text-secondary font-bold rounded-xl transition-all hover:scale-105 shadow-lg shadow-accent/30 flex items-center gap-2">
                                Get Started Today
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                            <a href="tel:+1800000000"
                                className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold rounded-xl transition-all backdrop-blur-sm flex items-center gap-2">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                Call Us Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
