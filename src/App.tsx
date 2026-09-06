import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { EmergencyBanner } from './components/EmergencyBanner';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { HowItWorks } from './components/HowItWorks';
import { TestimonialsSection } from './components/TestimonialsSection';
import { QuoteSection } from './components/QuoteSection';
import { Footer } from './components/Footer';
import { ServiceModal } from './components/ServiceModal';
import { MobileActionBar } from './components/MobileActionBar';
import { ServiceItem } from './types';

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [quoteServicePrefill, setQuoteServicePrefill] = useState<{
    serviceName: string;
    category: 'plumbing' | 'electrical';
  }>({
    serviceName: '',
    category: 'plumbing',
  });

  const scrollToQuote = () => {
    const quoteElement = document.getElementById('contact');
    if (quoteElement) {
      quoteElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookServiceFromModal = (
    serviceName: string,
    category: 'plumbing' | 'electrical'
  ) => {
    setQuoteServicePrefill({ serviceName, category });
    scrollToQuote();
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 pb-16 lg:pb-0">
      {/* Sticky Header */}
      <Header onOpenQuote={scrollToQuote} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenQuote={scrollToQuote} />

        {/* Services Section (Plumbing & Electrical) */}
        <ServicesSection
          onSelectService={(service) => setSelectedService(service)}
          onOpenQuote={scrollToQuote}
        />

        {/* High-Impact Emergency CTA Banner */}
        <EmergencyBanner onOpenQuote={scrollToQuote} />

        {/* About Dave Morgan & The Business */}
        <AboutSection onOpenQuote={scrollToQuote} />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* How It Works (3 Steps) */}
        <HowItWorks onOpenQuote={scrollToQuote} />

        {/* Testimonials (Structured Placeholders) */}
        <TestimonialsSection />

        {/* Free Quote & Contact Form Section */}
        <QuoteSection
          key={`${quoteServicePrefill.category}-${quoteServicePrefill.serviceName}`}
          preselectedService={quoteServicePrefill.serviceName}
          preselectedCategory={quoteServicePrefill.category}
        />
      </main>

      {/* Footer */}
      <Footer onOpenQuote={scrollToQuote} />

      {/* Service Details Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookService={handleBookServiceFromModal}
      />

      {/* Floating Bottom Quick Action Bar for Mobile Viewports */}
      <MobileActionBar onOpenQuote={scrollToQuote} />
    </div>
  );
}
