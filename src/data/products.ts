export interface Product {
  id: string;
  name: string;
  collection: string;
  price: number;
  image: string;
  secondaryImage?: string;
  description: string;
  category: 'perfumes';
  gender: 'men' | 'women' | 'unisex';
  // Perfume specific
  fragranceFamily?: string[];
  intensity?: 'light' | 'medium' | 'intense';
  occasion?: string[];
  notes?: {
    top: string[];
    heart: string[];
    base: string[];
  };
  story: string;
  size?: string; // Kept for perfumes, generic sizes in sizes[] array
}

export const products: Product[] = [
  {
    id: "noir-eternel",
    name: "Noir Éternel",
    collection: "The Dark Collection",
    price: 320,
    image: "perfume-1",
    description: "A bold declaration of midnight elegance. Noir Éternel captures the essence of the unseen hours.",
    category: "perfumes",
    gender: "men",
    fragranceFamily: ["Oriental", "Woody", "Oud"],
    intensity: "intense",
    occasion: ["night", "special", "signature"],
    notes: {
      top: ["Black Pepper", "Bergamot", "Cardamom"],
      heart: ["Iris", "Leather", "Dark Rose"],
      base: ["Oud", "Amber", "Vetiver"],
    },
    story: "Born from the shadows of ancient Arabian nights, Noir Éternel is a fragrance that speaks to those who find beauty in darkness. Each note unfolds like a chapter in a forbidden tale.",
    size: "100ml EDP",
  },
  {
    id: "golden-reverie",
    name: "Golden Réverie",
    collection: "The Gold Collection",
    price: 380,
    image: "perfume-2",
    description: "Liquid gold distilled into an olfactory masterpiece. A fragrance for those who dare to shine.",
    category: "perfumes",
    gender: "women",
    fragranceFamily: ["Floral", "Oriental"],
    intensity: "medium",
    occasion: ["day", "special", "signature"],
    notes: {
      top: ["Saffron", "Pink Pepper", "Mandarin"],
      heart: ["Jasmine Absolute", "Tuberose", "Ylang Ylang"],
      base: ["Sandalwood", "Musk", "Benzoin"],
    },
    story: "Inspired by the golden hour in Marrakech, where sunlight transforms every surface into liquid gold. Golden Réverie is our love letter to opulence.",
    size: "100ml EDP",
  },
  {
    id: "rose-velours",
    name: "Rosé Velours",
    collection: "The Velvet Collection",
    price: 290,
    image: "perfume-3",
    description: "Soft as velvet, warm as a whispered secret. Rosé Velours wraps you in understated luxury.",
    category: "perfumes",
    gender: "women",
    fragranceFamily: ["Floral"],
    intensity: "medium",
    occasion: ["day", "night"],
    notes: {
      top: ["Rose Petal", "Lychee", "Peony"],
      heart: ["Cashmere Wood", "Magnolia", "Violet"],
      base: ["White Musk", "Praline", "Cedarwood"],
    },
    story: "A tribute to the velvet drapes of Parisian ateliers, where each fold holds centuries of refinement. Rosé Velours is sophistication, softened.",
    size: "75ml EDP",
  },
  {
    id: "amethyst-crown",
    name: "Amethyst Crown",
    collection: "The Royal Collection",
    price: 450,
    image: "perfume-4",
    description: "Regal, rare, and utterly magnificent. A scent reserved for modern royalty.",
    category: "perfumes",
    gender: "unisex",
    fragranceFamily: ["Oriental", "Floral"],
    intensity: "intense",
    occasion: ["special", "signature", "night"],
    notes: {
      top: ["Purple Iris", "Blackcurrant", "Bergamot"],
      heart: ["Orris Butter", "Damask Rose", "Incense"],
      base: ["Agarwood", "Labdanum", "Tonka Bean"],
    },
    story: "Crafted in honor of ancient monarchs who adorned themselves with amethyst crowns, this fragrance channels power and grace in equal measure.",
    size: "100ml Extrait",
  },
  {
    id: "blanc-sacre",
    name: "Blanc Sacré",
    collection: "The Pure Collection",
    price: 340,
    image: "perfume-5",
    description: "Purity redefined. Blanc Sacré is the scent of light itself, bottled in crystalline elegance.",
    category: "perfumes",
    gender: "unisex",
    fragranceFamily: ["Fresh", "Floral"],
    intensity: "light",
    occasion: ["day", "signature"],
    notes: {
      top: ["White Tea", "Lily of the Valley", "Aldehydes"],
      heart: ["White Iris", "Jasmine Sambac", "Freesia"],
      base: ["Blonde Wood", "Clean Musk", "Ambrette"],
    },
    story: "Inspired by the first snowfall on marble temples, Blanc Sacré celebrates the profound beauty found in simplicity and light.",
    size: "75ml EDP",
  },
  {
    id: "oud-majeste",
    name: "Oud Majesté",
    collection: "The Heritage Collection",
    price: 520,
    image: "perfume-6",
    description: "The crown jewel of our collection. A masterful blend of rare oud and precious resins.",
    category: 'perfumes',
    gender: "men",
    fragranceFamily: ["Oud", "Woody", "Oriental"],
    intensity: "intense",
    occasion: ["special", "night", "signature"],
    notes: {
      top: ["Rose de Mai", "Saffron", "Cinnamon"],
      heart: ["Cambodian Oud", "Frankincense", "Myrrh"],
      base: ["Royal Amber", "Castoreum", "Sandalwood"],
    },
    story: "A pilgrimage through the incense-filled corridors of ancient mosques, Oud Majesté is our most precious creation—an homage to the artistry of Arabian perfumery.",
    size: "50ml Extrait",
  },
];

export const collections = [
  { name: "The Dark Collection", slug: "dark" },
  { name: "The Gold Collection", slug: "gold" },
  { name: "The Velvet Collection", slug: "velvet" },
  { name: "The Royal Collection", slug: "royal" },
  { name: "The Pure Collection", slug: "pure" },
  { name: "The Heritage Collection", slug: "heritage" },
];
