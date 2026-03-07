import { useState } from 'react';

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', company: '', services: [], message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        // Replace individual checkbox entries with a single joined string
        formData.delete('services');
        formData.append('services', form.services.join(', ') || 'None selected');
        fetch("/contact.php", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString()
        })
            .then(() => setSubmitted(true))
            .catch((error) => console.error("Form submission error:", error));
    };

    const toggleService = (s) => {
        setForm(prev => ({
            ...prev,
            services: prev.services.includes(s)
                ? prev.services.filter(x => x !== s)
                : [...prev.services, s]
        }));
    };

    const services = [
        'Human Resources', 'Payroll Services', 'Accounting & Finance',
        'IT Systems Support', 'Cybersecurity', 'Commercial Services', 'ISO Certification Support', 'Corporate Secretarial',
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
                            Let's Discuss Your Requirement
                        </h2>
                        <p className="text-gray-500 text-lg leading-relaxed mb-10">
                            Tell us your business goals and pain points — we'll identify exactly which integrated services fit your needs.
                        </p>

                        {/* Contact cards */}
                        <div className="space-y-4">
                            {[
                                { icon: '📧', label: 'Email', val: 'info@tryfecta.com', href: 'mailto:info@tryfecta.com' },
                                { icon: '📞', label: 'Phone', val: '+91 99585 37774', href: 'tel:+919958537774' },
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
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
                                        <input required type="text" name="name" placeholder="John Smith"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm bg-white"
                                            value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address *</label>
                                        <input required type="email" name="email" placeholder="john@company.com"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm bg-white"
                                            value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Company Name</label>
                                    <input type="text" name="company" placeholder="Your Company Ltd."
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm bg-white"
                                        value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Services of Interest</label>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                                        {services.map(s => {
                                            const checked = form.services.includes(s);
                                            return (
                                                <label key={s}
                                                    className={`flex items-center gap-2 p-2.5 rounded-lg border cursor-pointer transition-all select-none text-sm ${checked
                                                        ? 'border-primary bg-primary/5 text-primary font-semibold'
                                                        : 'border-gray-200 text-gray-600 hover:border-primary/40 hover:bg-gray-50'
                                                        }`}>
                                                    <span className={`w-4 h-4 rounded flex items-center justify-center flex-shrink-0 border transition-all ${checked ? 'bg-primary border-primary' : 'border-gray-300 bg-white'
                                                        }`}>
                                                        {checked && (
                                                            <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 10 10">
                                                                <path d="M1.5 5l2.5 2.5L8.5 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                        )}
                                                    </span>
                                                    {s}
                                                    <input type="checkbox" name="services" value={s} checked={checked} onChange={() => toggleService(s)} className="sr-only" />
                                                </label>
                                            );
                                        })}
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message *</label>
                                    <textarea required rows={4} name="message" placeholder="Tell us about your business needs..."
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm bg-white resize-none"
                                        value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                                </div>
                                <button type="submit"
                                    className="w-full py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl transition-all hover:scale-[1.02] shadow-lg shadow-primary/25 text-center">
                                    Send Message
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
