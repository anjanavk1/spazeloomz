import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { getProductImage } from "@/lib/images";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground font-body">Product not found.</p>
      </div>
    );
  }

  const whatsappUrl = `https://wa.me/971555697964?text=${encodeURIComponent(`Hi, I'd like to enquire about ${product.name} (${product.size}, $${product.price}).`)}`;

  return (
    <main className="pt-20 md:pt-24">
      <div className="container mx-auto px-4 md:px-8 py-8">
        <Link to="/collections" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground font-body transition-colors mb-8">
          <ArrowLeft size={14} /> Back to Collections
        </Link>
      </div>

      <section className="container mx-auto px-4 md:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="aspect-[3/4] bg-card rounded-sm overflow-hidden glow-gold"
          >
            <img src={getProductImage(product.image)} alt={product.name} className="w-full h-full object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <p className="text-[10px] uppercase tracking-[0.25em] text-primary font-body mb-2">{product.collection}</p>
            <h1 className="font-display text-4xl md:text-5xl font-light text-foreground mb-3">{product.name}</h1>
            <p className="text-2xl text-primary font-body font-light mb-6">${product.price}</p>
            <p className="text-sm text-muted-foreground font-body leading-relaxed mb-8">{product.description}</p>

            <div className="space-y-6 mb-10">
              <h3 className="text-xs uppercase tracking-[0.2em] text-foreground font-body">Fragrance Pyramid</h3>
              {(["top", "heart", "base"] as const).map((tier) => (
                <div key={tier} className="flex items-start gap-4">
                  <span className="text-[10px] uppercase tracking-[0.15em] text-primary font-body w-12 pt-0.5 flex-shrink-0">{tier}</span>
                  <div className="flex flex-wrap gap-2">
                    {product.notes[tier].map((note) => (
                      <span key={note} className="text-xs font-body text-muted-foreground bg-secondary px-3 py-1 rounded-sm">
                        {note}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-8 mb-10">
              <p className="text-xs text-muted-foreground font-body leading-relaxed italic">"{product.story}"</p>
            </div>

            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button className="w-full bg-gold-gradient text-primary-foreground font-body text-xs uppercase tracking-[0.25em] h-13 hover:opacity-90 transition-opacity gap-2">
                <MessageCircle size={16} />
                Enquire on WhatsApp
              </Button>
            </a>
            <p className="text-[10px] text-muted-foreground font-body mt-3 tracking-wider">{product.size} · Free Shipping</p>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetail;
