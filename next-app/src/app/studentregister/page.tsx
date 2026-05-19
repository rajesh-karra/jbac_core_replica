'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, Phone, MapPin, CheckCircle2, Lock, BookOpen, GraduationCap, Loader2 } from 'lucide-react';

export default function StudentRegister() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    studentname: '',
    gender: '',
    number: '',
    study: '',
    schname: '',
    fathername: '',
    dob: '',
    email: '',
    aboutyourself: '',
    nativeplace: '',
    caste: '',
    subcaste: '',
    talent: '',
    resdistricts: '',
    resconstituencyname: '',
    resmandals: '',
    respanchayati: '',
    villagename: '',
    wardnumber: '',
    denomination_id: '',
    spirti: '',
    lifegoal: '',
    god: '',
    password: '',
    retypepassword: ''
  });

  const [districts, setDistricts] = useState([]);
  const [denominations, setDenominations] = useState([]);

  useEffect(() => {
    // Mock fetch for now
    setDistricts([{id: 1, name: 'Visakhapatnam'}, {id: 2, name: 'Guntur'}]);
    setDenominations([{id: 1, denomation_name: 'Baptist'}, {id: 2, denomation_name: 'Catholic'}]);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.retypepassword) {
      alert("Passwords do not match!");
      return;
    }
    setLoading(true);
    try {
      console.log('Submitting Student:', formData);
      setSubmitted(true);
    } catch (error) {
      console.error('Registration failed:', error);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-32 pb-12 flex items-center justify-center bg-gray-50">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 rounded-3xl shadow-2xl text-center max-w-md mx-4"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6">
            <CheckCircle2 size={48} />
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Student Registered!</h2>
          <p className="text-gray-600 mb-8">మీ విద్యార్థి నమోదు విజయవంతమైంది.</p>
          <a href="/login" className="block w-full py-4 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 transition-colors">
            Login Now
          </a>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100"
        >
          <div className="bg-red-600 p-10 text-white text-center">
            <h1 className="text-4xl font-black mb-4">విద్యార్థి నమోదు</h1>
            <p className="text-red-100 font-medium">Student Registration Form - Empower your future</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-12">
            {/* Student Information */}
            <section className="space-y-8">
              <div className="flex items-center space-x-4 border-b border-gray-100 pb-4">
                <div className="p-3 bg-red-50 text-red-600 rounded-2xl">
                  <GraduationCap size={24} />
                </div>
                <h2 className="text-2xl font-black text-gray-900">Student Details</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Student Name (ఇంటి పేరుతో సహా) *</label>
                  <input required name="studentname" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-100 outline-none" placeholder="Full Name" value={formData.studentname} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Gender *</label>
                  <select required name="gender" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none" value={formData.gender} onChange={handleChange}>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Transgender</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Phone Number *</label>
                  <input required name="number" maxLength={10} className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none" placeholder="10 Digit Number" value={formData.number} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Present Study *</label>
                  <input required name="study" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none" placeholder="Class/Degree" value={formData.study} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">College/School Name *</label>
                  <input required name="schname" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none" placeholder="Institution Name" value={formData.schname} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Parent/Guardian Name *</label>
                  <input required name="fathername" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none" placeholder="Parent Name" value={formData.fathername} onChange={handleChange} />
                </div>
              </div>
            </section>

            {/* Address Details */}
            <section className="space-y-8">
              <div className="flex items-center space-x-4 border-b border-gray-100 pb-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
                  <MapPin size={24} />
                </div>
                <h2 className="text-2xl font-black text-gray-900">Residential Address</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">District *</label>
                  <select required name="resdistricts" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none" value={formData.resdistricts} onChange={handleChange}>
                    <option value="">Select District</option>
                    {districts.map((d: any) => <option key={d.id} value={d.id}>{d.name}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Constituency *</label>
                  <input required name="resconstituencyname" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none" placeholder="Constituency" value={formData.resconstituencyname} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Mandal *</label>
                  <input required name="resmandals" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none" placeholder="Mandal" value={formData.resmandals} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Village/Town *</label>
                  <input required name="villagename" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none" placeholder="Village" value={formData.villagename} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Ward Number</label>
                  <input name="wardnumber" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none" placeholder="Ward" value={formData.wardnumber} onChange={handleChange} />
                </div>
              </div>
            </section>

            {/* Other Information */}
            <section className="space-y-8">
              <div className="flex items-center space-x-4 border-b border-gray-100 pb-4">
                <div className="p-3 bg-purple-50 text-purple-600 rounded-2xl">
                  <BookOpen size={24} />
                </div>
                <h2 className="text-2xl font-black text-gray-900">Background & Talents</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Denomination *</label>
                  <select required name="denomination_id" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none" value={formData.denomination_id} onChange={handleChange}>
                    <option value="">Select Denomination</option>
                    {denominations.map((i: any) => <option key={i.id} value={i.id}>{i.denomation_name}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Caste</label>
                  <select name="caste" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none" value={formData.caste} onChange={handleChange}>
                    <option value="">Select Caste</option>
                    <option value="BC">BC</option>
                    <option value="SC">SC</option>
                    <option value="ST">ST</option>
                    <option value="OC">OC</option>
                  </select>
                </div>
                <div className="space-y-2 lg:col-span-1">
                  <label className="text-sm font-bold text-gray-700">What will you do for God?</label>
                  <select name="god" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none" value={formData.god} onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="Singing">Singing</option>
                    <option value="Music">Music</option>
                    <option value="Dance">Dance</option>
                  </select>
                </div>
              </div>
            </section>

            {/* Security */}
            <section className="space-y-8 bg-gray-50 p-8 rounded-3xl">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl">
                  <Lock size={24} />
                </div>
                <h2 className="text-2xl font-black text-gray-900">Account Security</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Password *</label>
                  <input required type="password" name="password" minLength={6} className="w-full p-4 bg-white border border-gray-200 rounded-xl outline-none" placeholder="Min 6 chars" value={formData.password} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Confirm Password *</label>
                  <input required type="password" name="retypepassword" minLength={6} className="w-full p-4 bg-white border border-gray-200 rounded-xl outline-none" placeholder="Retype password" value={formData.retypepassword} onChange={handleChange} />
                </div>
              </div>
            </section>

            <div className="pt-8">
              <button 
                type="submit" 
                disabled={loading}
                className="w-full py-5 bg-red-600 text-white rounded-2xl font-black text-xl shadow-xl hover:bg-red-700 transition-all transform hover:-translate-y-1 active:scale-95 disabled:opacity-50 flex items-center justify-center space-x-3"
              >
                {loading ? <Loader2 className="animate-spin" /> : null}
                <span>REGISTER STUDENT (నమోదు చేయండి)</span>
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
