import { useState, useEffect } from 'react';
import { img } from '../utils/imageUrl';

// Slides sourced from official Gratech demo â€” same CDN images
const slides = [
    {
        bg: 'https://gramentheme.com/html/gratech/assets/images/banner/banner-image.jpg',
        subtitle: 'Integrated Back-Office Solutions',
        title: <>Integrated Back-Office Solutions for <span className="text-accent">Scalable Business Growth</span></>,
        desc: 'Enabling organizations to operate efficiently, compliantly, and with confidence.',
    },
    {
        bg: img('banner/hero-bg-2.jpg'),
        subtitle: 'Single Point of Accountability',
        title: <>Your Business,<br />Our Accountability.<br /><span className="text-accent">No Exceptions.</span></>,
        desc: 'From HR and Payroll to IT and ISO Certification — one integrated management structure owns every outcome, every compliance requirement, every day.',
    },
    {
        bg: img('banner/hero-bg-3.jpg'),
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
        const timer = setInterval(() => setCurrent(c => (c + 1) % slides.length), 8000);
        return () => clearInterval(timer);
    }, []);

    const slide = slides[current];

    return (
        <section id="home" className="relative min-h-[70vh] lg:min-h-[75vh] overflow-hidden">
            {/* Background image with overlay */}
            {slides.map((s, i) => (
                <div key={i}
                    className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}>
                    <img src={s.bg} alt="" className="w-full h-full object-cover object-center" />
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary/85 via-secondary/70 to-secondary/20" />
                </div>
            ))}

            {/* Decorative left shape from template */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-30 pointer-events-none hidden xl:block">
                <img src={img("banner/banner-solid-left-shape.png")} alt="" className="h-[70vh] object-contain" />
            </div>
            {/* Decorative right shape */}
            <div className="absolute right-0 bottom-0 opacity-20 pointer-events-none hidden xl:block">
                <img src={img("banner/banner-shape-right.png")} alt="" className="h-[60vh] object-contain object-bottom" />
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex items-center min-h-[70vh] lg:min-h-[75vh]">
                <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 lg:py-20 w-full">
                    <div className="max-w-3xl">
                        {/* Subtitle badge */}
                        <div className={`flex items-center gap-2 mb-4 transition-all duration-700 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                            <svg width="24" height="10" viewBox="0 0 40 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="0.5" width="25.67" height="15" rx="7.5" stroke="white" />
                                <rect x="13.33" y="0" width="26.67" height="16" rx="8" fill="white" />
                            </svg>
                            <h4 className="text-white/80 font-semibold text-[11px] md:text-xs uppercase tracking-widest">{slide.subtitle}</h4>
                        </div>

                        {/* Main heading */}
                        <h1 className={`text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-4 transition-all duration-700 delay-100 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                            {slide.title}
                        </h1>

                        {/* Description */}
                        <p className={`text-white/70 text-sm md:text-base leading-relaxed max-w-xl mb-6 transition-all duration-700 delay-200 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                            {slide.desc}
                        </p>

                        {/* Anti-outsourcing strip */}
                        <div className={`flex flex-wrap gap-2 mb-10 transition-all duration-700 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            {['HR', 'Payroll', 'Finance', 'IT', 'Compliance'].map(item => (
                                <span key={item} className="bg-white/10 border border-white/20 backdrop-blur-sm text-white text-sm px-3 py-1.5 rounded-full font-medium">
                                    {item}
                                </span>
                            ))}
                        </div>

                        {/* CTAs */}
                        <div className={`flex flex-wrap gap-4 transition-all duration-700 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            <a href="#contact"
                                className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl transition-all hover:scale-105 shadow-lg shadow-primary/40 flex items-center gap-2">
                                Request a Consultation
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                            <a href="#services"
                                className="px-8 py-4 border-2 border-white/40 hover:border-white hover:bg-white/10 text-white font-bold rounded-xl transition-all">
                                Explore Our Services
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
