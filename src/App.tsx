import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Index from "./pages/Index";
import Collections from "./pages/Collections";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Perfumes from "./pages/Perfumes";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/collections/men" element={<Men />} />
          <Route path="/collections/women" element={<Women />} />
          <Route path="/collections/perfumes" element={<Perfumes />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
