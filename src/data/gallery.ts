export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  span?: string;
}

export const STUDIO_GALLERY: GalleryItem[] = [
  {
    id: "g-1",
    title: "Sunlit Morning Studio",
    category: "Studio Sanctuary",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1200&auto=format&fit=crop",
    span: "col-span-12 md:col-span-8 row-span-2",
  },
  {
    id: "g-2",
    title: "Mindful Breathwork",
    category: "Meditation & Pranayama",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop",
    span: "col-span-12 md:col-span-4",
  },
  {
    id: "g-3",
    title: "Organic Cork & Linen Props",
    category: "Textures & Materials",
    image: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=800&auto=format&fit=crop",
    span: "col-span-12 md:col-span-4",
  },
  {
    id: "g-4",
    title: "Synchronized Group Flow",
    category: "Community Practice",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop",
    span: "col-span-12 md:col-span-6",
  },
  {
    id: "g-5",
    title: "Restorative Stillness",
    category: "Deep Rest",
    image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?q=80&w=1200&auto=format&fit=crop",
    span: "col-span-12 md:col-span-6",
  },
];
