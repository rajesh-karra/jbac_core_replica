'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CalendarPlus, MapPin, Phone, User, FileText, Image as ImageIcon } from 'lucide-react';

export default function AddMeetingsPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-gray-50 text-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <CalendarPlus className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h1 className="text-4xl font-extrabold mb-4 font-telugu">మీటింగ్స్ సబ్మిట్ చేయుటకు</h1>
          <p className="text-xl text-gray-600 font-telugu">
            మీ చర్చిలో లేదా సంస్థలో జరిగే మీటింగ్స్ వివరాలు ఇక్కడ సమర్పించండి. మేము మా వెబ్ సైట్ లో ఉచితంగా ప్రచారం చేస్తాము.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12 border border-gray-100">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1">
                <User size={16} className="text-blue-600" /> Organization Name
              </label>
              <input type="text" placeholder="Enter name" className="w-full px-5 py-4 bg-gray-50 border-transparent border-2 focus:border-blue-500 focus:bg-white rounded-2xl outline-none transition-all" />
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1">
                <MapPin size={16} className="text-blue-600" /> Location / City
              </label>
              <input type="text" placeholder="Guntur / Vijayawada" className="w-full px-5 py-4 bg-gray-50 border-transparent border-2 focus:border-blue-500 focus:bg-white rounded-2xl outline-none transition-all" />
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1">
                <CalendarPlus size={16} className="text-blue-600" /> Meeting Date
              </label>
              <input type="date" className="w-full px-5 py-4 bg-gray-50 border-transparent border-2 focus:border-blue-500 focus:bg-white rounded-2xl outline-none transition-all" />
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1">
                <Phone size={16} className="text-blue-600" /> Contact Number
              </label>
              <input type="tel" placeholder="+91" className="w-full px-5 py-4 bg-gray-50 border-transparent border-2 focus:border-blue-500 focus:bg-white rounded-2xl outline-none transition-all" />
            </div>

            <div className="md:col-span-2 space-y-2">
              <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1">
                <FileText size={16} className="text-blue-600" /> Description / Speaker Details
              </label>
              <textarea rows={4} className="w-full px-5 py-4 bg-gray-50 border-transparent border-2 focus:border-blue-500 focus:bg-white rounded-2xl outline-none transition-all" placeholder="Enter meeting details..."></textarea>
            </div>

            <div className="md:col-span-2 space-y-2">
               <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1">
                <ImageIcon size={16} className="text-blue-600" /> Upload Poster (Optional)
              </label>
              <div className="w-full border-2 border-dashed border-gray-200 rounded-2xl p-8 text-center hover:border-blue-400 transition-colors cursor-pointer bg-gray-50">
                <p className="text-gray-500">Drag and drop file or <span className="text-blue-600 font-bold underline">browse</span></p>
                <p className="text-xs text-gray-400 mt-2">JPG, PNG up to 5MB</p>
              </div>
            </div>

            <div className="md:col-span-2 pt-4">
              <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-extrabold rounded-2xl shadow-xl shadow-blue-100 transform active:scale-[0.98] transition-all flex items-center justify-center gap-3">
                <CalendarPlus size={20} />
                Submit Meeting Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
