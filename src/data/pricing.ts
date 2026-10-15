export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  badge?: string;
  popular?: boolean;
  description: string;
  features: string[];
  ctaText: string;
  bestFor: string;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "drop-in",
    name: "Drop-In Session",
    price: "₹499",
    period: "per single class",
    description: "Ideal for travelers, newcomers, or anyone wanting to sample a class without long-term commitment.",
    features: [
      "Access to 1 group class of your choice",
      "Complimentary use of studio mats & props",
      "Herbal tea & filtered infused water",
      "Advance spot reservation required",
      "Valid for 14 days from booking",
    ],
    ctaText: "Enquire About a Class",
    bestFor: "First-time visitors & flexible schedules",
  },
  {
    id: "monthly-flow",
    name: "Monthly Flow",
    price: "₹2,999",
    period: "per calendar month",
    badge: "Most Popular",
    popular: true,
    description: "Designed for those seeking consistent weekly practice and steady wellness momentum.",
    features: [
      "Up to 12 group sessions per month (~3 classes/week)",
      "Access to Hatha, Vinyasa, & Beginner series",
      "Monthly practice planning and teacher check-ins",
      "Complimentary studio props & mat storage",
      "Flexible rebooking up to 4 hours in advance",
    ],
    ctaText: "Choose Monthly Flow",
    bestFor: "Committed regular practitioners",
  },
  {
    id: "unlimited-balance",
    name: "Unlimited Balance",
    price: "₹4,499",
    period: "per calendar month",
    badge: "Full Immersion",
    description: "Complete immersion for daily yogis, offering unconstrained access to all group classes and special circles.",
    features: [
      "Unlimited eligible group sessions (subject to booking)",
      "Full access across Hatha, Vinyasa, Yin, & Meditation",
      "Priority waitlist & booking window",
      "Invitations to monthly community circles & sound baths",
      "Guest pass for a friend each month",
    ],
    ctaText: "Choose Unlimited Balance",
    bestFor: "Daily wellness seekers & enthusiasts",
  },
  {
    id: "private-practice",
    name: "Private Practice",
    price: "Starting at ₹1,499",
    period: "per 1-on-1 session",
    description: "Tailored one-to-one instruction designed exclusively for your unique biomechanics, pace, and lifestyle.",
    features: [
      "Dedicated 60–75 min private session",
      "Personalized postural sequence & injury adaptation",
      "Custom scheduling agreed directly with teacher",
      "Detailed posture alignment notes & home guidance",
      "Private studio room with tailored acoustic ambiance",
    ],
    ctaText: "Enquire About Private Yoga",
    bestFor: "Targeted goals, rehabilitation, & focused attention",
  },
];

export interface ComparisonFeature {
  feature: string;
  dropIn: string;
  monthlyFlow: string;
  unlimitedBalance: string;
  privatePractice: string;
}

export const PLAN_COMPARISON: ComparisonFeature[] = [
  {
    feature: "Monthly Class Allocation",
    dropIn: "1 Class",
    monthlyFlow: "12 Classes",
    unlimitedBalance: "Unlimited",
    privatePractice: "1-on-1 Sessions",
  },
  {
    feature: "Styles Included",
    dropIn: "Any 1 group class",
    monthlyFlow: "Hatha, Vinyasa, Yin",
    unlimitedBalance: "All Group Classes",
    privatePractice: "Customized to you",
  },
  {
    feature: "Booking Window",
    dropIn: "Up to 48 hours",
    monthlyFlow: "7 days in advance",
    unlimitedBalance: "14 days priority",
    privatePractice: "Coordinated schedule",
  },
  {
    feature: "Mat & Prop Amenities",
    dropIn: "Included",
    monthlyFlow: "Included + Storage",
    unlimitedBalance: "Included + Dedicated locker",
    privatePractice: "Premium private props",
  },
  {
    feature: "Guest Privileges",
    dropIn: "—",
    monthlyFlow: "—",
    unlimitedBalance: "1 Guest Pass / month",
    privatePractice: "Available for couples (add-on)",
  },
  {
    feature: "Cancellation Flexibility",
    dropIn: "6 hours prior",
    monthlyFlow: "4 hours prior",
    unlimitedBalance: "2 hours prior",
    privatePractice: "12 hours prior",
  },
];

export const PRICING_FAQS = [
  {
    question: "Can I try one class before purchasing a monthly membership?",
    answer:
      "Yes, absolutely. We encourage new students to book a single Drop-In session or enquire about a trial visit. It gives you a chance to experience our space, teachers, and community before selecting a monthly tier.",
  },
  {
    question: "Do I need to book my spot in advance for group classes?",
    answer:
      "Yes. To preserve a tranquil, spacious environment and avoid overcrowding, all sessions require advance reservation via WhatsApp or studio booking. This guarantees your dedicated mat space.",
  },
  {
    question: "Can I switch between different class styles within my plan?",
    answer:
      "Yes! Both the Monthly Flow and Unlimited Balance memberships allow you to mix Hatha, Vinyasa, Yin, and Meditation sessions freely according to your energy and weekly schedule.",
  },
  {
    question: "What happens if I miss a scheduled class or fall ill?",
    answer:
      "If you cancel at least 4 hours before class time, your class credit returns immediately to your monthly account. For unexpected illness or travel, we offer medical pause options upon request.",
  },
  {
    question: "How do I arrange a Private Yoga consultation?",
    answer:
      "Click 'Enquire About Private Yoga' on this page to message our coordination team on WhatsApp. We will discuss your goals, preferred instructor, and matching calendar slots.",
  },
];
