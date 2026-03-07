import { img } from '../utils/imageUrl';

const services = [
    'Human Resources', 'Payroll Services', 'Accounting & Finance',
    'IT Systems Support', 'Cybersecurity', 'Commercial Services', 'ISO Certification',
    'Corporate Secretarial',
];



export default function Footer() {
    return (
        <footer className="bg-secondary text-white">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 mb-14">
                    {/* Brand column */}
                    <div className="lg:col-span-3">
                        <a href="#home" className="flex-shrink-0 block mb-6 -ml-2">
                            <img
                                src={img('logo/tryfecta.png')}
                                alt="Tryfecta Management"
                                className="max-w-[220px] lg:max-w-[280px] h-auto"
                            />
                        </a>
                        <p className="text-white/55 text-sm leading-relaxed mb-6 max-w-[220px] lg:max-w-[280px]">
                            Your single partner for integrated back-office excellence.
                        </p>
                    </div>

                    {/* Services */}
                    <div className="lg:col-span-5">
                        <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-widest">Our Services</h4>
                        <ul className="grid sm:grid-cols-2 gap-y-2.5 gap-x-6">
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
                    <div className="lg:col-span-2">
                        <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-widest">Quick Links</h4>
                        <ul className="space-y-2.5">
                            {['Services', 'About', 'Why Us', 'Contact'].map(l => (
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

                    <div className="lg:col-span-2">
                        <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-widest">Get In Touch</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-white/55 text-sm">
                                <span className="text-accent mt-0.5">📧</span>
                                <a href="mailto:info@tryfecta.com" className="hover:text-accent transition-colors">info@tryfecta.com</a>
                            </li>
                            <li className="flex items-start gap-3 text-white/55 text-sm">
                                <span className="text-accent mt-0.5">📞</span>
                                <a href="tel:+919958537774" className="hover:text-accent transition-colors">+91 99585 37774</a>
                            </li>
                            {/* <li className="flex items-start gap-3 text-white/55 text-sm">
                                <span className="text-accent mt-0.5">🌐</span>
                                <span>Available Globally</span>
                            </li> */}
                        </ul>
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
