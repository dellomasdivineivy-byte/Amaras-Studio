import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../api/serviceCatalog';
import { ServiceCard } from '../components/ServiceCard';
import { Camera, Star, Shield, Zap } from 'lucide-react';
import amaraLogo from '../assets/images/amara-logo.jpg';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black pt-16">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <img 
            src={amaraLogo} 
            alt="Amara's Studio Logo"
            className="w-[90%] h-[70vh] object-contain mx-auto pt-8"
            referrerPolicy="no-referrer"
          />
          
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            
            
            <p className="text-lg md:text-xl text-black/60 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
              
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-[500px]">
              <a 
                href="#services" 
                className="px-10 py-4 bg-black text-white text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-zinc-200 transition-colors"
              >
                Explore Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 border-y border-white/5 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Zap, title: "Automated Scheduling", desc: "Real-time availability and instant booking confirmation." },
              { icon: Star, title: "Pictorial Management", desc: "Secure digital gallery for all your professional portraits." },
              { icon: Shield, title: "Secure & Private", desc: "Your data and memories are protected with high-end security." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/10">
                  <feature.icon className="w-6 h-6 text-white/80" />
                </div>
                <h3 className="text-lg font-medium mb-3 uppercase tracking-wider">{feature.title}</h3>
                <p className="text-sm text-white/40 font-light leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/40 mb-4 block">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight uppercase">Photography Packages</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center text-white/30 text-xs uppercase tracking-[0.2em]">
        <p>&copy; 2024 Amaras Studio. All Rights Reserved.</p>
      </footer>
    </div>
  );
};
