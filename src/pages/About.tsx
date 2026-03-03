import { motion } from "framer-motion";
import aboutStory from "@/assets/about-story.jpg";
import heroPerfume from "@/assets/hero-perfume.jpg";
import founderImage from "@/assets/founder.jpg";

const About = () => {
  return (
    <main className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={aboutStory} alt="Our atelier" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/60" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-primary font-body mb-4">Our Narrative</p>
          <h1 className="font-display text-5xl md:text-7xl font-light text-foreground">Research & Style</h1>
        </motion.div>
      </section>

      {/* Founder Section - Visionary Focus */}
      <section className="py-24 md:py-32 overflow-hidden bg-secondary/10 border-b border-border/50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="aspect-[4/5] max-w-md mx-auto bg-card rounded-sm overflow-hidden glow-gold">
                <img src={founderImage} alt="Founders of Spaceloomz" className="w-full h-full object-cover" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-primary font-body mb-4">The Visionaries</p>
              <h2 className="font-display text-3xl md:text-4xl font-light text-foreground mb-6">Meet the Founders</h2>
              <div className="space-y-6 text-sm md:text-base text-muted-foreground font-body leading-relaxed text-left">
                <p className="text-foreground font-medium text-lg italic">
                  "We didn't just want to create another brand; we wanted to create a complete experience—one that stands out in a market filled with the ordinary."
                </p>
                <p>
                  Driven by a singular vision to be different, our founders have a personal commitment that ensures <strong>SPACELOOMZ</strong> is where obsessed research finally meets curated style.
                </p>
                <div className="pt-6 font-display text-xl text-primary opacity-80 italic">
                  — A Personal Commitment to Excellence
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section - Brand Journey & Operations */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-primary font-body mb-4">Our Journey</p>
              <h2 className="font-display text-3xl md:text-4xl font-light text-foreground mb-8">Engineering Distinction</h2>

              <div className="space-y-6 text-sm md:text-base text-muted-foreground font-body leading-relaxed">
                <p>
                  Spaceloomz was created with a bold vision — to redefine premium fashion in India through global sourcing, refined craftsmanship, and a distinctive modern identity. In an industry filled with repetition, we chose distinction.
                </p>

                <p>
                  Before introducing our first collection, we invested <b>six years</b> in in-depth research and development. We explored international fabric markets, tested material durability, refined fits, and studied evolving fashion trends across the globe. Because true luxury is never accidental — it is intentional, engineered, and perfected.
                </p>

                <p>
                  At Spaceloomz, quality begins at the source. Our premium fabrics are carefully sourced from renowned textile regions including <b>UAE, Turkey, and China</b> — destinations celebrated for advanced weaving techniques and superior textile standards. Each product is then manufactured with precision in <b>India and China</b>, ensuring the perfect balance between global excellence and reliable craftsmanship.
                </p>

                <div className="bg-secondary/20 p-8 rounded-sm space-y-4">
                  <h3 className="text-foreground font-display text-xl">The result is a collection defined by:</h3>
                  <ul className="grid grid-cols-2 gap-3 text-xs md:text-sm uppercase tracking-wider">
                    <li className="flex items-center gap-2">✨ Superior fabric quality</li>
                    <li className="flex items-center gap-2">✨ Modern tailoring</li>
                    <li className="flex items-center gap-2">✨ Refined finishing</li>
                    <li className="flex items-center gap-2">✨ Long-lasting performance</li>
                  </ul>
                  <p className="text-primary italic mt-4">We don’t just create clothing — we engineer confidence.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="aspect-[16/10] bg-card rounded-sm overflow-hidden mb-12">
                <img src={heroPerfume} alt="Spaceloomz Global Excellence" className="w-full h-full object-cover" />
              </div>

              <div className="space-y-6">
                <h3 className="font-display text-2xl text-foreground">Our Signature Collection Includes:</h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary/30 pl-6 py-2">
                    <p className="text-foreground font-medium">Luxury Shirts</p>
                    <p className="text-sm text-muted-foreground">Distinctive textures and structured fits.</p>
                  </div>
                  <div className="border-l-2 border-primary/30 pl-6 py-2">
                    <p className="text-foreground font-medium">Modern Trousers</p>
                    <p className="text-sm text-muted-foreground">Designed for style and comfort.</p>
                  </div>
                  <div className="border-l-2 border-primary/30 pl-6 py-2">
                    <p className="text-foreground font-medium">Premium Perfumes</p>
                    <p className="text-sm text-muted-foreground">Crafted to leave a lasting impression.</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 p-8 rounded-sm border-t border-primary/20 space-y-4">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Spaceloomz proudly serves retailers and resellers across India through seamless wholesale purchasing. Orders can be placed easily via WhatsApp or through our official website, ensuring accessibility without compromising on service or standards.
                </p>
                <p className="text-foreground font-medium text-sm">
                  With dependable supply, competitive pricing, and consistent quality, we aim to build long-term partnerships rooted in trust, excellence, and shared growth.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-body mb-3">Our Standards</p>
            <h2 className="font-display text-3xl md:text-5xl font-light text-foreground">Our Pillars</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Distinction", desc: "Choosing engineering over repetition, creating unique aesthetics that transcend the ordinary." },
              { title: "Precision", desc: "Investing six years into research to ensure every material and fit meets global excellence." },
              { title: "Partnership", desc: "Building long-term trust with retailers and bulk buyers through consistent quality and supply." },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <div className="w-12 h-[1px] bg-primary mx-auto mb-6" />
                <h3 className="font-display text-2xl text-foreground mb-4">{v.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
