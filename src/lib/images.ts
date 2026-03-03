import perfume1 from "@/assets/perfume-1.jpg";
import perfume2 from "@/assets/perfume-2.jpg";
import perfume3 from "@/assets/perfume-3.jpg";
import perfume4 from "@/assets/perfume-4.jpg";
import perfume5 from "@/assets/perfume-5.jpg";
import perfume6 from "@/assets/perfume-6.jpg";
import heroPerfume from "@/assets/hero-perfume.jpg";
import aboutStory from "@/assets/about-story.jpg";
import shirt1 from "@/assets/shirts/1.jpg";
import shirt2 from "@/assets/shirts/2.webp";
import shirt3 from "@/assets/shirts/3.webp";
import shirt4 from "@/assets/shirts/4.jpg";
import shirt5 from "@/assets/shirts/5.jpg";
import shirt6 from "@/assets/shirts/6.jpg";
import shirt7 from "@/assets/shirts/7.webp";

import shirt41 from "@/assets/shirts/41.jpg";
import shirt51 from "@/assets/shirts/51.jpg";
import shirt61 from "@/assets/shirts/61.jpg";

import pants1 from "@/assets/pants/1.webp"; // Using webp as it seems to be the user's intended image
import pants2 from "@/assets/pants/2.jpg";
import pants3 from "@/assets/pants/3.jpg";
import pants4 from "@/assets/pants/4.jpg";
import pants5 from "@/assets/pants/5.jpg";
import pants6 from "@/assets/pants/6.jpg";

const imageMap: Record<string, string> = {
  "perfume-1": perfume1,
  "perfume-2": perfume2,
  "perfume-3": perfume3,
  "perfume-4": perfume4,
  "perfume-5": perfume5,

  "perfume-6": perfume6,
  // Placeholders for new products - using available assets for variety
  "shirt-1": shirt1,
  "shirt-1-back": shirt4, // New back/alt view
  "shirt-2": shirt2,
  "shirt-2-detail": shirt5, // New detail/alt view
  "shirt-3": shirt3,
  "shirt-3-back": shirt6, // New back/alt view

  // New Shirts (User provided 41, 51, 61)
  "shirt-4": shirt41,
  "shirt-5": shirt51,
  "shirt-6": shirt61,

  // Pants images
  "pants-1": pants1,
  "pants-2": pants2,
  "pants-3": pants3,
  "pants-4": pants4,
  "pants-5": pants5,
  "pants-6": pants6,
};

export const getProductImage = (key: string): string => {
  return imageMap[key] || perfume1;
};
