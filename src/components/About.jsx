import { img } from '../utils/imageUrl';

const valueProps = [
    {
        icon: '',
        title: 'Single Point of Accountability',
        desc: 'One contract. One governance structure. One partner who owns every outcome â€” eliminating confusion and vendor management overhead.',
    },
    {
        icon: '',
        title: '24/7 Operational Continuity',
        desc: 'Structured redundancy and documented processes ensure uninterrupted service delivery, even when the unexpected happens.',
    },
];

const stats = [
    { value: '100%', label: 'Company-Owned', icon: '' },
    { value: 'ISO', label: 'Certified Processes', icon: '' },
    { value: '7+', label: 'Service Pillars', icon: '' },
    { value: '24/7', label: 'Support Coverage', icon: '' },
];

export default function About() {
    return (
        <section id="about" className="bg-slate-50 pt-24 pb-0 relative overflow-hidden">
            {/* Decorative line shape */}
            <div className="absolute left-0 top-0 opacity-20 pointer-events-none">
                <img src={img("shape/about-line.png")} alt="" className="max-w-xs" />
            </div>

            <div className="max-w-7xl mx-auto px-6 pb-24">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: image stack */}
                    <div className="relative">
                        {/* Main large photo */}
                        <div className="rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://gramentheme.com/html/gratech/assets/images/about/about-image1.jpg"
                                alt="Tryfecta team at work"
                                className="w-full h-[480px] object-cover"
                            />
                        </div>

                        {/* Floating small image / video placeholder */}
                        <div className="absolute -bottom-8 -right-4 lg:-right-10 w-52 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                            <img
                                src="https://gramentheme.com/html/gratech/assets/images/about/about-image2.png"
                                alt="Team collaboration"
                                className="w-full object-cover"
                            />
                        </div>

                        {/* Experience badge */}
                        <div className="absolute top-6 -left-6 bg-primary text-white rounded-2xl p-5 shadow-xl text-center">
                            <div className="text-4xl font-black leading-none">10+</div>
                            <div className="text-xs font-semibold mt-1 text-white/80 uppercase tracking-wide">Years of<br />Excellence</div>
                        </div>

                        {/* Decorative circle */}
                        <div className="absolute bottom-4 left-0 opacity-10 pointer-events-none">
                            <img src={img("shape/about-circle.png")} alt="" className="w-40" />
                        </div>
                    </div>

                    {/* Right: content */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <img src={img("icon/section-title.png")} alt="" className="h-4" />
                            <span className="text-primary font-semibold text-sm uppercase tracking-widest">About Tryfecta</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-black text-secondary mb-5 leading-tight">
                            We Don't Just Outsource.
                            <br />
                            <span className="text-primary">We Own It.</span>
                        </h2>
                        <p className="text-gray-500 text-lg leading-relaxed mb-8">
                            Tryfecta Management takes <strong className="text-secondary">absolute ownership</strong> of your back-office and support functions â€”
                            acting as a true, seamless extension of your business. While you focus on your core activities,
                            we ensure operational excellence, compliance, and continuity through a single, integrated governance model.
                        </p>

                        {/* Feature rows */}
                        <div className="grid sm:grid-cols-2 gap-4 mb-10">
                            {valueProps.map(v => (
                                <div key={v.title} className="flex gap-4 p-5 bg-white rounded-xl border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all group">
                                    <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-all p-2">
                                        <img src={v.icon} alt="" className="w-full h-full object-contain" />
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
                            {/* Signature element */}
                            <div className="flex items-center gap-3">
                                <img src="https://gramentheme.com/html/gratech/assets/images/about/about-info.png"
                                    alt="Founder" className="w-12 h-12 rounded-full object-cover border-2 border-primary" />
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
                                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 p-3">
                                    <img src={s.icon} alt="" className="w-full h-full object-contain" />
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
