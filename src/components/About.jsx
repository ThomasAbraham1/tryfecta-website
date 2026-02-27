import { img } from '../utils/imageUrl';

// Inline SVG icons — no dependency on local PNG stubs
const CheckIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5 text-primary">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const valueProps = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        title: 'Single Point of Accountability',
        desc: 'One contract. One governance structure. One partner who owns every outcome — eliminating confusion and vendor management overhead.',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: '24/7 Operational Continuity',
        desc: 'Structured redundancy and documented processes ensure uninterrupted service delivery, even when the unexpected happens.',
    },
];

const stats = [
    {
        value: '100%',
        label: 'Company-Owned',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
            </svg>
        ),
    },
    {
        value: 'ISO',
        label: 'Certified Processes',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
            </svg>
        ),
    },
    {
        value: '7+',
        label: 'Service Pillars',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
            </svg>
        ),
    },
    {
        value: '24/7',
        label: 'Support Coverage',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
];

export default function About() {
    return (
        <section id="about" className="bg-slate-50 pt-24 pb-0 relative overflow-hidden">
            {/* Decorative line shape */}
            <div className="absolute left-0 top-0 opacity-20 pointer-events-none">
                <img src={img('shape/about-line.png')} alt="" className="max-w-xs" />
            </div>

            <div className="max-w-7xl mx-auto px-6 pb-24">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: image stack */}
                    <div className="relative">
                        <div className="rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://gramentheme.com/html/gratech/assets/images/about/about-image1.jpg"
                                alt="Tryfecta team at work"
                                className="w-full h-[480px] object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-8 -right-4 lg:-right-10 w-52 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                            <img
                                src="https://gramentheme.com/html/gratech/assets/images/about/about-image2.png"
                                alt="Team collaboration"
                                className="w-full object-cover"
                            />
                        </div>
                        <div className="absolute top-6 -left-6 bg-primary text-white rounded-2xl p-5 shadow-xl text-center">
                            <div className="text-4xl font-black leading-none">10+</div>
                            <div className="text-xs font-semibold mt-1 text-white/80 uppercase tracking-wide">Years of<br />Excellence</div>
                        </div>
                    </div>

                    {/* Right: content */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-2 bg-primary rounded-full" />
                            <span className="text-primary font-semibold text-sm uppercase tracking-widest">About Tryfecta</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-black text-secondary mb-5 leading-tight">
                            We Don't Just Outsource.
                            <br />
                            <span className="text-primary">We Own It.</span>
                        </h2>
                        <p className="text-gray-500 text-lg leading-relaxed mb-8">
                            Tryfecta Management takes <strong className="text-secondary">absolute ownership</strong> of your back-office and support functions —
                            acting as a true, seamless extension of your business. While you focus on your core activities,
                            we ensure operational excellence, compliance, and continuity through a single, integrated governance model.
                        </p>

                        {/* Feature rows */}
                        <div className="grid sm:grid-cols-2 gap-4 mb-10">
                            {valueProps.map(v => (
                                <div key={v.title} className="flex gap-4 p-5 bg-white rounded-xl border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all group">
                                    <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all text-primary">
                                        {v.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-secondary text-sm mb-1">{v.title}</h4>
                                        <p className="text-gray-400 text-xs leading-relaxed">{v.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center gap-6">
                            <a href="#contact"
                                className="px-7 py-3.5 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl transition-all hover:scale-105 shadow-lg shadow-primary/25 flex items-center gap-2">
                                Explore More
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                                    <span className="text-primary font-black text-lg">R</span>
                                </div>
                                <div>
                                    <div className="font-bold text-secondary text-sm">Raj Mehta</div>
                                    <div className="text-gray-400 text-xs">Managing Director</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Counter strip */}
            <div className="bg-hero-gradient py-14">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map(s => (
                            <div key={s.label} className="flex items-center gap-4 text-white">
                                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                                    {s.icon}
                                </div>
                                <div>
                                    <div className="text-3xl font-black">{s.value}</div>
                                    <div className="text-white/60 text-sm">{s.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
