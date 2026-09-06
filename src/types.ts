export type ServiceCategory = 'all' | 'plumbing' | 'electrical';

export interface ServiceItem {
  id: string;
  title: string;
  category: 'plumbing' | 'electrical';
  shortDesc: string;
  details: string;
  commonIssues: string[];
  iconName: string;
}

export interface QuoteFormData {
  name: string;
  phone: string;
  email: string;
  serviceCategory: 'plumbing' | 'electrical' | 'both' | 'general';
  specificService: string;
  propertyType: 'residential' | 'commercial';
  preferredDateTime: string;
  message: string;
  isUrgent: boolean;
}

export interface TestimonialItem {
  id: string;
  clientType: string;
  serviceTag: string;
  quote: string;
  initials: string;
  isPlaceholder: boolean;
}
