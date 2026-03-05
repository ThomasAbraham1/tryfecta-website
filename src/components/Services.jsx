import { img } from '../utils/imageUrl';

const pillars = [
    {
        image: 'https://images.unsplash.com/photo-1507209696998-3c532be9b2b5?auto=format&fit=crop&w=800&q=80',
        title: 'Human Resources Management',
        desc: 'Strategic and operational HR services that support workforce growth and regulatory compliance.',
        bullets: [
            'Talent acquisition and structured onboarding programs',
            'HR policy development and regulatory compliance',
            'Employee lifecycle management and documentation',
            'Performance management frameworks and appraisal systems',
            'Workforce engagement and retention strategies',
        ],
    },
    {
        image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
        title: 'Payroll & Statutory Compliance',
        desc: 'Accurate, timely, and compliant payroll operations supported by regulatory expertise.',
        bullets: [
            'End-to-end payroll processing and salary administration',
            'Statutory deductions and filings (PF, ESI, TDS)',
            'Payroll reporting and management dashboards',
            'Regulatory compliance monitoring and documentation control',
            'Coordination with finance and audit teams',
        ],
    },
    {
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
        title: 'Accounting & Financial Management',
        desc: 'Financial clarity that supports decision-making and sustainable growth.',
        bullets: [
            'Bookkeeping and general ledger management',
            'Accounts payable and receivable administration',
            'Financial reporting, budgeting, and variance analysis',
            'Audit preparation and tax accounting support',
            'Financial documentation and compliance oversight',
        ],
    },
    {
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
        title: 'IT & Digital Infrastructure Support',
        desc: 'Ensuring a secure, stable, and scalable technology environment aligned with operational requirements.',
        bullets: [
            'IT infrastructure and cloud environment management',
            'Cybersecurity protocols and risk mitigation',
            'End-user support and helpdesk services',
            'System monitoring and performance optimization',
            'Data protection and backup management',
        ],
    },
    {
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80',
        title: 'Commercial & Business Operations Support',
        desc: 'Supporting day-to-day operational activities through structured commercial processes and vendor governance.',
        bullets: [
            'Vendor management and contract oversight',
            'Procurement coordination and documentation',
            'Commercial documentation and process administration',
            'Operational workflow support and reporting',
        ],
    },
    {
        image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80',
        title: 'ISO Certification & Management Systems Support',
        desc: 'Enabling organizations to establish and maintain internationally recognized management system standards.',
        bullets: [
            'ISO management system implementation (ISO 9001, 14001, 27001)',
            'Internal audit preparation and gap assessments',
            'Documentation framework and process mapping',
            'Coordination with certification bodies and external auditors',
        ],
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-white relative overflow-hidden">
            {/* Background shape from template */}
            <div className="absolute right-0 top-20 opacity-10 pointer-events-none">
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
                    {/* <a href="#contact"
                        className="px-6 py-3 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all flex items-center gap-2 flex-shrink-0">
                        All Services
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a> */}
                </div>

                {/* Service Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {pillars.map((s) => (
                        <div key={s.title}
                            className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                            {/* Card image */}
                            <div className="relative h-44 overflow-hidden bg-slate-100">
                                <img
                                    src={s.image}
                                    alt={s.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4">
                                    <h3 className="font-bold text-base text-white leading-tight">{s.title}</h3>
                                </div>
                            </div>

                            {/* Card content */}
                            <div className="p-6">
                                <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                                <div className="w-full h-px bg-gray-100 mb-4" />
                                <ul className="space-y-2">
                                    {s.bullets.map(b => (
                                        <li key={b} className="flex items-start gap-2 text-sm text-gray-600">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}

                    {/* 7th service card — Corporate Secretarial & Governance */}
                    <div className="group bg-hero-gradient rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                        <div className="relative h-44 overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80"
                                alt="Corporate Secretarial"
                                className="w-full h-full object-cover opacity-25 group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent" />
                            <div className="absolute bottom-4 left-4 right-4">
                                <h3 className="font-bold text-base text-white leading-tight">Corporate Secretarial & Governance</h3>
                            </div>
                        </div>
                        <div className="p-6">
                            <p className="text-white/65 text-sm leading-relaxed mb-4">
                                Supporting corporate governance structures and statutory compliance requirements to ensure regulatory alignment.
                            </p>
                            <div className="w-full h-px bg-white/10 mb-4" />
                            <ul className="space-y-2 mb-6">
                                {[
                                    'Maintenance of statutory registers and filings',
                                    'Annual returns and compliance documentation',
                                    'Board meeting coordination and record management',
                                    'Liaison with regulatory authorities and compliance bodies',
                                ].map(b => (
                                    <li key={b} className="flex items-start gap-2 text-sm text-white/70">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                                        {b}
                                    </li>
                                ))}
                            </ul>
                            <a href="#contact"
                                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-secondary font-bold px-5 py-2.5 rounded-xl transition-all text-sm">
                                Let's Build Together
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
