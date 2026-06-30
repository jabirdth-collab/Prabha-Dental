export interface Treatment {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  symptoms: string[];
  benefits: string[];
  recoveryTime: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  date: string;
  treatment: string;
  review: string;
  initials: string;
}

export interface GalleryItem {
  id: string;
  category: string;
  title: string;
  description: string;
  img: string;
}

export interface StatItem {
  label: string;
  value: string;
  sub: string;
}

export interface AppointmentFormData {
  name: string;
  phone: string;
  treatment: string;
  preferredDate: string;
  preferredSession: string;
  message: string;
}
