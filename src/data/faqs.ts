export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const CLASS_FAQS: FAQItem[] = [
  {
    id: "faq-experience",
    question: "Do I need prior yoga experience?",
    answer:
      "Not at all. Over 40% of our practitioners begin with zero prior background. Our 'Yoga for Beginners' and 'Hatha Yoga' classes are carefully sequenced to introduce foundational poses, breathing patterns, and safe alignment step by step.",
  },
  {
    id: "faq-bring",
    question: "What should I bring with me?",
    answer:
      "We provide premium eco-friendly cork mats, organic cotton bolsters, blocks, and straps at the studio. Simply bring a reusable water bottle and an open mind. If you prefer using your own personal mat, you are always welcome to bring it.",
  },
  {
    id: "faq-wear",
    question: "What should I wear to class?",
    answer:
      "Wear breathable, comfortable clothing that allows you to bend and stretch freely—such as leggings, joggers, and a fitted t-shirt or tank top. We practice barefoot on mats, and shoes are left at the reception cubbies.",
  },
  {
    id: "faq-arrive",
    question: "How early should I arrive?",
    answer:
      "We suggest arriving 10 to 15 minutes before the scheduled start time. This gives you ample time to check in, stow your belongings, sip some herbal tea, and settle peacefully onto your mat before class begins.",
  },
  {
    id: "faq-flexibility",
    question: "Can I join if I am not flexible?",
    answer:
      "Saying you are too stiff for yoga is like saying you are too dirty to take a bath! Yoga is where you develop flexibility, ease, and functional range over time. We emphasize listening to your body and using supportive props rather than forcing extreme shapes.",
  },
  {
    id: "faq-choose",
    question: "How do I choose which class is right for me?",
    answer:
      "If you want foundational posture work, choose Hatha. If you crave dynamic, breath-linked movement and heat, choose Vinyasa Flow. If you seek calm, gentle stretching and deep stress release, choose Yin & Restorative. You can also chat with us anytime on WhatsApp and we will guide you.",
  },
];
