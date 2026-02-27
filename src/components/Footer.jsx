const services = [
    'Human Resources', 'Payroll Services', 'Accounting & Finance',
    'IT & Digital Support', 'Commercial Services', 'ISO Certification', 'Corporate Secretarial',
];

export default function Footer() {
    return (
        <footer className="bg-secondary text-white">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
                    {/* Brand column */}
                    <div className="lg:col-span-1">
                        <a href="#home" className="flex items-center gap-3 mb-5">
                            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                                <span className="text-white font-black text-lg">T</span>
                            </div>
                            <div>
                                <span className="text-xl font-black">Tryfecta</span>
                                <span className="block text-xs text-white/50 -mt-1 tracking-wider uppercase">Management</span>
                            </div>
                        </a>
                        <p className="text-white/55 text-sm leading-relaxed mb-6">
                            Company-Owned. Company-Managed. Fully Accountable.
                            Your single partner for integrated back-office excellence.
                        </p>
                        <div className="flex gap-3">
                            {['facebook-f', 'linkedin-in', 'twitter', 'youtube'].map(s => (
                                <a key={s} href="#0"
                                    className="w-9 h-9 rounded-lg bg-white/10 hover:bg-accent hover:text-secondary flex items-center justify-center text-sm transition-all">
                                    <i className={`fa-brands fa-${s}`}></i>
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
