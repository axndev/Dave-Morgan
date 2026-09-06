import { TestimonialItem } from '../types';

export const PLACEHOLDER_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'placeholder-review-1',
    clientType: 'Residential Homeowner',
    serviceTag: 'Emergency Plumbing & Leak Repair',
    initials: 'R.H.',
    quote: '[Customer Review Placeholder] "Dave responded promptly when we had a major pipe leak. He quickly diagnosed the issue, explained the repair clearly, and had everything running smoothly the same afternoon. High-quality craftsmanship and very respectful of our home."',
    isPlaceholder: true,
  },
  {
    id: 'placeholder-review-2',
    clientType: 'Commercial Property Manager',
    serviceTag: 'Electrical Panel & Lighting Maintenance',
    initials: 'M.P.',
    quote: '[Customer Review Placeholder] "We rely on Dave Morgan Plumbing & Electrical for our commercial building maintenance. Reliable, straightforward communication, clean work, and always arrives as scheduled. Exactly what you look for in a dependable trade contractor."',
    isPlaceholder: true,
  },
  {
    id: 'placeholder-review-3',
    clientType: 'Residential Homeowner',
    serviceTag: 'Water Heater & Breaker Service',
    initials: 'D.B.',
    quote: '[Customer Review Placeholder] "Dave assisted us with both a water heater replacement and a circuit breaker upgrade. It was a huge relief having one trusted professional handle both plumbing and electrical needs with exceptional attention to detail."',
    isPlaceholder: true,
  },
];
