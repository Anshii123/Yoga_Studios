export interface YogaClass {
  id: string;
  title: string;
  tagline: string;
  focus: string;
  suitableFor: string;
  experience: string;
  duration: string;
  intensity: "Gentle" | "Moderate" | "Dynamic" | "Custom";
  description: string;
  keyBenefits: string[];
  image: string;
  accentColor?: string;
}

export const CLASSES_DATA: YogaClass[] = [
  {
    id: "hatha-yoga",
    title: "Hatha Yoga",
    tagline: "Build foundational strength, improve alignment, and explore traditional postures.",
    focus: "Foundational postures, stability, and mindful anatomical alignment.",
    suitableFor: "Beginners, returning yogis, and practitioners who value a measured, intentional pace.",
    experience: "Guided, steady, and deeply grounding with ample time in each posture.",
    duration: "60 mins (sample session)",
    intensity: "Moderate",
    description:
      "A classical approach focused on holding foundational asanas with breath awareness. Hatha cultivates strength, joint mobility, and mental stillness, giving you room to refine your alignment without rushing.",
    keyBenefits: [
      "Develops postural stability and core resilience",
      "Improves joint flexibility and natural range of motion",
      "Teaches conscious diaphragmatic breathing",
      "Ideal foundation before progressing to faster flows",
    ],
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "vinyasa-flow",
    title: "Vinyasa Flow",
    tagline: "Connect breath and movement through fluid, energising sequences.",
    focus: "Dynamic breath-synchronized transitions and cardiovascular vitality.",
    suitableFor: "Practitioners seeking an energising, rhythmic movement experience with adaptive options.",
    experience: "Flowing sequences, warm energy, and creative variations tailored to your rhythm.",
    duration: "60 mins (sample session)",
    intensity: "Dynamic",
    description:
      "Every movement is linked to an inhale or exhale in this fluid, invigorating practice. You will transition smoothly through standing poses, gentle balances, and mindful stretches that build stamina and present-moment focus.",
    keyBenefits: [
      "Enhances cardiovascular endurance and physical vitality",
      "Deepens mind-body connection and coordination",
      "Encourages a state of moving meditation",
      "Variations offered for varying energy levels",
    ],
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "yin-restorative",
    title: "Yin & Restorative Yoga",
    tagline: "Slow down with supported postures, longer holds, and profound relaxation.",
    focus: "Deep connective tissue release, parasympathetic nervous system rest, and calm.",
    suitableFor: "Anyone feeling fatigued, recovering, working through desk stiffness, or craving quiet stillness.",
    experience: "Gentle, unhurried, contemplative, and deeply restful.",
    duration: "75 mins (sample session)",
    intensity: "Gentle",
    description:
      "A slower, meditative practice where floor postures are held comfortably for 3 to 5 minutes with the assistance of cushions, blocks, and blankets. Yin encourages deep relaxation, easing muscular tension and mental chatter.",
    keyBenefits: [
      "Releases deep tension in hips, spine, and lower back",
      "Activates the soothing parasympathetic rest response",
      "Increases natural circulation and joint hydration",
      "Cultivates patience, surrender, and emotional clarity",
    ],
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "guided-meditation",
    title: "Guided Meditation & Pranayama",
    tagline: "Explore conscious breathing, open attention, and accessible mindfulness.",
    focus: "Pranayama breath regulation, mental spaciousness, and seated awareness.",
    suitableFor: "Beginners, busy professionals, and regular meditators seeking community practice.",
    experience: "Accessible, comforting guided sessions without esoteric dogma.",
    duration: "45 mins (sample session)",
    intensity: "Gentle",
    description:
      "A tranquil seated session dedicated to breath techniques (pranayama) and guided awareness. We gently guide attention toward body sensations, breath patterns, and emotional calm, providing practical mindfulness tools for everyday life.",
    keyBenefits: [
      "Quietens racing thoughts and mental overwhelm",
      "Restores natural, unrestricted breathing patterns",
      "Improves daily focus, emotional balance, and clarity",
      "Accessible comfortable seated postures with back support",
    ],
    image: "https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "yoga-for-beginners",
    title: "Yoga for Beginners",
    tagline: "Foundational poses, breathing basics, and safe, pressure-free transitions.",
    focus: "Anatomy orientation, foundational poses, prop usage, and reassuring guidance.",
    suitableFor: "First-time practitioners and those returning after a hiatus.",
    experience: "Patient guidance, clear cues, zero judgment, and an encouraging atmosphere.",
    duration: "60 mins (sample session)",
    intensity: "Gentle",
    description:
      "Never stepped onto a yoga mat before? This welcoming class breaks down fundamental postures step-by-step. You will learn how to use blocks and straps comfortably, breathe naturally, and find variations that suit your unique body.",
    keyBenefits: [
      "Demystifies yoga terminology and posture names",
      "Teaches safe bodily alignment tailored to you",
      "Comfortable, non-intimidating small-group setting",
      "Plenty of time to ask questions and adjust",
    ],
    image: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "private-yoga-sessions",
    title: "Private Yoga Sessions",
    tagline: "One-to-one personalised guidance crafted around your body and personal goals.",
    focus: "Individual biomechanics, tailored wellness goals, and flexible scheduling.",
    suitableFor: "Those desiring dedicated attention, specific mobility goals, or discreet practice.",
    experience: "A collaborative 1-on-1 partnership with tailored posture sequences.",
    duration: "60–75 mins (by arrangement)",
    intensity: "Custom",
    description:
      "A dedicated one-on-one session where the practice is designed entirely for you. Whether you are addressing specific mobility limitations, developing a home self-practice, or seeking deep relaxation, our teachers adapt every cue to your needs.",
    keyBenefits: [
      "100% personalized focus on your individual biomechanics",
      "Flexible timing arranged around your personal schedule",
      "Safe adaptations for previous injuries or sensitivities",
      "Comprehensive consultation before your first practice",
    ],
    image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=1200&auto=format&fit=crop",
  },
];
