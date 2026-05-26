 import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; 
import { Zap, Star, Shield, X, Calendar, Clock, CheckCircle } from 'lucide-react';

// INTERFACES FOR TYPE SAFETY
interface ServiceItem {
  name: string;
  basePrice: string;
  description: string;
  features: string[];
  color: string;
}

interface UserProfile {
  name?: string;
  email?: string;
  role?: string;
}

interface ClientDashboardProps {
  user?: UserProfile | null;
}

// DYNAMIC SERVICES DATA (Kasama ang Pageants, Wedding, at Birthday)
const CELEBRATION_SERVICES: ServiceItem[] = [
  {
    name: 'Party or Any Celebration',
    basePrice: '₱5,000',
    description: 'Ideal for anniversaries, reunions, or corporate parties.',
    features: [
      '3 Hours Event Coverage',
      'Unlimited Digital Shots',
      'Candid & Group Portraits',
      'Basic Color Correction',
      'Next-Day Preview Gallery'
    ],
    color: 'border-[#A3C1C1]'
  },
  {
    name: 'Wedding Photography',
    basePrice: '₱25,000',
    description: 'Full day coverage for your special day.',
    features: [
      'Full Day Photo & Video Coverage',
      'High-End Retouching (100 Photos)',
      'Premium Leather Wedding Album',
      'Drone/Aerial Cinematography',
      'Soft Copy via Cloud Link'
    ],
    color: 'border-rose-300'
  },
  {
    name: 'Birthday & Debut',
    basePrice: '₱8,500',
    description: 'Capture the milestone moments.',
    features: [
      '4 Hours Coverage',
      'Themed Portrait Session',
      '50 Pcs 4R Hardcopy Prints',
      'Guest On-site Studio Setup',
      'Edited Digital Copies'
    ],
    color: 'border-amber-300'
  },
  {
    name: 'Pageants',
    basePrice: '₱8,000',
    description: 'High-fashion and on-stage competitive photography coverage.',
    features: [
      'Full Stage & Backstage Coverage',
      'High-Speed Action Photography',
      'Gown & Talent Segment Close-ups',
      'Advanced Retouching for Winners',
      'Fast-track Digital Delivery'
    ],
    color: 'border-cyan-300'
  }
];

