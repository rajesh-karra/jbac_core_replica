'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, MapPin, Calendar, Camera, Phone, CheckCircle2 } from 'lucide-react';

export default function AddAttacksPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gray-50 text-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="w-20 h-20 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
            <ShieldAlert size={40} />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 font-telugu text-red-600">దాడుల నమోదు - Report Christian Attacks</h1>
          <p className="text-xl text-gray-600 leading-relaxed font-telugu">
            క్రైస్తవ సేవకుల పై లేదా చర్చిల పై జరుగుతున్న దాడుల వివరాలను ఇక్కడ నమోదు చేయండి. మా లీగల్ టీమ్ మీకు తక్షణ సహాయం అందిస్తుంది.
          </p>
        </motion.div>

        {!submitted ? (
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12 border border-red-50">
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Victim Name / Church Name</label>
                    <input required type="text" className="w-full px-5 py-4 bg-gray-50 border-2 border-transparent focus:border-red-500 rounded-2xl outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Contact Phone</label>
                    <input required type="tel" className="w-full px-5 py-4 bg-gray-50 border-2 border-transparent focus:border-red-500 rounded-2xl outline-none transition-all" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Date of Incident</label>
                    <input required type="date" className="w-full px-5 py-4 bg-gray-50 border-2 border-transparent focus:border-red-500 rounded-2xl outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Location / District</label>
                    <input required type="text" className="w-full px-5 py-4 bg-gray-50 border-2 border-transparent focus:border-red-500 rounded-2xl outline-none transition-all" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Description of Incident</label>
                  <textarea required rows={4} className="w-full px-5 py-4 bg-gray-50 border-2 border-transparent focus:border-red-500 rounded-2xl outline-none transition-all" placeholder="దయచేసి జరిగిన విషయాన్ని వివరంగా చెప్పండి..."></textarea>
                </div>

                <div className="space-y-2">
                   <label className="text-sm font-bold text-gray-700 ml-1">Upload Proof (Video/Photos)</label>
                   <div className="border-2 border-dashed border-gray-200 rounded-2xl p-10 text-center hover:bg-red-50 transition-colors cursor-pointer">
                      <Camera className="mx-auto text-gray-400 mb-4" size={32} />
                      <p className="text-sm text-gray-500">Tap to upload files</p>
                   </div>
                </div>

                <button type="submit" className="w-full py-5 bg-red-600 hover:bg-red-700 text-white font-extrabold rounded-2xl shadow-xl shadow-red-100 transition-all flex items-center justify-center gap-3">
                  Report Incident Securely
                </button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-8 rounded-[2rem] shadow-lg border-l-4 border-blue-600">
                 <h4 className="text-xl font-bold mb-4">Emergency Contact</h4>
                 <div className="flex items-center gap-4 text-blue-600 font-extrabold text-2xl">
                    <Phone />
                    9949434311
                 </div>
                 <p className="text-sm text-gray-500 mt-2">Available 24/7 for legal support.</p>
              </div>

              <div className="bg-blue-600 p-8 rounded-[2rem] shadow-lg text-white">
                 <h4 className="text-xl font-bold mb-4">Privacy Note</h4>
                 <p className="text-sm opacity-90 leading-relaxed">
                   Your safety is our priority. Information provided here is kept confidential and shared only with our legal advocacy team.
                 </p>
              </div>
            </div>
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto bg-white p-12 rounded-[3rem] text-center shadow-2xl border border-green-50"
          >
            <CheckCircle2 size={80} className="text-green-500 mx-auto mb-8" />
            <h2 className="text-3xl font-bold mb-4">Report Submitted</h2>
            <p className="text-gray-600 mb-8 font-telugu text-lg">
              మీ ఫిర్యాదు నమోదు చేయబడింది. మా టీమ్ త్వరలోనే మిమ్మల్ని సంప్రదిస్తారు. ధైర్యంగా ఉండండి.
            </p>
            <button onClick={() => setSubmitted(false)} className="px-10 py-4 bg-blue-600 text-white font-bold rounded-2xl">
              Done
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
