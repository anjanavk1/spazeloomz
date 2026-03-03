import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const Collections = () => {
  return (
    <main className="pt-20 md:pt-24">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-body mb-3">Discover</p>
            <h1 className="font-display text-4xl md:text-6xl font-light text-foreground">Our Collections</h1>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {products.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Collections;
