import React from 'react';
import { motion } from 'framer-motion'; // Changed from 'motion/react' to standard 'framer-motion'
import { Download, Share2, Heart, Eye } from 'lucide-react';
import GradPhoto from '../assets/images/graduation.jpg';
import BirthdayPhoto from '../assets/images/birthday.jpg';
import WeddingPhoto from '../assets/images/wedding.jpg';
import PageantPhoto from '../assets/images/pageant.jpg';
const MOCK_PHOTOS = [
  { id: 1, url: GradPhoto, title: 'Graduation Day' },
  { id: 2, url: BirthdayPhoto, title: 'Birthday Bash' },
  { id: 3, url: WeddingPhoto, title: 'Wedding Day' },
  { id: 4, url: PageantPhoto, title: 'Pageant Day' },
  
];

export const Gallery: React.FC = () => {
  return (
    <div className="bg-black text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-light uppercase tracking-tight mb-2">My Pictorial Gallery</h1>
          <p className="text-white/40 text-sm font-light">View and download your professional portraits</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_PHOTOS.map((photo, i) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }} // Animates when scrolled into view
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-900 border border-white/5"
            >
              <img 
                src={photo.url} 
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-4">{photo.title}</p>
                <div className="flex items-center gap-3">
                  <button className="flex-1 py-2 bg-white text-black text-[10px] font-bold uppercase tracking-widest rounded-lg flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors">
                    
                   
                  </button>
                  <button className="p-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors">
                   
                  </button>
                  <button className="p-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors">
                    
                  </button>
                </div>
              </div>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-2">
                  <Eye className="w-3 h-3 text-white/60" />
                  <span className="text-[10px] font-bold text-white/80">HD</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};