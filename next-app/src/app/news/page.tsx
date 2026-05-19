'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Newspaper, Send, Share2, TrendingUp, Info } from 'lucide-react';

export default function SubmitNewsPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-white text-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-bold mb-6">
            <TrendingUp size={18} />
            <span>Journalism for Faith</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 font-telugu">వార్తలు పెట్టండి - Submit News</h1>
          <p className="text-xl text-gray-600 leading-relaxed font-telugu">
            మీ పరిధిలో జరిగిన సంఘటనలు, శుభకార్యాలు లేదా చర్చి సభల వివరాలను ఇక్కడ సమర్పించండి. మేము మా న్యూస్ సెక్షన్ లో ప్రచురిస్తాము.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="bg-gray-50 rounded-[3rem] p-8 md:p-12 border border-gray-100 shadow-xl">
             <form className="space-y-8">
                <div className="space-y-4">
                   <label className="text-lg font-bold">News Title (వార్త శీర్షిక)</label>
                   <input type="text" className="w-full px-6 py-4 rounded-2xl border-none ring-2 ring-gray-100 focus:ring-blue-500 outline-none transition-all shadow-sm" placeholder="Enter headline..." />
                </div>

                <div className="space-y-4">
                   <label className="text-lg font-bold">Category</label>
                   <select className="w-full px-6 py-4 rounded-2xl border-none ring-2 ring-gray-100 focus:ring-blue-500 outline-none transition-all shadow-sm bg-white">
                      <option>Church Events</option>
                      <option>Community News</option>
                      <option>Health & Education</option>
                      <option>Injustice Reports</option>
                   </select>
                </div>

                <div className="space-y-4">
                   <label className="text-lg font-bold">News Description</label>
                   <textarea rows={6} className="w-full px-6 py-4 rounded-2xl border-none ring-2 ring-gray-100 focus:ring-blue-500 outline-none transition-all shadow-sm" placeholder="Write the full story here..."></textarea>
                </div>

                <button className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white font-extrabold rounded-2xl shadow-xl shadow-blue-100 flex items-center justify-center gap-3 transition-all hover:scale-[1.02]">
                   <Send size={20} />
                   Publish News
                </button>
             </form>
          </div>

          <div className="space-y-10">
             <div className="p-8 rounded-[2rem] bg-blue-600 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                   <Info />
                   Submission Guidelines
                </h3>
                <ul className="space-y-4 text-blue-100">
                   <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold shrink-0 mt-1">1</div>
                      <p>వార్తలు వాస్తవమై ఉండాలి. తప్పుడు సమాచారం ప్రచురించబడదు.</p>
                   </li>
                   <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold shrink-0 mt-1">2</div>
                      <p>సంబంధిత ఫోటోలు లేదా వీడియోలు తప్పనిసరిగా ఉండాలి.</p>
                   </li>
                   <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold shrink-0 mt-1">3</div>
                      <p>వార్త పంపిన వారి పేరు మరియు ఫోన్ నంబర్ వివరంగా తెలపండి.</p>
                   </li>
                </ul>
             </div>

             <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center">
                   <Share2 className="mx-auto text-blue-600 mb-2" />
                   <h4 className="font-bold">Reach</h4>
                   <p className="text-xs text-gray-500 text-balance uppercase mt-1">100k+ Monthly Readers</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center">
                   <Newspaper className="mx-auto text-blue-600 mb-2" />
                   <h4 className="font-bold">Networks</h4>
                   <p className="text-xs text-gray-500 text-balance uppercase mt-1">Guntur, Krishna</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
