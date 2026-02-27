import { img } from '../utils/imageUrl';

const pillars = [
    {
        icon: '',
        image: 'https://gramentheme.com/html/gratech/assets/images/service/service-image1.jpg',
        title: 'Human Resources',
        desc: 'Full-cycle HR management â€” recruitment, onboarding, compliance, performance frameworks, and policy governance.',
        tags: ['Recruitment', 'Compliance', 'Performance'],
    },
    {
        icon: '',
        image: 'https://gramentheme.com/html/gratech/assets/images/service/service-image2.jpg',
        title: 'Payroll Services',
        desc: 'Mission-critical payroll accuracy â€” end-to-end processing, statutory deductions (PF, ESI, TDS), and HQ reporting.',
        tags: ['PF/ESI/TDS', 'Processing', 'Reporting'],
    },
    {
        icon: '',
        image: 'https://gramentheme.com/html/gratech/assets/images/service/service-image3.jpg',
        title: 'Accounting & Finance',
        desc: 'Financial foundations built right â€” bookkeeping, ledgers, management reporting, budgeting, audit support, and tax accounting.',
        tags: ['Bookkeeping', 'Audit', 'Budgeting'],
    },
    {
        icon: '',
        image: 'https://gramentheme.com/html/gratech/assets/images/service/service-image4.jpg',
        title: 'IT & Digital Support',
        desc: 'Secure, stable tech environments â€” IT infrastructure, cloud solutions, cybersecurity management, and helpdesk support.',
        tags: ['Cloud', 'Cybersecurity', 'Helpdesk'],
    },
    {
        icon: '',
        image: 'https://gramentheme.com/html/gratech/assets/images/service/service-image5.jpg',
        title: 'Commercial Services',
        desc: 'Daily operational support through vendor management, contract administration, and strategic procurement.',
        tags: ['Vendors', 'Contracts', 'Procurement'],
    },
    {
        icon: '',
        image: 'https://gramentheme.com/html/gratech/assets/images/service/service-image6.jpg',
        title: 'ISO Certification',
        desc: 'International standards alignment â€” ISO 9001, 14001, 27001 implementation, gap analysis, and audit coordination.',
        tags: ['ISO 9001', 'ISO 27001', 'Gap Analysis'],
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-white relative overflow-hidden">
            {/* Background shape from template */}
            <div className="absolute right-0 top-20 opacity-10 pointer-events-none">
                <img src={img("shape/service-bg-shape.png")} alt="" className="w-64" />
            </div>

            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="flex flex-wrap gap-6 items-end justify-between mb-14">
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <img src={img("icon/section-title.png")} alt="" className="h-4" />
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

                {/* Service Cards with images */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {pillars.map((s, i) => (
                        <div key={s.title}
                            className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                            {/* Card image */}
                            <div className="relative h-48 overflow-hidden bg-slate-100">
                                <img
                                    src={s.image}
                                    alt={s.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                {/* Overlay with icon on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <span className="text-white text-sm font-medium">Learn More â†’</span>
                                </div>
                                {/* Icon badge */}
                                <div className="absolute top-4 right-4 w-12 h-12 bg-primary rounded-xl flex items-center justify-center p-2.5 shadow-lg">
                                    <img src={s.icon} alt="" className="w-full h-full object-contain brightness-0 invert" />
                                </div>
                            </div>

                            {/* Card content */}
                            <div className="p-6">
                                {/* Decorative shape */}
                                <div className="w-8 h-1 bg-primary rounded-full mb-4" />
                                <h3 className="font-bold text-xl text-secondary mb-3 group-hover:text-primary transition-colors">{s.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-5">{s.desc}</p>
                                <div className="flex flex-wrap gap-2">
                                    {s.tags.map(t => (
                                        <span key={t} className="text-xs bg-primary/8 text-primary px-3 py-1 rounded-full font-medium border border-primary/15">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* 7th service + CTA card */}
                    <div className="group bg-hero-gradient rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                        <div className="relative h-48 overflow-hidden">
                            <img
                                src="https://gramentheme.com/html/gratech/assets/images/service/service-single-image1.jpg"
                                alt="Corporate Secretarial"
                                className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-5xl">âš–ï¸</div>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="w-8 h-1 bg-accent rounded-full mb-4" />
                            <h3 className="font-bold text-xl text-white mb-3">Corporate Secretarial</h3>
                            <p className="text-white/65 text-sm leading-relaxed mb-6">
                                Governance and legal compliance â€” statutory registers, annual returns, board coordination, regulatory liaison.
                            </p>
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
