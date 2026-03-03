import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import heroPerfume from "@/assets/hero-perfume.jpg";
import aboutStory from "@/assets/about-story.jpg";

const Index = () => {
  const featured = products.filter(p => p.category === 'perfumes').slice(0, 3);

  return (
    <main>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroPerfume} alt="Spaceloomz luxury perfume" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs md:text-sm uppercase tracking-[0.4em] text-primary font-body mb-6"
          >
            The Future of Fashion
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-display text-5xl md:text-8xl lg:text-9xl font-light tracking-[0.1em] text-gold-gradient mb-8"
          >
            SPACELOOMZ
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-sm md:text-base text-muted-foreground font-body font-light max-w-md mx-auto mb-10 leading-relaxed"
          >
            Where ancient artistry meets modern elegance. Discover fragrances that transcend time.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Link to="/collections">
              <Button className="bg-gold-gradient text-primary-foreground font-body text-xs uppercase tracking-[0.25em] px-10 h-12 hover:opacity-90 transition-opacity">
                Explore Collection
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-primary/30 animate-float"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${4 + i}s`,
              }}
            />
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-body mb-3">Curated Selection</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">Featured Fragrances</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {featured.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link to="/collections" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary font-body hover:text-gold-light transition-colors">
              View All Collections <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2"
            >
              <img
                src={aboutStory}
                alt="The Spaze Loomz Atelier"
                className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 text-left"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-primary font-body mb-6">The Spaceloomz Story</p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-8 leading-tight">
                Different by <br /> Design
              </h2>
              <div className="space-y-6 text-sm md:text-base text-muted-foreground font-body font-light mb-8 leading-relaxed max-w-md">
                <p>
                  In a market filled with ordinary fashion, Spaceloomz was born with a mission — to be different. Not just another brand, but a complete experience of style and premium quality.
                </p>
                <p>
                  For six years, our founders quietly researched fabrics and global sourcing, studying international markets and refining designs before launching.
                </p>
                <p>
                  Today, we provide premium quality to retailers and bulk buyers across India, bridging global textile hubs with local reach.
                </p>
              </div>
              <Link to="/about">
                <Button variant="link" className="text-primary p-0 h-auto font-body text-xs uppercase tracking-[0.2em] hover:text-gold-light transition-colors group">
                  Read Our Full Story <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Heritage Banner */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={aboutStory} alt="The craft" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/70" />
        </div>
        <div className="relative z-10 container mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-body mb-4">Our Heritage</p>
            <h2 className="font-display text-4xl md:text-6xl font-light text-foreground mb-6 max-w-2xl mx-auto">
              Crafted with Obsession
            </h2>
            <p className="text-sm text-muted-foreground font-body max-w-lg mx-auto mb-10 leading-relaxed">
              Every Spaze Loomz fragrance is a journey through rare ingredients sourced from the world's most exotic destinations.
            </p>
            <Link to="/about">
              <Button variant="outline" className="border-primary/30 text-foreground font-body text-xs uppercase tracking-[0.2em] px-8 h-11 hover:bg-primary/10 hover:border-primary/50 transition-all">
                Discover Origins
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Index;
