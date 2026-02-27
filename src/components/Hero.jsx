import { useState, useEffect } from 'react';

// Slides sourced from official Gratech demo — same CDN images
const slides = [
    {
        bg: 'https://gramentheme.com/html/gratech/assets/images/banner/banner-image.jpg',
        subtitle: 'Premium BPO — Fully Accountable',
        title: <>Company-Owned.<br />Company-Managed.<br /><span className="text-accent">Fully Accountable.</span></>,
        desc: 'We Don\'t Just Outsource. We Own It. One partner, one governance structure, zero subcontracting — for every back-office function your business needs.',
    },
    {
        bg: 'https://gramentheme.com/html/gratech/assets/images/banner/banner-image2.jpg',
        subtitle: 'Single Point of Accountability',
        title: <>Your Business,<br />Our Accountability.<br /><span className="text-accent">No Exceptions.</span></>,
        desc: 'From HR and Payroll to IT and ISO Certification — one integrated management structure owns every outcome, every compliance requirement, every day.',
    },
    {
        bg: 'https://gramentheme.com/html/gratech/assets/images/banner/banner-image3.jpg',
        subtitle: 'Built to Scale With You',
        title: <>Integrated Services.<br />Seamless Growth.<br /><span className="text-accent">Zero Compromise.</span></>,
        desc: 'Our company-owned model scales dynamically from startup to multinational — maintaining the same standards of compliance, confidentiality, and continuity.',
    },
];

export default function Hero() {
    const [current, setCurrent] = useState(0);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
        const timer = setInterval(() => setCurrent(c => (c + 1) % slides.length), 5500);
        return () => clearInterval(timer);
    }, []);

    const slide = slides[current];

    return (
        <section id="home" className="relative min-h-screen overflow-hidden">
            {/* Background image with overlay */}
            {slides.map((s, i) => (
                <div key={i}
                    className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}>
                    <img src={s.bg} alt="" className="w-full h-full object-cover object-center" />
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/40" />
                </div>
            ))}

            {/* Decorative left shape from template */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-30 pointer-events-none hidden xl:block">
                <img src="/images/banner/banner-solid-left-shape.png" alt="" className="h-[70vh] object-contain" />
            </div>
            {/* Decorative right shape */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none hidden xl:block">
                <img src="/images/banner/banner-shape-right.png" alt="" className="h-[60vh] object-contain" />
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex items-center min-h-screen">
                <div className="max-w-7xl mx-auto px-6 py-32 w-full">
                    <div className="max-w-3xl">
                        {/* Subtitle badge */}
                        <div className={`flex items-center gap-3 mb-6 transition-all duration-700 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                            <svg width="40" height="16" viewBox="0 0 40 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="0.5" width="25.67" height="15" rx="7.5" stroke="white" />
                                <rect x="13.33" y="0" width="26.67" height="16" rx="8" fill="white" />
                            </svg>
                            <h4 className="text-white/80 font-semibold text-sm uppercase tracking-widest">{slide.subtitle}</h4>
                        </div>

                        {/* Main heading */}
                        <h1 className={`text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight mb-6 transition-all duration-700 delay-100 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                            {slide.title}
                        </h1>

                        {/* Description */}
                        <p className={`text-white/70 text-lg leading-relaxed max-w-xl mb-8 transition-all duration-700 delay-200 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                            {slide.desc}
                        </p>

                        {/* Anti-outsourcing strip */}
                        <div className={`flex flex-wrap gap-3 mb-10 transition-all duration-700 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            {['🚫 No Fragmented Vendors', '🚫 No Subcontracting', '🚫 No Compromise'].map(item => (
                                <span key={item} className="bg-white/10 border border-white/20 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full font-medium">
                                    {item}
                                </span>
                            ))}
                        </div>

                        {/* CTAs */}
                        <div className={`flex flex-wrap gap-4 transition-all duration-700 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            <a href="#contact"
                                className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl transition-all hover:scale-105 shadow-lg shadow-primary/40 flex items-center gap-2">
                                Get Started
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                            <a href="#services"
                                className="px-8 py-4 border-2 border-white/40 hover:border-white hover:bg-white/10 text-white font-bold rounded-xl transition-all">
                                Explore Services
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Slide dots */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-10">
                {slides.map((_, i) => (
                    <button key={i} onClick={() => setCurrent(i)}
                        className={`transition-all duration-300 rounded-full ${i === current ? 'w-8 h-3 bg-primary' : 'w-3 h-3 bg-white/40 hover:bg-white/60'}`} />
                ))}
            </div>
        </section>
    );
}
