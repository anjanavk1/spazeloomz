import { Link } from "react-router-dom";
import { MapPin, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="md:col-span-1">
            <h3 className="font-display text-2xl tracking-[0.2em] text-gold-gradient mb-4">SPACELOOMZ</h3>
            <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6">
              Not just another brand, but a complete experience of style, comfort, and premium quality.
            </p>

            <div className="flex flex-col gap-3">
              <div className="flex gap-3 items-center">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground font-body">WWWSPAZELOOMZ@GMAIL.COM</span>
              </div>

              <div className="flex gap-3 items-center">
                <a
                  href="https://wa.me/971555697964"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-3 items-center hover:text-primary transition-colors group"
                >
                  <MessageCircle className="w-4 h-4 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-muted-foreground font-body group-hover:text-primary transition-colors">+971 55 569 7964</span>
                </a>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-foreground mb-4 font-body">Explore</h4>
            <div className="flex flex-col gap-3">
              <Link to="/collections" className="text-sm text-muted-foreground hover:text-primary transition-colors font-body">Collections</Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors font-body">Our Story</Link>
            </div>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] text-foreground mb-4 font-body">Contact</h4>
            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex gap-3 items-start">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs uppercase text-foreground font-body mb-1 tracking-wider">UAE Office</span>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed">
                      Office No 24, Jamalia Building,<br />
                      Near Gold Souk
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs uppercase text-foreground font-body mb-1 tracking-wider">India Office</span>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed">
                      Room No 22, First Floor,<br />
                      Fathima Building, Thanalur,<br />
                      Malappuram, Kerala
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-xs text-muted-foreground font-body tracking-wider">
            © 2026 Spaze Loomz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
