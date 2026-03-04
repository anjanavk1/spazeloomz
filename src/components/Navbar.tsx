import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Men", path: "/collections/men" },
  { label: "Women", path: "/collections/women" },
  { label: "Unisex", path: "/collections/unisex" },
  { label: "About", path: "/about" },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <nav className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4 md:px-8">
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <Link to="/" className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
          <h1 className="font-display text-xl md:text-2xl font-semibold tracking-[0.2em] text-gold-gradient">
            SPACELOOMZ
          </h1>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xs tracking-[0.15em] uppercase font-body font-light transition-colors duration-300 ${location.pathname === link.path ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* WhatsApp enquire link */}
        <a
          href="https://wa.me/971555697964?text=Hi%20Spaze%20Loomz%2C%20I%27d%20like%20to%20enquire%20about%20your%20fragrances."
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs tracking-[0.15em] uppercase font-body font-light text-primary hover:text-gold-light transition-colors hidden md:block"
        >
          Enquire
        </a>

        <div className="md:hidden w-6" />
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="flex flex-col items-center py-6 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`text-sm tracking-[0.15em] uppercase font-body font-light ${location.pathname === link.path ? "text-primary" : "text-muted-foreground"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://wa.me/971555697964?text=Hi%20Spaze%20Loomz%2C%20I%27d%20like%20to%20enquire%20about%20your%20fragrances."
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm tracking-[0.15em] uppercase font-body font-light text-primary"
              >
                Enquire
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
