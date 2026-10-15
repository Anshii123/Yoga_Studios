export interface Instructor {
  id: string;
  name: string;
  specialty: string;
  role: string;
  shortBio: string;
  fullBio: string;
  teachingPhilosophy: string;
  classesTaught: string[];
  image: string;
  quote: string;
}

export const INSTRUCTORS_DATA: Instructor[] = [
  {
    id: "meera-kapoor",
    name: "Meera Kapoor",
    specialty: "Hatha Yoga & Alignment",
    role: "Senior Hatha & Alignment Instructor",
    shortBio:
      "A calm, detail-oriented teaching style focused on foundational movement, comfortable alignment, and helping students approach their practice at their own pace.",
    fullBio:
      "Meera's classes emphasize intentional, unhurried exploration. She believes yoga is not about attaining intricate shapes, but about discovering stability, body confidence, and quiet joy in everyday movement. Her approach welcomes beginners with clear anatomical cues and tailored prop adjustments.",
    teachingPhilosophy:
      "“Alignment is not rigid geometry; it is the art of finding ease and dignity inside your own body.”",
    classesTaught: ["Hatha Yoga", "Yoga for Beginners", "Private Yoga Sessions"],
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
    quote: "Move with intention. Your body already knows the way when you quiet the rush.",
  },
  {
    id: "rohan-malhotra",
    name: "Rohan Malhotra",
    specialty: "Vinyasa Flow & Dynamic Movement",
    role: "Vinyasa & Mobility Lead",
    shortBio:
      "A movement-focused teaching style that connects breath and sequences while offering accessible variations for different experience levels.",
    fullBio:
      "Rohan brings a grounded energy to fluid vinyasa practices. Drawing on a lifelong fascination with functional mobility and conscious breath, his classes invite practitioners to explore their strength with curiosity rather than force. He offers intelligent progressions so everyone in the room feels supported.",
    teachingPhilosophy:
      "“When breath leads, movement becomes effortless. We practice not to exhaust ourselves, but to replenish our vitality.”",
    classesTaught: ["Vinyasa Flow", "Private Yoga Sessions"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    quote: "Let your breath be the compass for every transition on and off the mat.",
  },
  {
    id: "naina-sharma",
    name: "Naina Sharma",
    specialty: "Yin Yoga & Meditation",
    role: "Restorative & Mindfulness Guide",
    shortBio:
      "A gentle, unhurried teaching style that encourages stillness, breath awareness, and a thoughtful approach to restorative practice.",
    fullBio:
      "Naina crafts gentle sanctuaries of sound and silence. Her passion lies in guiding individuals out of chronic urgency and into deep, restorative rest. Through long, supported postures and compassionate mindfulness cues, she holds space for students to release deep-seated stress and reconnect with mental spaciousness.",
    teachingPhilosophy:
      "“Rest is not something we earn through exhaustion; it is the natural soil from which clarity and vitality bloom.”",
    classesTaught: ["Yin & Restorative Yoga", "Guided Meditation & Pranayama"],
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
    quote: "In softness, we discover a resilient strength that pushing never gave us.",
  },
];
