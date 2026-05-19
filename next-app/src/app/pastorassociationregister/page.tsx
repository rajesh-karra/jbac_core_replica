'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Phone, MapPin, Check, Loader2, Award } from 'lucide-react';

export default function PastorAssociationRegisterPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    pa_name: '',
    totalleadrs: '',
    headname: '',
    pa_president: '', // Retired/Current status
    level: '',
    pa_secretory: '', // Actually position in committee
    pa_contact: '',
    email: '',
    location: '',
    districts: '',
    constituencyname: '',
    mandal_id: '',
    village_id: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Pastor Association registration successful!');
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto mb-16">
          <div className="w-20 h-20 bg-blue-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
            <Users className="w-10 h-10 text-blue-600" />
          </div>
          <h1 className="text-4xl font-extrabold mb-4 underline decoration-blue-200">Pastor Association Registration</h1>
          <p className="text-xl text-gray-700 font-bold bg-white p-4 rounded-2xl shadow-sm border">
            ఆంధ్రప్రదేశ్ రాష్ట్రంలోని రాష్ట్ర, జిల్లా, నియోజకవర్గ, మండల మరియు టౌన్ పాస్టర్ ఫెలోషిప్ మాజీ, ప్రస్తుత కమిటీ సభ్యుల నమోదు
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] shadow-2xl p-8 border border-gray-100">
           <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1">పాస్టర్ అస్సోసియేషన్ పేరు (Association Name) <span className="text-red-500">*</span></label>
                <input required name="pa_name" value={formData.pa_name} onChange={handleChange} placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి" className="w-full px-5 py-4 bg-gray-50 border-2 rounded-2xl outline-none" />
              </div>

               <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1">మొత్తం పాస్టర్స్ సంఖ్య (Total Pastors) <span className="text-red-500">*</span></label>
                <input required name="totalleadrs" type="number" value={formData.totalleadrs} onChange={handleChange} placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి" className="w-full px-5 py-4 bg-gray-50 border-2 rounded-2xl outline-none" />
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1">మీ పేరు (Your Name) <span className="text-red-500">*</span></label>
                <input required name="headname" value={formData.headname} onChange={handleChange} placeholder="ఇంటి పేరుతో సహా" className="w-full px-5 py-4 bg-gray-50 border-2 rounded-2xl outline-none" />
              </div>

               <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1">మీ పొజిషన్ (Status)</label>
                <select name="pa_president" value={formData.pa_president} onChange={handleChange} className="w-full px-5 py-4 bg-gray-50 border-2 rounded-2xl outline-none">
                  <option value="">ఎంచుకోండి</option>
                  <option value="మాజీ">మాజీ (Ex)</option>
                  <option value="ప్రస్తుత">ప్రస్తుత (Present)</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1">అస్సోసియేషన్ స్థాయి (Level)</label>
                <select name="level" value={formData.level} onChange={handleChange} className="w-full px-5 py-4 bg-gray-50 border-2 rounded-2xl outline-none">
                  <option value="">ఎంచుకోండి</option>
                  <option value="మండల స్థాయి">మండల స్థాయి</option>
                  <option value="టౌన్ స్థాయి">టౌన్ స్థాయి</option>
                  <option value="నియోజకవర్గ స్థాయి">నియోజకవర్గ స్థాయి</option>
                  <option value="జిల్లా స్థాయి">జిల్లా స్థాయి</option>
                  <option value="రాష్ట్ర స్థాయి">రాష్ట్ర స్థాయి</option>
                </select>
              </div>

               <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1">ఫోన్ నంబర్ (Phone) <span className="text-red-500">*</span></label>
                <input required name="pa_contact" value={formData.pa_contact} onChange={handleChange} maxLength={10} className="w-full px-5 py-4 bg-gray-50 border-2 rounded-2xl outline-none" />
              </div>
            </div>

            <button disabled={isSubmitting} type="submit" className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white font-extrabold rounded-2xl shadow-xl flex items-center justify-center gap-3">
              {isSubmitting ? <Loader2 className="animate-spin" size={20} /> : <Check size={20} />}
              రిజిస్టర్ చేయండి
            </button>
           </form>
        </div>
      </div>
    </div>
  );
}
