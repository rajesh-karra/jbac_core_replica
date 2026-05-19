'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Image as ImageIcon, Video, Filter } from 'lucide-react';

export default function GalleryPage() {
  const photos = [
    { url: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80', title: 'Community Prayer' },
    { url: 'https://images.unsplash.com/photo-1544427928-c49cdfebf194?auto=format&fit=crop&q=80', title: 'Youth Meet' },
    { url: 'https://images.unsplash.com/photo-1515162305285-0293e4767cc2?auto=format&fit=crop&q=80', title: 'Service Day' },
    { url: 'https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&q=80', title: 'Pastors Conference' },
    { url: 'https://images.unsplash.com/photo-1529070532972-08a0ad978b64?auto=format&fit=crop&q=80', title: 'Sunday School' },
    { url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80', title: 'Tech seminar' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 font-telugu">ఫోటో గేలరీ - Photo Gallery</h1>
          <p className="text-xl text-gray-600 font-telugu">JBAC మనోహరమైన క్షణాలు మరియు కార్యక్రమాల సమాహారం.</p>
        </motion.div>

        <div className="flex justify-center gap-4 mb-12">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-full font-bold shadow-lg">All</button>
            <button className="px-6 py-2 bg-white text-gray-600 rounded-full font-bold hover:bg-gray-100 transition-colors">Events</button>
            <button className="px-6 py-2 bg-white text-gray-600 rounded-full font-bold hover:bg-gray-100 transition-colors">Meetings</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="relative group overflow-hidden rounded-[2rem] bg-white shadow-xl aspect-square"
            >
              <img 
                src={item.url} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                 <h3 className="text-white text-xl font-bold">{item.title}</h3>
                 <p className="text-blue-400 text-sm font-medium">View Album</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
