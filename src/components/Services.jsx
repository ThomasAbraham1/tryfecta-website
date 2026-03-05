import { img } from '../utils/imageUrl';

const pillars = [
    {
        image: 'https://images.unsplash.com/photo-1507209696998-3c532be9b2b5?auto=format&fit=crop&w=800&q=80',
        title: 'Human Resources (HR)',
        desc: 'Strategic and operational HR services that support workforce growth and regulatory compliance.',
        bullets: [
            'Recruitment & onboarding',
            'HR policies & compliance',
            'Performance management frameworks',
        ],
    },
    {
        image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
        title: 'Payroll Services',
        desc: 'Accurate, timely, and compliant payroll operations supported by regulatory expertise.',
        bullets: [
            'End-to-end payroll processing',
            'Statutory deductions (PF, ESI, TDS)',
            'Payroll reporting for HQ',
        ],
    },
    {
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
        title: 'Accounting & Finance',
        desc: 'Financial clarity that supports decision-making and sustainable growth.',
        bullets: [
            'Bookkeeping & general ledger',
            'Management reporting & budgeting',
            'Audit support & tax accounting',
        ],
    },
    {
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
        title: 'IT & Digital Support',
        desc: 'Ensuring a secure, stable, and scalable technology environment aligned with operational requirements.',
        bullets: [
            'IT infrastructure & cloud solutions',
            'Cyber Security management',
            'User support & helpdesk',
        ],
    },
    {
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80',
        title: 'Commercial Services',
        desc: 'Supporting day-to-day operational activities through structured commercial processes and vendor governance.',
        bullets: [
            'Vendor Management',
            'Contract administration',
            'Procurement support',
        ],
    },
    {
        image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80',
        title: 'ISO Certification Support',
        desc: 'Comprehensive support helping align management systems with international standards.',
        bullets: [
            'Implementation (ISO 9001, 14001, 27001)',
            'Internal audits & gap analysis',
            'External audit coordination',
        ],
    },
    {
        image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
        title: 'Corporate Secretarial',
        desc: 'Managing governance and statutory compliance to keep your business legally compliant.',
        bullets: [
            'Statutory registers & annual returns',
            'Board meeting coordination',
            'Liaison with regulatory authorities',
        ],
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Subtle background shape */}
            <div className="absolute right-0 top-20 opacity-5 pointer-events-none">
                <img src={img('shape/service-bg-shape.png')} alt="" className="w-64" />
            </div>

            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="flex flex-wrap gap-6 items-end justify-between mb-14">
                    <div>
                        {/* Toggle badge — decorative, matching template design */}
                        <div className="flex items-center gap-3 mb-3">
                            <div className="flex items-center gap-1.5 bg-primary/10 border border-primary/20 rounded-full px-3 py-1">
                                <div className="relative w-7 h-4 bg-primary rounded-full flex-shrink-0">
                                    <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm" />
                                </div>
                                <span className="text-primary font-semibold text-sm uppercase tracking-widest">What We Manage</span>
                            </div>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-black text-secondary">
                            7 Integrated Service Pillars
                        </h2>
                    </div>
                </div>

                {/* Service Cards — all same design */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {pillars.map((pillar) => (
                        <div
                            key={pillar.title}
                            className="group bg-secondary rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                        >
                            {/* Card image — no gradient overlay so hover scale doesn't cause seam */}
                            <div className="relative h-52 overflow-hidden flex-shrink-0">
                                <img
                                    src={pillar.image}
                                    alt={pillar.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            {/* Card content */}
                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="font-bold text-lg text-white leading-snug mb-3">{pillar.title}</h3>
                                <p className="text-white/60 text-sm leading-relaxed mb-4">{pillar.desc}</p>
                                <div className="w-full h-px bg-white/10 mb-4" />
                                <ul className="space-y-2.5">
                                    {pillar.bullets.map(b => (
                                        <li key={b} className="flex items-start gap-2.5 text-sm text-white/75">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}

                    {/* CTA block — spans remaining 2 columns in the grid */}
                    <div className="md:col-span-1 lg:col-span-2 relative rounded-2xl bg-white border border-gray-100 overflow-hidden flex flex-col justify-center p-10 lg:p-12 shadow-sm">
                        <div className="relative z-10 max-w-xl">
                            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-semibold text-sm rounded-full uppercase tracking-widest mb-5">
                                Partner With Tryfecta
                            </span>
                            <h3 className="text-3xl lg:text-4xl font-black text-secondary mb-4 leading-tight">
                                Let's Build a Stronger<br />
                                <span className="text-accent">Corporate Foundation</span>
                            </h3>
                            <p className="text-gray-500 text-base leading-relaxed mb-8">
                                Ready to move from fragmented outsourcing to a single, integrated, accountable management model?
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a href="#contact"
                                    className="px-7 py-3.5 bg-accent hover:bg-accent-light text-secondary font-bold rounded-xl transition-all hover:scale-105 shadow-md shadow-accent/20 flex items-center gap-2 text-sm">
                                    Get In Touch
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                                <a href="tel:+1800000000"
                                    className="px-7 py-3.5 bg-accent/15 hover:bg-accent/25 text-secondary font-bold rounded-xl transition-all flex items-center gap-2 text-sm">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                    Call Us Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
