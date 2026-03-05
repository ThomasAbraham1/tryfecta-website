import { useState } from 'react';

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const services = [
        'Human Resources', 'Payroll Services', 'Accounting & Finance',
        'IT & Digital Support', 'Commercial Services', 'ISO Certification Support', 'Corporate Secretarial',
    ];

    return (
        <section id="contact" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left info */}
                    <div>
                        <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-semibold text-sm rounded-full uppercase tracking-widest mb-5">
                            Contact Us
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-black text-secondary mb-6 leading-tight">
                            Start the Conversation
                        </h2>
                        <p className="text-gray-500 text-lg leading-relaxed mb-10">
                            Tell us about your business structure, pain points, and goals. Our team will identify exactly which integrated services can strengthen your corporate foundation.
                        </p>

                        {/* Contact cards */}
                        <div className="space-y-4">
                            {[
                                { icon: '📧', label: 'Email', val: 'info@tryfecta.com', href: 'mailto:info@tryfecta.com' },
                                { icon: '📞', label: 'Phone', val: '+1 (800) 000-0000', href: 'tel:+18000000000' },
                                { icon: '📍', label: 'Office', val: 'Available Globally', href: '#' },
                            ].map(c => (
                                <a key={c.label} href={c.href}
                                    className="flex items-center gap-4 p-5 rounded-xl border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all group">
                                    <div className="w-11 h-11 rounded-lg bg-primary/10 text-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                                        {c.icon}
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-400 font-medium">{c.label}</div>
                                        <div className="font-semibold text-secondary">{c.val}</div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right form */}
                    <div className="bg-surface rounded-2xl p-8 border border-gray-100">
                        {submitted ? (
                            <div className="text-center py-12">
                                <div className="text-5xl mb-4">✅</div>
                                <h3 className="text-2xl font-bold text-secondary mb-2">Message Received!</h3>
                                <p className="text-gray-500">Our team will get back to you within 24 hours.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <h3 className="text-xl font-bold text-secondary mb-2">Send Us a Message</h3>
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
                                        <input required type="text" placeholder="John Smith"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm bg-white"
                                            value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address *</label>
                                        <input required type="email" placeholder="john@company.com"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm bg-white"
                                            value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Company Name</label>
                                    <input type="text" placeholder="Your Company Ltd."
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm bg-white"
                                        value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Service of Interest</label>
                                    <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm bg-white text-gray-600"
                                        value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}>
                                        <option value="">Select a service...</option>
                                        {services.map(s => <option key={s} value={s}>{s}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message *</label>
                                    <textarea required rows={4} placeholder="Tell us about your business needs..."
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm bg-white resize-none"
                                        value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                                </div>
                                <button type="submit"
                                    className="w-full py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl transition-all hover:scale-[1.02] shadow-lg shadow-primary/25 flex items-center justify-center gap-2">
                                    Send Message
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
