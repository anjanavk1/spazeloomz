import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Product } from "@/data/products";
import { getProductImage } from "@/lib/images";
import { MessageCircle } from "lucide-react";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const whatsappUrl = `https://wa.me/971555697964?text=${encodeURIComponent(`Hi, I'd like to enquire about ${product.name} ($${product.price}).`)}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-card rounded-sm mb-4">
          {/* Primary Image */}
          <img
            src={getProductImage(product.image)}
            alt={product.name}
            className={`w-full h-full object-cover transition-all duration-700 ease-in-out ${product.secondaryImage ? "group-hover:opacity-0" : "group-hover:scale-105"
              }`}
          />

          {/* Secondary Image (if available) */}
          {product.secondaryImage && (
            <img
              src={getProductImage(product.secondaryImage)}
              alt={`${product.name} view 2`}
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out group-hover:scale-105"
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Actions */}
          <div className="absolute bottom-4 right-4 flex flex-col gap-2 translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-10 h-10 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center hover:bg-primary transition-colors hover:scale-110"
              title="Enquire on WhatsApp"
            >
              <MessageCircle size={16} />
            </a>
            {/* Quick View Placeholder - In a real app this would open a modal */}
            {/* <button 
                 className="w-10 h-10 rounded-full bg-white/90 text-black flex items-center justify-center hover:bg-white transition-colors hover:scale-110"
                 title="Quick View"
               >
                 <Eye size={16} />
               </button> */}
          </div>
        </div>
      </Link>
      <div className="space-y-1">
        <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-body">{product.collection}</p>
        <h3 className="font-display text-xl text-foreground">{product.name}</h3>
        <p className="text-sm text-primary font-body">${product.price}</p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
