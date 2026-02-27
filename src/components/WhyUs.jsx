import { img } from '../utils/imageUrl';

const reasons = [
    { num: '01', title: 'Integrated Governance', desc: 'One contract. One SLA. One point of contact who owns every outcome â€” no vendor matrix to manage.', icon: 'ðŸ›ï¸' },
    { num: '02', title: 'Compliance-First Culture', desc: 'Statutory, regulatory, and ISO-aligned compliance built into every process â€” not bolted on as an afterthought.', icon: 'âœ…' },
    { num: '03', title: 'Seamless Scalability', desc: 'Expand from one function to seven without operational disruption. Our structure scales with you, not against you.', icon: 'ðŸ“ˆ' },
    { num: '04', title: 'Data Confidentiality', desc: 'Company-owned teams eliminate third-party data exposure. Your sensitive data stays within our secure, proprietary environment.', icon: 'ðŸ”' },
    { num: '05', title: 'Cross-functional Coverage', desc: 'HR, Payroll, Finance, IT â€” all interconnected. We eliminate the operational silos that slow businesses down.', icon: 'ðŸ”„' },
    { num: '06', title: 'Continuity Assurance', desc: 'Documented processes and structured redundancy mean uninterrupted delivery â€” even when the unexpected happens.', icon: 'â™¾ï¸' },
];

export default function WhyUs() {
    return (
        <section id="whyus" className="relative py-24 overflow-hidden">
            {/* Full background image with overlay */}
            <div className="absolute inset-0">
                <img
                    src="https://gramentheme.com/html/gratech/assets/images/choose/choose-image1.png"
                    alt=""
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-secondary/92" />
            </div>

            {/* Decorative shapes from template */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none">
                <img src={img("shape/choose-shape-left.png")} alt="" className="h-64" />
            </div>
            <div className="absolute right-0 top-0 opacity-15 pointer-events-none">
                <img src={img("shape/choose-shape-right.png")} alt="" className="h-52" />
            </div>

            {/* Grid pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-5">
                <svg className="w-full h-full"><defs><pattern id="grid3" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" /></pattern></defs><rect width="100%" height="100%" fill="url(#grid3)" /></svg>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <img src={img("icon/section-title.png")} alt="" className="h-4 brightness-0 invert" />
                        <span className="text-white/60 font-semibold text-sm uppercase tracking-widest">Why Tryfecta</span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-black text-white mb-5">The Integrated Advantage</h2>
                    <p className="text-white/55 max-w-xl mx-auto text-lg">
                        Six reasons why forward-thinking businesses choose Tryfecta's company-owned model over fragmented outsourcing.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reasons.map((r) => (
                        <div key={r.num}
                            className="group p-7 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent/40 transition-all hover:-translate-y-1 relative overflow-hidden">
                            {/* Subtle shape decoration per card */}
                            <div className="absolute right-3 bottom-3 opacity-5 text-8xl font-black pointer-events-none">{r.num}</div>
                            <div className="flex items-start gap-4 mb-4">
                                <span className="text-2xl">{r.icon}</span>
                            </div>
                            <h4 className="font-bold text-white text-lg mb-3 group-hover:text-accent transition-colors">{r.title}</h4>
                            <p className="text-white/50 text-sm leading-relaxed">{r.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA strip */}
                <div className="mt-14 text-center">
                    <a href="#contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl transition-all hover:scale-105 shadow-lg shadow-primary/40">
                        Partner With Tryfecta
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
