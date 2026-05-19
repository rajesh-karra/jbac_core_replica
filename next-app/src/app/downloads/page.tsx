'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Music, Play, Box } from 'lucide-react';

export default function DownloadsPage() {
  const assets = [
    { title: 'JBAC Brochure 2024', type: 'PDF', size: '2.4 MB', icon: FileText },
    { title: 'Gospel Songs Library', type: 'Audio', size: '45 MB', icon: Music },
    { title: 'Ministry Resources', type: 'DOCX', size: '1.1 MB', icon: Box },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 bg-white">
      <div className="container mx-auto px-4">
        <header className="max-w-4xl mx-auto text-center mb-20">
           <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 font-telugu">డౌన్లోడ్స్</h1>
           <p className="text-xl text-slate-500 font-telugu">Get access to all digital resources, forms, and ministry materials.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
           {assets.map((asset, i) => (
             <motion.div 
               key={i} 
               whileHover={{ scale: 1.02 }} 
               className="p-8 rounded-[2.5rem] bg-gray-50 border border-slate-100 flex flex-col items-center text-center group transition-all"
             >
                <div className="w-20 h-20 bg-blue-600 rounded-[2rem] flex items-center justify-center text-white mb-6 shadow-xl shadow-blue-100 group-hover:rotate-6 transition-transform">
                   <asset.icon size={36} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">{asset.title}</h3>
                <p className="text-slate-400 font-bold mb-8 uppercase text-xs tracking-widest">{asset.type} • {asset.size}</p>
                <button className="flex items-center gap-3 px-10 py-4 bg-white border-2 border-blue-600 text-blue-600 font-black rounded-2xl hover:bg-blue-600 hover:text-white transition-all shadow-lg active:scale-95">
                   <Download size={20} /> Download Now
                </button>
             </motion.div>
           ))}
        </div>
      </div>
    </div>
  );
}
