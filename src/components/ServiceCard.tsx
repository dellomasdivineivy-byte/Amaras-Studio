import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Service } from '../api/serviceCatalog';
import { useAuth } from '../context/AuthContext';

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleBook = () => {
    if (!user) {
      navigate('/login');
      return;
    }
    navigate(`/book/${service.id}`);
  };

  return (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="relative group overflow-hidden rounded-2xl bg-[#F2F2F2] border border-gray-200 p-8 transition-all duration-500 hover:shadow-xl h-full flex flex-col shadow-sm"
  >
    
    <div className="mb-6">
      <h3 className="text-2xl font-bold text-black uppercase tracking-tight">
        {service.name}
      </h3>
      <p className="text-xl font-medium text-black/90 mt-1">
        ₱{service.price.toLocaleString()}
      </p>
    </div>


    
    <ul className="text-sm text-black/80 space-y-3 mb-8 flex-grow">
      {service.inclusions?.map((item, index) => (
        <li key={index} className="flex items-start">
          <span className="text-black/40 mr-3 mt-1 text-xs">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>

    
    <div className="mt-auto">
      <div className="flex items-center gap-2 text-xs text-black/40 mb-4 uppercase tracking-widest">
        <Clock size={14} />
        <span>{service.duration}</span>
      </div>

      <button 
        onClick={handleBook}
        className="w-full bg-zinc-900 text-white py-3 rounded-xl font-bold hover:bg-zinc-800 transition-all duration-300 uppercase text-xs tracking-widest flex items-center justify-center gap-2"
      >
        Book Now <ArrowRight size={16} />
      </button>
    </div>
  </motion.div>
);
}
