import { img } from '../utils/imageUrl';

const reasons = [
    { num: '01', title: 'Integrated Governance', desc: 'One contract. One SLA. One point of contact who owns every outcome — no vendor matrix to manage.', icon: '🏛️' },
    { num: '02', title: 'Compliance-First Culture', desc: 'Statutory, regulatory, and ISO-aligned compliance built into every process — not bolted on as an afterthought.', icon: '✅' },
    { num: '03', title: 'Seamless Scalability', desc: 'Expand from one function to seven without operational disruption. Our structure scales with you, not against you.', icon: '📈' },
    { num: '04', title: 'Data Confidentiality', desc: 'Company-owned teams eliminate third-party data exposure. Your sensitive data stays within our secure, proprietary environment.', icon: '🔐' },
    { num: '05', title: 'Cross-functional Coverage', desc: 'HR, Payroll, Finance, IT — all interconnected. We eliminate the operational silos that slow businesses down.', icon: '🔄' },
    { num: '06', title: 'Continuity Assurance', desc: 'Documented processes and structured redundancy mean uninterrupted delivery — even when the unexpected happens.', icon: '♾️' },
];

export default function WhyUs() {
    return (
        <section id="whyus" className="relative py-24 overflow-hidden bg-slate-900">
            {/* Full background with dark overlay */}
            <div className="absolute inset-0 bg-secondary/95" />

            {/* Decorative shapes from template */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none">
                <img src={img('shape/choose-shape-left.png')} alt="" className="h-64" />
            </div>
            <div className="absolute right-0 top-0 opacity-15 pointer-events-none">
                <img src={img('shape/choose-shape-right.png')} alt="" className="h-52" />
            </div>

            {/* Grid pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-5">
                <svg className="w-full h-full"><defs><pattern id="grid3" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" /></pattern></defs><rect width="100%" height="100%" fill="url(#grid3)" /></svg>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <img src={img('icon/section-title.png')} alt="" className="h-4 brightness-0 invert" />
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
                            className="group p-7 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent/40 transition-all hover:-translate-y-1 relative overflow-hidden backdrop-blur-md">
                            <div className="flex items-start gap-4 mb-4 relative z-10">
                                <span className="text-2xl">{r.icon}</span>
                            </div>
                            <h4 className="font-bold text-white text-lg mb-3 group-hover:text-accent transition-colors">{r.title}</h4>
                            <p className="text-white/50 text-sm leading-relaxed">{r.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
