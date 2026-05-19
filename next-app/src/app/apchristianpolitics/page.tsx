'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Gavel, Vote, AlertTriangle, Scale } from 'lucide-react';

export default function ChristianPoliticsPage() {
  const issues = [
    { title: 'Voting Awareness', desc: 'Ensuring every believer is registered and understands the importance of their vote for the community.', icon: Vote },
    { title: 'Injustice Reporting', desc: 'Platform to report discrimination, land encroachment, or harassment against Christian institutions.', icon: AlertTriangle },
    { title: 'Legal Advocacy', desc: 'Representing Christian interests in policy making and government representation.', icon: Gavel },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-blue-500/20 text-blue-400 font-bold mb-6 text-sm uppercase tracking-widest">
            Justice & Voice
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-8 font-telugu">క్రైస్తవుల ఓట్ / అన్యాయం</h1>
          <p className="text-xl text-gray-400 leading-relaxed font-telugu">
            మన హక్కుల కోసం పోరాడుదాం. ఐక్యతతో మన స్వరాన్ని వినిపిద్దాం. అన్యాయంపై రాజీలేని పోరాటం చేద్దాం.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {issues.map((issue, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 p-10 rounded-[2rem] hover:bg-white/10 transition-colors group">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <issue.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{issue.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {issue.desc}
              </p>
            </div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative rounded-[3rem] p-12 md:p-20 overflow-hidden bg-gradient-to-br from-blue-900 to-indigo-950"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 font-telugu">అన్యాయాన్నని ఎదిరించండి</h2>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="mt-1"><Scale className="text-blue-400" size={24} /></div>
                  <p className="text-gray-300 font-telugu text-lg">రాజ్యాంగం కల్పించిన స్వేచ్ఛను కాపాడుకోవడం మన బాధ్యత.</p>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1"><AlertTriangle className="text-yellow-400" size={24} /></div>
                  <p className="text-gray-300 font-telugu text-lg">మీ గ్రామంలో లేదా పట్టణంలో చర్చికి లేదా క్రైస్తవులకు అన్యాయం జరిగితే ఇక్కడ ఫిర్యాదు చేయండి.</p>
                </li>
              </ul>
              <button className="mt-10 px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-xl transition-all">
                Report Injustice Now
              </button>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1589216532372-1c2a11f90e48?auto=format&fit=crop&q=80" 
                alt="Justice" 
                className="rounded-3xl shadow-2xl opacity-70 grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
