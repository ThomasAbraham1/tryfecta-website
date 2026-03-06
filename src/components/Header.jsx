import { useState, useEffect } from 'react';
import { img } from '../utils/imageUrl';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const navLinks = [
        { label: 'Home', href: '#home' },
        { label: 'Services', href: '#services' },
        { label: 'About', href: '#about' },
        { label: 'Why Us', href: '#whyus' },
    ];

    return (
        <>
            {/* Top bar */}
            <div className="hidden lg:block bg-secondary/80 text-white py-2 text-sm border-b border-white/10">
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <div className="flex items-center gap-6">
                        <a href="mailto:info@tryfecta.com" className="flex items-center gap-2 text-white/70 hover:text-accent transition-colors">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 16">
                                <path d="M18 0H2C.9 0 0 .9 0 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V2l8 5 8-5v2z" />
                            </svg>
                            info@tryfecta.com
                        </a>
                        <a href="tel:+1800000000" className="flex items-center gap-2 text-white/70 hover:text-accent transition-colors">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            +91 99585 37774
                        </a>
                    </div>
                    {/* <div className="flex items-center gap-3">
                        {['facebook-f', 'linkedin-in', 'twitter', 'youtube'].map(s => (
                            <a key={s} href="#0" className="w-7 h-7 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors">
                                <i className={`fa-brands fa-${s} text-xs text-white`}></i>
                            </a>
                        ))}
                    </div> */}
                </div>
            </div>

            {/* Main nav */}
            <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-secondary shadow-lg shadow-black/30' : 'bg-secondary'}`}>
                <div className="max-w-7xl mx-auto px-4 lg:px-6 py-2 flex items-center justify-between">
                    <a href="#home" className="flex-shrink-0 block mt-1">
                        <img
                            src={img('logo/tryfecta.png')}
                            alt="Tryfecta Management"
                            className="h-12 lg:h-[60px] w-auto"
                        />
                    </a>

                    {/* Desktop nav */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map(l => (
                            <a key={l.label} href={l.href}
                                className="text-white/80 font-medium hover:text-white transition-colors text-sm tracking-wide">
                                {l.label}
                            </a>
                        ))}
                    </nav>

                    {/* CTA */}
                    <div className="hidden lg:flex items-center gap-4">
                        <a href="#contact"
                            className="px-5 py-2.5 bg-primary text-white rounded-lg font-semibold text-sm hover:bg-primary-dark transition-colors flex items-center gap-2">
                            Get In Touch
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>

                    {/* Mobile toggle */}
                    <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 rounded-md text-white">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {mobileOpen
                                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
                        </svg>
                    </button>
                </div>

                {/* Mobile menu */}
                {mobileOpen && (
                    <div className="lg:hidden bg-secondary border-t border-white/10 px-6 py-4 flex flex-col gap-4">
                        {navLinks.map(l => (
                            <a key={l.label} href={l.href} onClick={() => setMobileOpen(false)}
                                className="text-white/80 font-medium hover:text-white transition-colors py-1">
                                {l.label}
                            </a>
                        ))}
                        <a href="#contact"
                            className="mt-2 px-5 py-2.5 bg-primary text-white rounded-lg font-semibold text-sm text-center hover:bg-primary-dark transition-colors">
                            Get In Touch
                        </a>
                    </div>
                )}
            </header>
        </>
    );
}
