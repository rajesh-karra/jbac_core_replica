'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HandHelping, Heart, Phone, Mail, MapPin } from 'lucide-react';

export default function OurHelpPage() {
  const categories = [
    {
      title: 'Legal Aid',
      desc: 'Legal support and guidance for churches facing difficulties or administrative challenges.',
      icon: HandHelping
    },
    {
      title: 'Pastoral Support',
      desc: 'Emotional and professional support network for pastors and their families.',
      icon: Heart
    },
    {
      title: 'Community Welfare',
      desc: 'Connecting believers in need with resources and community members who can help.',
      icon: Phone
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 bg-white text-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-blue-600 font-bold uppercase tracking-widest mb-4">Support Network</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 font-telugu">మీకు మా సహాయం - Our Help to You</h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 leading-relaxed font-telugu">
            క్రైస్తవ సోదర సోదరీమణులకు మరియు సేవకులకు ఎదురయ్యే సమస్యలలో అండగా నిలవడమే JBAC ప్రధాన లక్ష్యం.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {categories.map((cat, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="p-8 rounded-3xl bg-gray-50 border border-gray-100 shadow-xl"
            >
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <cat.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{cat.title}</h3>
              <p className="text-gray-500">{cat.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-blue-600 rounded-[3rem] p-8 md:p-16 text-white text-center">
          <h2 className="text-3xl font-bold mb-8 italic font-telugu">"నేను మీకు సహాయము చేతును, భయపడకుము. - యెషయా 41:13"</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-2xl mx-auto font-telugu">
             <div className="space-y-4">
                <p className="font-bold text-xl uppercase tracking-wider">Contact for Urgent Help</p>
                <div className="flex items-center gap-3"><Phone size={20} /> 9949434311</div>
                <div className="flex items-center gap-3"><Mail size={20} /> contact@jbac.in</div>
                <div className="flex items-center gap-3"><MapPin size={20} /> Guntur, Andhra Pradesh</div>
             </div>
             <div className="bg-white/10 p-6 rounded-2xl">
                <p className="mb-4">మీకు ఏదైనా సమస్య ఉంటే మమ్మల్ని సంప్రదించండి. మా లీగల్ టీమ్ మరియు వాలంటీర్లు మీకు తోడుగా ఉంటారు.</p>
                <button className="w-full py-3 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors">
                  Contact Now
                </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
