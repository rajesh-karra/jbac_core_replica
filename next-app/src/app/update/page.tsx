'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, Phone, Mail, MapPin, Briefcase, GraduationCap, DollarSign, Users, Award, Check, Loader2, Calendar } from 'lucide-react';

export default function UpdateProfilePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [category, setCategory] = useState('Believer'); // Defaulting for now
  
  const [formData, setFormData] = useState({
    fname: '',
    whatsapp: '',
    dob: '',
    gender: '',
    email: '',
    mobile_number: '',
    status: 'single',
    income: '',
    caste: '',
    subcaste: '',
    nativeplace: '',
    talent: '',
    education: '',
    designation: '',
    dpartment: '',
    districts: '',
    constituencyname: '',
    mandals: '',
    panchayati: '',
    villagename: '',
    wardnumber: '',
    ward: '',
    nri: 'Non NRI',
    leadership: 'NO',
    leadertype: '',
    generaltype: ''
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
      alert('Profile updated successfully!');
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto mb-16">
          <div className="w-20 h-20 bg-blue-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
            <User className="w-10 h-10 text-blue-600" />
          </div>
          <h1 className="text-4xl font-extrabold mb-4">{category} Profile</h1>
          <p className="text-xl text-gray-600">మీ ప్రొఫైల్ వివరాలను అప్‌డేట్ చేయండి</p>
        </motion.div>

        <div className="max-w-5xl mx-auto bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-12">
            
            {/* Basic Info Section */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-blue-600 pl-4">Personal Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1"><User size={16} className="text-blue-500" /> Name</label>
                  <input name="fname" value={formData.fname} onChange={handleChange} placeholder="ఇక్కడ క్లిక్ చేసి నమోదు చేయండి" className="w-full px-5 py-4 bg-gray-50 border-2 rounded-2xl outline-none focus:border-blue-500 transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1"><Phone size={16} className="text-blue-500" /> WhatsApp Number</label>
                  <input name="whatsapp" value={formData.whatsapp} onChange={handleChange} maxLength={10} placeholder="Enter WhatsApp Number" className="w-full px-5 py-4 bg-gray-50 border-2 rounded-2xl outline-none focus:border-blue-500 transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1"><Calendar size={16} className="text-blue-500" /> Date Of Birth</label>
                  <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="w-full px-5 py-4 bg-gray-50 border-2 rounded-2xl outline-none focus:border-blue-500 transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1"><Users size={16} className="text-blue-500" /> Gender</label>
                  <select name="gender" value={formData.gender} onChange={handleChange} className="w-full px-5 py-4 bg-gray-50 border-2 rounded-2xl outline-none focus:border-blue-500 transition-colors">
                    <option value="">ఇక్కడ క్లిక్ చేసి ఎంచుకోండి</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Transgender">Transgender</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1"><Mail size={16} className="text-blue-500" /> Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Your Mail" className="w-full px-5 py-4 bg-gray-50 border-2 rounded-2xl outline-none focus:border-blue-500 transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1"><Phone size={16} className="text-blue-500" /> Phone Number</label>
                  <input name="mobile_number" value={formData.mobile_number} onChange={handleChange} maxLength={10} placeholder="Enter Mobile Number" className="w-full px-5 py-4 bg-gray-50 border-2 rounded-2xl outline-none focus:border-blue-500 transition-colors" />
                </div>
              </div>
            </div>

            {/* Economic & Identity Section */}
            <div className="space-y-8">
               <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-blue-600 pl-4">Economic & Identity</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1">Status</label>
                    <div className="flex gap-4 p-2 bg-gray-50 rounded-2xl border-2">
                      <label className="flex-1 flex items-center justify-center gap-2 p-2 rounded-xl cursor-pointer hover:bg-white transition-colors">
                        <input type="radio" name="status" value="single" checked={formData.status === 'single'} onChange={handleChange} /> Single
                      </label>
                      <label className="flex-1 flex items-center justify-center gap-2 p-2 rounded-xl cursor-pointer hover:bg-white transition-colors">
                        <input type="radio" name="status" value="divorced" checked={formData.status === 'divorced'} onChange={handleChange} /> Divorced
                      </label>
                    </div>
                 </div>
                 <div className="space-y-2">
                   <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1"><DollarSign size={16} className="text-blue-500" /> Monthly Income</label>
                   <input name="income" value={formData.income} onChange={handleChange} placeholder="Enter Monthly Income" className="w-full px-5 py-4 bg-gray-50 border-2 rounded-2xl outline-none focus:border-blue-500 transition-colors" />
                 </div>
                 <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1">కులం</label>
                    <select name="caste" value={formData.caste} onChange={handleChange} className="w-full px-5 py-4 bg-gray-50 border-2 rounded-2xl outline-none focus:border-blue-500 transition-colors">
                      <option value="">ఇక్కడ క్లిక్ చేసి ఎంచుకోండి</option>
                      <option value="OC">OC</option>
                      <option value="BC">BC</option>
                      <option value="SC">SC</option>
                      <option value="ST">ST</option>
                    </select>
                 </div>
                 <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1">Sub Caste</label>
                    <input name="subcaste" value={formData.subcaste} onChange={handleChange} placeholder="Enter Your Sub Caste" className="w-full px-5 py-4 bg-gray-50 border-2 rounded-2xl outline-none focus:border-blue-500 transition-colors" />
                 </div>
               </div>
               <div className="space-y-2">
                 <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1">క్రైస్తవ సమాజం & దేవుని కొరకు ఏమి చేయగలరో వివరించండి</label>
                 <textarea name="nativeplace" value={formData.nativeplace} onChange={handleChange} placeholder="ఇక్కడ క్లిక్ చేసి నమోదు చేయండి" className="w-full px-5 py-4 bg-gray-50 border-2 rounded-2xl outline-none focus:border-blue-500 transition-colors min-h-[100px]" />
               </div>
            </div>

            {/* Professional Info */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-blue-600 pl-4">Professional Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1"><Award size={16} className="text-blue-500" /> Talent</label>
                  <select name="talent" value={formData.talent} onChange={handleChange} className="w-full px-5 py-4 bg-gray-50 border-2 rounded-2xl outline-none focus:border-blue-500 transition-colors">
                    <option value="">ఇక్కడ క్లిక్ చేసి ఎంచుకోండి</option>
                    <option value="Speaker">Speaker</option>
                    <option value="Writer">Writer</option>
                    <option value="Singer">Singer</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1"><GraduationCap size={16} className="text-blue-500" /> Education</label>
                  <select name="education" value={formData.education} onChange={handleChange} className="w-full px-5 py-4 bg-gray-50 border-2 rounded-2xl outline-none focus:border-blue-500 transition-colors">
                    <option value="">ఇక్కడ క్లిక్ చేసి ఎంచుకోండి</option>
                    <option value="1-5">1-5</option>
                    <option value="6-10">6-10</option>
                    <option value="Inter">Inter</option>
                    <option value="Degree">Degree</option>
                    <option value="PG">PG</option>
                    <option value="PHD">PHD</option>
                  </select>
                </div>
                 <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1"><Briefcase size={16} className="text-blue-500" /> Designation</label>
                  <select name="designation" value={formData.designation} onChange={handleChange} className="w-full px-5 py-4 bg-gray-50 border-2 rounded-2xl outline-none focus:border-blue-500 transition-colors">
                    <option value="">ఇక్కడ క్లిక్ చేసి ఎంచుకోండి</option>
                    <option value="Private executive">Private executive</option>
                    <option value="Government executive">Government executive</option>
                    <option value="Teacher">Teacher</option>
                    <option value="Doctor">Doctor</option>
                    <option value="Engineer">Engineer</option>
                    <option value="Business owner">Business owner</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1">Department</label>
                  <select name="dpartment" value={formData.dpartment} onChange={handleChange} className="w-full px-5 py-4 bg-gray-50 border-2 rounded-2xl outline-none focus:border-blue-500 transition-colors">
                    <option value="">ఇక్కడ క్లిక్ చేసి ఎంచుకోండి</option>
                    <option value="Real estate">Real estate</option>
                    <option value="Construction">Construction</option>
                    <option value="Education">Education</option>
                    <option value="Police">Police</option>
                    <option value="Media">Media</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Address Section */}
            <div className="space-y-8 bg-blue-50/30 p-8 rounded-[2rem] border-2 border-blue-100">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2"><MapPin className="text-blue-600" /> Location Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">District</label>
                    <select name="districts" value={formData.districts} onChange={handleChange} className="w-full px-5 py-4 bg-white border-2 rounded-2xl outline-none focus:border-blue-500 transition-colors">
                      <option value="">ఇక్కడ క్లిక్ చేసి ఎంచుకోండి</option>
                      {/* Districts would be mapped here */}
                    </select>
                 </div>
                 <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Constituency</label>
                    <select name="constituencyname" value={formData.constituencyname} onChange={handleChange} className="w-full px-5 py-4 bg-white border-2 rounded-2xl outline-none focus:border-blue-500 transition-colors">
                      <option value="">ఇక్కడ క్లిక్ చేసి ఎంచుకోండి</option>
                    </select>
                 </div>
                 <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Mandal</label>
                    <select name="mandals" value={formData.mandals} onChange={handleChange} className="w-full px-5 py-4 bg-white border-2 rounded-2xl outline-none focus:border-blue-500 transition-colors">
                      <option value="">ఇక్కడ క్లిక్ చేసి ఎంచుకోండి</option>
                    </select>
                 </div>
                 <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Panchayati</label>
                    <select name="panchayati" value={formData.panchayati} onChange={handleChange} className="w-full px-5 py-4 bg-white border-2 rounded-2xl outline-none focus:border-blue-500 transition-colors">
                      <option value="">ఇక్కడ క్లిక్ చేసి ఎంచుకోండి</option>
                    </select>
                 </div>
                 <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Village/Street Name</label>
                    <input name="villagename" value={formData.villagename} onChange={handleChange} placeholder="ఇక్కడ నమోదు చేయండి" className="w-full px-5 py-4 bg-white border-2 rounded-2xl outline-none focus:border-blue-500 transition-colors" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Ward Number</label>
                    <input name="wardnumber" value={formData.wardnumber} onChange={handleChange} placeholder="Enter Ward Number" className="w-full px-5 py-4 bg-white border-2 rounded-2xl outline-none focus:border-blue-500 transition-colors" />
                 </div>
              </div>
            </div>

            <button disabled={isSubmitting} type="submit" className="w-full py-6 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xl rounded-2xl shadow-xl flex items-center justify-center gap-3 transition-transform hover:scale-[1.01]">
              {isSubmitting ? <Loader2 className="animate-spin" size={24} /> : <Check size={24} />}
              ప్రొఫైల్ అప్‌డేట్ చేయండి
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
