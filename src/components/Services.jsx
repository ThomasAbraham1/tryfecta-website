import { img } from '../utils/imageUrl';

const pillars = [
    {
        image: 'https://images.unsplash.com/photo-1507209696998-3c532be9b2b5?auto=format&fit=crop&w=800&q=80',
        title: 'Human Resources Management',
        desc: 'Strategic and operational HR services that support workforce growth and regulatory compliance.',
        tags: ['Talent Acquisition', 'HR Policy Development', 'Employee Lifecycle', 'Performance Management', 'Workforce Engagement'],
    },
    {
        image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
        title: 'Payroll & Statutory Compliance',
        desc: 'Accurate, timely, and compliant payroll operations supported by regulatory expertise.',
        tags: ['End-to-End Payroll', 'PF / ESI / TDS', 'Reporting Dashboards', 'Compliance Monitoring'],
    },
    {
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
        title: 'Accounting & Financial Management',
        desc: 'Financial clarity that supports decision-making and sustainable growth.',
        tags: ['Bookkeeping / General Ledger', 'AP / AR Administration', 'Financial Reporting', 'Audit Preparation'],
    },
    {
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
        title: 'IT & Digital Infrastructure Support',
        desc: 'Ensuring a secure, stable, and scalable technology environment aligned with operational requirements.',
        tags: ['Infrastructure & Cloud', 'Cybersecurity Protocols', 'End-User Helpdesk', 'Data Protection'],
    },
    {
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80',
        title: 'Commercial & Business Operations Support',
        desc: 'Supporting day-to-day operational activities through structured commercial processes and vendor governance.',
        tags: ['Vendor Management', 'Procurement Coordination', 'Commercial Documentation', 'Workflow Support'],
    },
    {
        image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80',
        title: 'ISO Certification & Management Systems Support',
        desc: 'Enabling organizations to establish and maintain internationally recognized management system standards.',
        tags: ['ISO 9001 / 14001 / 27001', 'Internal Audit Prep', 'Documentation Framework', 'Certification Coordination'],
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
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-8 h-2 bg-primary rounded-full" />
                            <span className="text-primary font-semibold text-sm uppercase tracking-widest">What We Manage</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-black text-secondary">
                            7 Integrated Service Pillars
                        </h2>
                    </div>
                    <a href="#contact"
                        className="px-6 py-3 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all flex items-center gap-2 flex-shrink-0">
                        All Services
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>

                {/* Service Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {pillars.map((s) => (
                        <div key={s.title}
                            className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                            {/* Card image */}
                            <div className="relative h-48 overflow-hidden bg-slate-100">
                                <img
                                    src={s.image}
                                    alt={s.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <span className="text-white text-sm font-medium">Learn More →</span>
                                </div>
                            </div>

                            {/* Card content */}
                            <div className="p-6">
                                <div className="w-8 h-1 bg-primary rounded-full mb-4" />
                                <h3 className="font-bold text-xl text-secondary mb-3 group-hover:text-primary transition-colors">{s.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-5">{s.desc}</p>
                                <div className="flex flex-wrap gap-2">
                                    {s.tags.map(t => (
                                        <span key={t} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium border border-primary/15">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* 7th service card — Corporate Secretarial & Governance */}
                    <div className="group bg-hero-gradient rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                        <div className="relative h-48 overflow-hidden">
                            {/* Faceless: legal library — gavel, law books, scales */}
                            <img
                                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80"
                                alt="Corporate Secretarial"
                                className="w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 rounded-2xl bg-white/15 flex items-center justify-center">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5} className="w-8 h-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.589-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.589-1.202L5.25 4.971z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="w-8 h-1 bg-accent rounded-full mb-4" />
                            <h3 className="font-bold text-xl text-white mb-3">Corporate Secretarial & Governance</h3>
                            <p className="text-white/65 text-sm leading-relaxed mb-4">
                                Supporting corporate governance structures and statutory compliance requirements to ensure regulatory alignment.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-5">
                                {['Statutory Registers & Filings', 'Annual Returns', 'Board Meeting Coordination', 'Regulatory Liaison'].map(t => (
                                    <span key={t} className="text-xs bg-white/10 text-white/80 px-3 py-1 rounded-full font-medium border border-white/15">
                                        {t}
                                    </span>
                                ))}
                            </div>
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
