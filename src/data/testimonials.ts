export interface Testimonial {
  id: string;
  name: string;
  role: string;
  experienceLevel: string;
  quote: string;
  reflection: string;
}

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "t-1",
    name: "Aaditi Deshmukh",
    role: "Architect & Daily Commuter",
    experienceLevel: "Practicing for 8 months",
    quote: "I used to think yoga was about pretzel poses and flexibility. Here, I discovered it is truly about giving your nervous system permission to slow down.",
    reflection:
      "Starting as a total beginner with desk-bound back stiffness, I was nervous about entering a studio. The teachers at Aaroh welcomed me warmly and offered subtle modifications that made every pose feel natural and safe.",
  },
  {
    id: "t-2",
    name: "Vikram Sengupta",
    role: "Software Engineer & Runner",
    experienceLevel: "Practicing for 1 year",
    quote: "Finding a sustainable routine transformed my days. My mobility improved, but more importantly, my morning mind feels grounded and patient.",
    reflection:
      "Vinyasa with Rohan balanced out my distance running stiffness, while Yin on Sunday evenings became my non-negotiable mental reset. The studio space itself is so tranquil you can feel the calmness the second you walk through the doorway.",
  },
  {
    id: "t-3",
    name: "Pooja Radhakrishnan",
    role: "Educator & Parent",
    experienceLevel: "Practicing for 6 months",
    quote: "The non-judgmental atmosphere is rare. You never feel pressured to keep up; you are encouraged to listen to your body first.",
    reflection:
      "Meera's alignment guidance helped me unlearn years of poor posture habits. There is no loud music or competitive energy—just pure breath, sunlight, and genuine community support.",
  },
];
