 import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../api/serviceCatalog';
import { ServiceCard } from '../components/ServiceCard';
import { Star, Shield, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Ligtas na import gamit ang tamang sub-folder path mo
import amaraLogo from '../assets/images/amara-logo.jpg';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10 px-6 py-4 flex justify-between items-center">
        <h1 className="text-sm font-bold tracking-[0.3em] uppercase">AMARAS STUDIO</h1>
        <button 
          onClick={() => navigate('/login')}
          className="px-6 py-2 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full hover:bg-zinc-200 transition-colors"
        >
          Sign In
        </button>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden bg-black pt-24 px-4">
        <div className="w-full max-w-3xl mx-auto mb-8">
          <img 
            src={amaraLogo} 
            alt="Amara's Studio Logo"
            className="w-full max-h-[50vh] object-contain mx-auto"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              console.log("Logo path fallback triggered.");
            }}
          />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-extralight tracking-[0.2em] text-white uppercase mb-4">
              AMARAS STUDIO
            </h2>
            <p className="text-sm md:text-base text-white/60 font-light max-w-2xl mx-auto mb-8 leading-relaxed tracking-wide">
              Capturing timeless portraits and professional visual identities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light tracking-widest uppercase">Photography Packages</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES && SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// CRITICAL: Siguraduhing may default export para hindi mag-error ang App.tsx!
export default Home;