import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertTriangle,
  Calendar,
  Building,
  Home,
  Wrench,
  Zap,
} from 'lucide-react';
import { QuoteFormData } from '../types';
import { ALL_SERVICES } from '../data/servicesData';

interface QuoteSectionProps {
  preselectedService?: string;
  preselectedCategory?: 'plumbing' | 'electrical';
}

export const QuoteSection: React.FC<QuoteSectionProps> = ({
  preselectedService = '',
  preselectedCategory,
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    phone: '',
    email: '',
    serviceCategory: preselectedCategory || 'plumbing',
    specificService: preselectedService || 'Emergency Plumbing',
    propertyType: 'residential',
    preferredDateTime: '',
    message: '',
    isUrgent: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');

  // Update specificService when category changes if not already set
  const handleCategoryChange = (cat: 'plumbing' | 'electrical' | 'both' | 'general') => {
    setFormData((prev) => ({
      ...prev,
      serviceCategory: cat,
      specificService:
        cat === 'electrical'
          ? 'Electrical Repairs'
          : cat === 'plumbing'
          ? 'Emergency Plumbing'
          : 'General Inquiry / Combined Service',
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = 'DM-' + Math.floor(100000 + Math.random() * 900000);
    setConfirmationCode(ref);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      serviceCategory: 'plumbing',
      specificService: 'Emergency Plumbing',
      propertyType: 'residential',
      preferredDateTime: '',
      message: '',
      isUrgent: false,
    });
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
            <span>Fast Estimates &amp; Booking</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Request a Free Quote
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Fill out the form below with your job details and Dave Morgan will get back to you promptly with an honest, transparent estimate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Details & Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-800/90 rounded-2xl p-7 border border-slate-700 shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span>Direct Contact Information</span>
              </h3>
              <p className="text-sm text-slate-300">
                Prefer to discuss your repair or project over the phone? Reach out to Dave Morgan directly.
              </p>

              {/* Contact Item: Phone */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-700/60">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-400/40 text-amber-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                    Phone
                  </span>
                  <a
                    href="tel:[PHONE NUMBER]"
                    className="text-base font-bold text-white hover:text-amber-400 transition-colors"
                  >
                    [PHONE NUMBER]
                  </a>
                  <span className="text-xs text-amber-400/90 block mt-0.5">
                    Call for immediate assistance
                  </span>
                </div>
              </div>

              {/* Contact Item: Email */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-700/60">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-400/40 text-blue-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                    Email
                  </span>
                  <a
                    href="mailto:[EMAIL ADDRESS]"
                    className="text-base font-bold text-white hover:text-blue-300 transition-colors"
                  >
                    [EMAIL ADDRESS]
                  </a>
                  <span className="text-xs text-slate-400 block mt-0.5">
                    Send blueprints, photos &amp; questions
                  </span>
                </div>
              </div>

              {/* Contact Item: Service Area */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-700/60">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                    Service Area
                  </span>
                  <span className="text-base font-bold text-white">
                    [SERVICE AREA]
                  </span>
                  <span className="text-xs text-slate-400 block mt-0.5">
                    Residential &amp; commercial properties
                  </span>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-700/60">
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 border border-purple-400/40 text-purple-400 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                    Operating Hours
                  </span>
                  <span className="text-sm font-bold text-white block">
                    Mon–Sat: [BUSINESS HOURS]
                  </span>
                  <span className="text-xs text-amber-400 font-medium block mt-0.5">
                    Emergency calls accepted 24/7
                  </span>
                </div>
              </div>
            </div>

            {/* Emergency Callout Card */}
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6 text-amber-200">
              <div className="flex items-center gap-2 font-bold text-amber-400 text-sm mb-2">
                <AlertTriangle className="w-4 h-4" />
                <span>Active Water Leak or Power Hazard?</span>
              </div>
              <p className="text-xs text-amber-200/90 leading-relaxed">
                Do not wait for form responses during an urgent flood or electrical hazard. Call{' '}
                <strong className="text-white underline">[PHONE NUMBER]</strong> right now for emergency response guidance.
              </p>
            </div>
          </div>

          {/* Right Column: Quote Request Form */}
          <div className="lg:col-span-7">
            <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-200">
              {isSubmitted ? (
                <div className="text-center py-10 space-y-6">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                      Request Received
                    </span>
                    <h3 className="text-2xl font-extrabold text-slate-900 mt-3">
                      Thank You, {formData.name}!
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto">
                      Your quote request for <strong>{formData.specificService}</strong> has been submitted. Dave Morgan will review your job details and contact you via phone or email shortly.
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 max-w-sm mx-auto text-left text-xs space-y-1.5">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Confirmation Ref:</span>
                      <span className="font-mono font-bold text-slate-800">{confirmationCode}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Phone:</span>
                      <span className="font-medium text-slate-800">{formData.phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Property:</span>
                      <span className="font-medium text-slate-800 capitalize">{formData.propertyType}</span>
                    </div>
                    {formData.preferredDateTime && (
                      <div className="flex justify-between">
                        <span className="text-slate-500">Preferred Date/Time:</span>
                        <span className="font-medium text-slate-800">{formData.preferredDateTime}</span>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={handleReset}
                    className="inline-flex items-center justify-center px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm rounded-xl transition-colors cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-extrabold text-slate-900">
                      Get Your Free Estimate
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      No obligation. Tell us about your plumbing or electrical project.
                    </p>
                  </div>

                  {/* Service Category Selector */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Trade Category *
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { id: 'plumbing', label: 'Plumbing', icon: Wrench },
                        { id: 'electrical', label: 'Electrical', icon: Zap },
                        { id: 'both', label: 'Both', icon: Building },
                        { id: 'general', label: 'General / Other', icon: Calendar },
                      ].map((cat) => {
                        const Icon = cat.icon;
                        const isSelected = formData.serviceCategory === cat.id;
                        return (
                          <button
                            key={cat.id}
                            type="button"
                            onClick={() => handleCategoryChange(cat.id as any)}
                            className={`flex items-center justify-center gap-1.5 p-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-blue-900 border-blue-900 text-white shadow-sm'
                                : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                            }`}
                          >
                            <Icon className="w-3.5 h-3.5 text-amber-400" />
                            <span>{cat.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Name, Phone, Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="quote-name"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                      >
                        Full Name *
                      </label>
                      <input
                        id="quote-name"
                        type="text"
                        required
                        placeholder="e.g. Sarah Jenkins"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="quote-phone"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                      >
                        Phone Number *
                      </label>
                      <input
                        id="quote-phone"
                        type="tel"
                        required
                        placeholder="e.g. (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="quote-email"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                      >
                        Email Address *
                      </label>
                      <input
                        id="quote-email"
                        type="email"
                        required
                        placeholder="e.g. sarah@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="quote-service-needed"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                      >
                        Service Needed *
                      </label>
                      <select
                        id="quote-service-needed"
                        value={formData.specificService}
                        onChange={(e) => setFormData({ ...formData, specificService: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm bg-white"
                      >
                        <optgroup label="Plumbing Services">
                          <option value="Emergency Plumbing">Emergency Plumbing</option>
                          <option value="Leak Detection & Repair">Leak Detection &amp; Repair</option>
                          <option value="Drain Cleaning">Drain Cleaning</option>
                          <option value="Pipe Repair & Replacement">Pipe Repair &amp; Replacement</option>
                          <option value="Faucet & Fixture Repair">Faucet &amp; Fixture Repair</option>
                          <option value="Water Heater Services">Water Heater Services</option>
                          <option value="Toilet Repair & Installation">Toilet Repair &amp; Installation</option>
                          <option value="General Plumbing Maintenance">General Plumbing Maintenance</option>
                        </optgroup>
                        <optgroup label="Electrical Services">
                          <option value="Electrical Repairs">Electrical Repairs</option>
                          <option value="Electrical Troubleshooting">Electrical Troubleshooting</option>
                          <option value="Lighting Installation">Lighting Installation</option>
                          <option value="Outlet & Switch Installation">Outlet &amp; Switch Installation</option>
                          <option value="Circuit Breaker Services">Circuit Breaker Services</option>
                          <option value="Wiring & Rewiring">Wiring &amp; Rewiring</option>
                          <option value="Electrical Panel Services">Electrical Panel Services</option>
                          <option value="General Electrical Maintenance">General Electrical Maintenance</option>
                        </optgroup>
                        <optgroup label="Other">
                          <option value="Multiple / Combined Services">Multiple / Combined Services</option>
                          <option value="Commercial Maintenance Contract">Commercial Maintenance Contract</option>
                          <option value="Other Trade Project">Other Trade Project</option>
                        </optgroup>
                      </select>
                    </div>
                  </div>

                  {/* Property Type & Preferred Date/Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Property Type
                      </label>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, propertyType: 'residential' })}
                          className={`flex-1 py-2 px-3 rounded-lg border text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer ${
                            formData.propertyType === 'residential'
                              ? 'bg-slate-900 border-slate-900 text-white'
                              : 'border-slate-200 text-slate-600 hover:bg-slate-100'
                          }`}
                        >
                          <Home className="w-3.5 h-3.5" />
                          <span>Residential</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, propertyType: 'commercial' })}
                          className={`flex-1 py-2 px-3 rounded-lg border text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer ${
                            formData.propertyType === 'commercial'
                              ? 'bg-slate-900 border-slate-900 text-white'
                              : 'border-slate-200 text-slate-600 hover:bg-slate-100'
                          }`}
                        >
                          <Building className="w-3.5 h-3.5" />
                          <span>Commercial</span>
                        </button>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="quote-datetime"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                      >
                        Preferred Date / Time
                      </label>
                      <input
                        id="quote-datetime"
                        type="text"
                        placeholder="e.g. Tuesday morning or ASAP"
                        value={formData.preferredDateTime}
                        onChange={(e) => setFormData({ ...formData, preferredDateTime: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="quote-message"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                    >
                      Message / Job Details
                    </label>
                    <textarea
                      id="quote-message"
                      rows={3}
                      placeholder="Please describe what you're experiencing or what needs to be installed..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                    />
                  </div>

                  {/* Urgent / Emergency Checkbox */}
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-amber-50/70 border border-amber-200">
                    <input
                      type="checkbox"
                      id="urgentCheck"
                      checked={formData.isUrgent}
                      onChange={(e) => setFormData({ ...formData, isUrgent: e.target.checked })}
                      className="w-4 h-4 text-amber-500 rounded border-slate-300 focus:ring-amber-400"
                    />
                    <label htmlFor="urgentCheck" className="text-xs font-medium text-slate-800 cursor-pointer">
                      <strong>This is urgent</strong> — I need same-day or priority emergency evaluation if available.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-base tracking-wide shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Request a Free Quote</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <p className="text-center text-xs text-slate-500">
                    Dave Morgan personally reviews incoming inquiries. Your contact information is kept strictly private.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