const ClientDashboard: React.FC<ClientDashboardProps> = ({ user }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingDate || !bookingTime) return;

    // TODO: I-konekta ang backend API endpoint mo rito sa hinaharap
    console.log("Booking Details Submitted:", {
      client: user?.name || "Guest Client",
      service: selectedService?.name,
      date: bookingDate,
      time: bookingTime,
      price: selectedService?.basePrice
    });

    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setSelectedService(null);
      setBookingDate('');
      setBookingTime('');
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-white text-slate-700 font-sans antialiased">
      
      {/* Hero Section */}
      <section className="relative h-[75vh] flex items-center justify-center overflow-hidden bg-white px-4">
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <span className="text-[12vw] font-black tracking-tighter text-slate-50 uppercase select-none absolute">
            AMARAS
          </span>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold tracking-widest text-[#8A6767] uppercase mb-4">
              AMARAS STUDIO
            </h1>
            <p className="text-xs md:text-sm text-gray-500 font-light max-w-md mx-auto mb-8 leading-relaxed">
              Welcome back{user?.name ? `, ${user.name}` : ''}! Manage your automated bookings and digital portrait galleries seamlessly.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#services" 
                className="px-8 py-3 bg-[#8A6767] text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-full hover:bg-[#735353] transition-colors shadow-sm"
              >
                Explore Services & Book Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 border-y border-gray-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Zap, title: "Automated Scheduling", desc: "Real-time availability and instant booking confirmation." },
              { icon: Star, title: "Pictorial Management", desc: "Secure digital gallery for all your professional portraits." },
              { icon: Shield, title: "Secure & Private", desc: "Your data and memories are protected with high-end security." }
            ].map((feature, i) => {
              const FeatureIcon = feature.icon;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-100 shadow-sm">
                    <FeatureIcon className="w-4 h-4 text-[#8A6767]" />
                  </div>
                  <h3 className="text-[11px] font-bold mb-2 uppercase tracking-widest text-slate-800">{feature.title}</h3>
                  <p className="text-xs text-gray-400 font-light leading-relaxed max-w-xs mx-auto">{feature.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8A6767] mb-2 block">Our Expertise</span>
            <h2 className="text-xl md:text-2xl font-light tracking-tight text-slate-800 uppercase">Photography Categories</h2>
            <p className="text-xs text-slate-400 mt-1">Click any category packaging below to open the booking scheduler panel.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {CELEBRATION_SERVICES.map((service, index) => (
              <div 
                key={`${service.name}-${index}`}
                onClick={() => {
                  setSelectedService(service);
                  setBookingSuccess(false);
                }}
                className={`group p-6 bg-white border-t-4 ${service.color} border-x border-b border-slate-100 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer flex flex-col justify-between`}
              >
                <div>
                  <h3 className="text-xs font-bold tracking-wider text-slate-800 uppercase group-hover:text-[#8A6767] transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-xs text-slate-400 font-light mt-2 line-clamp-2">
                    {service.description}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-slate-50 flex justify-between items-center">
                  <span className="text-sm font-black text-slate-800">{service.basePrice}</span>
                  <span className="text-[9px] bg-slate-50 text-[#8A6767] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider group-hover:bg-[#8A6767] group-hover:text-white transition-colors">Book Now</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE BOOKING MODAL */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-2xl shadow-xl max-w-md w-full border border-slate-100 overflow-hidden"
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-slate-100 flex justify-between items-start bg-slate-50/50">
                <div>
                  <span className="text-[9px] font-bold text-[#8A6767] uppercase tracking-widest">Reservation Workspace</span>
                  <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide mt-0.5">{selectedService.name}</h3>
                </div>
                <button 
                  onClick={() => setSelectedService(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Modal Body content */}
              <div className="p-6 space-y-5 max-h-[70vh] overflow-y-auto">
                {bookingSuccess ? (
                  <div className="text-center py-8 space-y-3">
                    <div className="w-12 h-12 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle size={28} />
                    </div>
                    <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Schedule Request Logged!</h4>
                    <p className="text-xs text-slate-400 max-w-xs mx-auto">Your reservation request for {selectedService.name} has been processed onto the admin schedule tracker panel.</p>
                  </div>
                ) : (
                  <>
                    {/* Package Included Features */}
                    <div className="space-y-2">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Package Inclusions:</p>
                      <ul className="space-y-1.5">
                        {selectedService.features.map((feature, i) => (
                          <li key={i} className="text-xs font-medium text-slate-600 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#A3C1C1] shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-slate-100">
                      <div className="flex justify-between items-center text-xs font-bold text-slate-800 mb-4">
                        <span>Total Service Cost:</span>
                        <span className="text-sm font-black text-cyan-700">{selectedService.basePrice}</span>
                      </div>

                      {/* Automated Scheduling Fields Form */}
                      <form onSubmit={handleBookingSubmit} className="space-y-3.5">
                        <div className="space-y-1">
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                            <Calendar size={12} /> Target Date
                          </label>
                          <input 
                            type="date" 
                            required
                            value={bookingDate}
                            onChange={(e) => setBookingDate(e.target.value)}
                            className="w-full text-xs font-semibold px-3 py-2 border border-slate-200 rounded-xl focus:outline-hidden focus:border-[#8A6767] bg-white transition-colors"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                            <Clock size={12} /> Time Slot Session
                          </label>
                          <input 
                            type="time" 
                            required
                            value={bookingTime}
                            onChange={(e) => setBookingTime(e.target.value)}
                            className="w-full text-xs font-semibold px-3 py-2 border border-slate-200 rounded-xl focus:outline-hidden focus:border-[#8A6767] bg-white transition-colors"
                          />
                        </div>

                        <button 
                          type="submit"
                          className="w-full mt-4 py-2.5 bg-[#8A6767] hover:bg-[#735353] text-white text-[10px] font-bold uppercase tracking-widest rounded-xl shadow-sm transition-colors"
                        >
                          Confirm & Submit Reservation
                        </button>
                      </form>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-100 text-center text-gray-400 text-[10px] uppercase tracking-[0.2em] bg-white">
        <p>&copy; 2026 AMARAS STUDIO. All Rights Reserved.</p>
      </footer>

    </div>
  );
};

export default ClientDashboard;