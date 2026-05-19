'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Phone, MapPin, Check, Loader2, User } from 'lucide-react';

export default function AddJobsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    jobname: '',
    number1: '',
    location: '', // Age in legacy it seems
    salary: '',
    experience_t: '',
    experience: '',
    qualification: '',
    image: null as File | null,
    districts: '',
    const_id: '',
    mandalname: '',
    panchayat_id: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Job registration successful!');
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto mb-16">
          <div className="w-20 h-20 bg-blue-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
            <Briefcase className="w-10 h-10 text-blue-600" />
          </div>
          <h1 className="text-4xl font-extrabold mb-4">Job Registration</h1>
          <p className="text-xl text-gray-700 font-bold bg-white p-6 rounded-2xl shadow-sm border leading-relaxed">
            రూతు క్రైస్తవ ఏజెన్సీ సర్వీసెస్ ద్వారా ఆంధ్ర, తెలంగాణా రాష్ట్రాల క్రైస్తవుల ఇళ్లలో పని చేయుటకొరకు హెల్పర్స్ / పనిమనిషి ఉద్యోగాల కొరకు ఉచిత నమోదు
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] shadow-2xl p-8 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1">పేరు (ఇంటి పేరుతో సహా) <span className="text-blue-500">*</span></label>
                <input required name="jobname" value={formData.jobname} onChange={handleChange} placeholder="ఇక్కడ క్లిక్ చేసి రాయండి" className="w-full px-5 py-4 bg-gray-50 border-2 rounded-2xl outline-none focus:border-blue-500" />
              </div>

               <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1">ఫోన్ నెంబర్ (Phone) <span className="text-blue-500">*</span></label>
                <input required name="number1" value={formData.number1} onChange={handleChange} maxLength={10} placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి" className="w-full px-5 py-4 bg-gray-50 border-2 rounded-2xl outline-none focus:border-blue-500" />
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1">వయసు (Age) <span className="text-blue-500">*</span></label>
                <input required name="location" value={formData.location} onChange={handleChange} placeholder="ఎన్ని సంవత్సరాలు" className="w-full px-5 py-4 bg-gray-50 border-2 rounded-2xl outline-none focus:border-blue-500" />
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1">ఎంత జీతం కావాలి (Expected Salary) <span className="text-blue-500">*</span></label>
                <input required name="salary" value={formData.salary} onChange={handleChange} placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి" className="w-full px-5 py-4 bg-gray-50 border-2 rounded-2xl outline-none focus:border-blue-500" />
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1">ఎటువంటి అనుభవం వుంది (Exp Type)</label>
                <select name="experience_t" value={formData.experience_t} onChange={handleChange} className="w-full px-5 py-4 bg-gray-50 border-2 rounded-2xl outline-none">
                  <option value="">సెలెక్ట్ చేయండి</option>
                  <option value="అనుభవం-లేదు">అనుభవం లేదు</option>
                  <option value="వంట అనుభవం">వంట అనుభవం వుంది</option>
                  <option value="ఇల్లు శుభ్రం">ఇల్లు శుభ్రం అనుభవం వుంది</option>
                  <option value="పైన అన్ని చేయగలను">పైన అన్ని చేయగలను</option>
                </select>
              </div>

               <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1">ఏమి చదివారు (Qualification)</label>
                <select name="qualification" value={formData.qualification} onChange={handleChange} className="w-full px-5 py-4 bg-gray-50 border-2 rounded-2xl outline-none">
                  <option value="">సెలెక్ట్ చేయండి</option>
                  <option value="చదువుకోలేదు">చదువుకోలేదు</option>
                  <option value="10 వ తరగతి">10 వ తరగతి</option>
                  <option value="ఇంటర్">ఇంటర్</option>
                  <option value="డిగ్రీ">డిగ్రీ</option>
                </select>
              </div>
            </div>

            <button disabled={isSubmitting} type="submit" className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white font-extrabold rounded-2xl shadow-xl flex items-center justify-center gap-3 active:scale-[0.98] transition-transform">
              {isSubmitting ? <Loader2 className="animate-spin" size={20} /> : <Check size={20} />}
              రిజిస్టర్ చేయండి
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
