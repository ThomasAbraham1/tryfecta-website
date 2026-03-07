import { img } from '../utils/imageUrl';

const pillars = [
    {
        image: 'https://images.unsplash.com/photo-1507209696998-3c532be9b2b5?auto=format&fit=crop&w=800&q=80',
        title: 'Human Resources (HR)',
        desc: 'Strategic and operational HR services that support workforce growth and regulatory compliance.',
        bullets: [
            'Recruitment and onboarding',
            'HR policies and labour law compliance',
            'Employee lifecycle administration',
            'Performance management systems',
        ],
    },
    {
        image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
        title: 'Payroll Services',
        desc: 'Accurate, timely, and compliant payroll operations supported by regulatory expertise.',
        bullets: [
            'End-to-end payroll processing',
            'Statutory deductions and filings (PF, ESI, PT, TDS)',
            'Benefits, leave, and attendance integration',
            'Payroll reporting and documentation',
        ],
    },
    {
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
        title: 'Accounting & Finance',
        desc: 'Financial management that supports decision-making and sustainable growth.',
        bullets: [
            'Bookkeeping and general ledger management',
            'Financial statements and management reporting',
            'Budgeting, forecasting, and cash flow tracking',
            'Audit coordination and tax support',
        ],
    },
    {
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
        title: 'IT Systems Support',
        desc: 'Maintaining secure and stable technology infrastructure aligned with business operations.',
        bullets: [
            'IT infrastructure management',
            'End-user technical support',
            'Cloud environment administration',
            'IT governance and system monitoring',
        ],
    },
    {
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
        title: 'Cybersecurity',
        desc: 'Protecting digital infrastructure through structured security controls and continuous monitoring.',
        bullets: [
            'Risk assessments and vulnerability analysis',
            'Preventive security controls',
            'Threat monitoring and detection',
            'Incident response and compliance support',
        ],
    },
    {
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80',
        title: 'Commercial Services',
        desc: 'Supporting operational activities through structured commercial and procurement processes.',
        bullets: [
            'Vendor management and coordination',
            'Contract administration and oversight',
            'Procurement and purchasing support',
            'Commercial reporting and audit assistance',
        ],
    },
    {
        image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80',
        title: 'ISO Certification Support',
        desc: 'Helping organizations align their systems with international management standards.',
        bullets: [
            'Implementation (ISO 9001, 14001, 27001)',
            'Documentation and process manual preparation',
            'Internal audits and gap analysis',
            'Certification audit coordination',
        ],
    },
    {
        image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
        title: 'Corporate Secretarial',
        desc: 'Managing governance and statutory compliance to keep your business legally compliant.',
        bullets: [
            'Statutory registers and regulatory filings',
            'Annual returns and compliance documentation',
            'Board meeting coordination and resolutions',
            'Regulatory liaison and administrative support',
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
                            8 Integrated Service Pillars
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

                    {/* CTA block — sits naturally as the 9th item in the 3x3 grid */}
                    <div className="flex flex-col justify-center p-6 lg:p-8 rounded-2xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-6 bg-[#3B82F6] rounded-full relative flex-shrink-0">
                                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
                            </div>
                            <span className="text-[#3B82F6] font-bold text-sm">Partner with Tryfecta</span>
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-medium text-secondary mb-8 leading-snug">
                            Ready to move from fragmented outsourcing to a single, integrated, accountable management model?
                        </h3>
                        <div>
                            <a href="#contact"
                                className="inline-flex px-6 py-3 bg-[#1DD9B1] text-white font-bold rounded-lg transition-all hover:scale-105 shadow-md items-center justify-center gap-2 text-sm">
                                Get In Touch
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
