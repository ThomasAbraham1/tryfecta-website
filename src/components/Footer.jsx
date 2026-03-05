const services = [
    'Human Resources', 'Payroll Services', 'Accounting & Finance',
    'IT & Digital Support', 'Commercial Services', 'ISO Certification', 'Corporate Secretarial',
];

// Inline SVG social icons — no external font dependency needed
const socialLinks = [
    {
        label: 'LinkedIn',
        href: '#0',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
        ),
    },
    {
        label: 'Facebook',
        href: '#0',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
        ),
    },
    {
        label: 'Twitter / X',
        href: '#0',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
    {
        label: 'YouTube',
        href: '#0',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
            </svg>
        ),
    },
];

export default function Footer() {
    return (
        <footer className="bg-secondary text-white">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
                    {/* Brand column */}
                    <div className="lg:col-span-1">
                        <a href="#home" className="flex-shrink-0 overflow-hidden mb-5 block" style={{ height: '48px' }}>
                            <img
                                src="/images/logo/tryfecta.png"
                                alt="Tryfecta Management"
                                style={{ height: '140px', width: 'auto', marginTop: '-46px' }}
                            />
                        </a>
                        <p className="text-white/55 text-sm leading-relaxed mb-6">
                            Company-Owned. Company-Managed. Fully Accountable.
                            Your single partner for integrated back-office excellence.
                        </p>
                        <div className="flex gap-3">
                            {socialLinks.map(s => (
                                <a key={s.label} href={s.href} aria-label={s.label}
                                    className="w-9 h-9 rounded-lg bg-white/10 hover:bg-accent hover:text-secondary flex items-center justify-center transition-all">
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-widest">Our Services</h4>
                        <ul className="space-y-2.5">
                            {services.map(s => (
                                <li key={s}>
                                    <a href="#services" className="text-white/55 hover:text-accent transition-colors text-sm flex items-center gap-2">
                                        <svg className="w-3 h-3 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                        </svg>
                                        {s}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-widest">Quick Links</h4>
                        <ul className="space-y-2.5">
                            {['Home', 'About Us', 'Why Tryfecta', 'Contact'].map(l => (
                                <li key={l}>
                                    <a href={`#${l.toLowerCase().replace(/\s+/g, '')}`}
                                        className="text-white/55 hover:text-accent transition-colors text-sm flex items-center gap-2">
                                        <svg className="w-3 h-3 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                        </svg>
                                        {l}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact info */}
                    <div>
                        <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-widest">Get In Touch</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-white/55 text-sm">
                                <span className="text-accent mt-0.5">📧</span>
                                <a href="mailto:info@tryfecta.com" className="hover:text-accent transition-colors">info@tryfecta.com</a>
                            </li>
                            <li className="flex items-start gap-3 text-white/55 text-sm">
                                <span className="text-accent mt-0.5">📞</span>
                                <a href="tel:+18000000000" className="hover:text-accent transition-colors">+1 (800) 000-0000</a>
                            </li>
                            <li className="flex items-start gap-3 text-white/55 text-sm">
                                <span className="text-accent mt-0.5">🌐</span>
                                <span>Available Globally</span>
                            </li>
                        </ul>

                        <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10">
                            <p className="text-xs text-white/50 mb-1 font-medium uppercase tracking-wider">Operating Model</p>
                            <p className="text-sm text-white font-semibold">Company-Owned. Zero Subcontracting.</p>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/40">
                    <p>© {new Date().getFullYear()} Tryfecta Management. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#0" className="hover:text-accent transition-colors">Privacy Policy</a>
                        <a href="#0" className="hover:text-accent transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
