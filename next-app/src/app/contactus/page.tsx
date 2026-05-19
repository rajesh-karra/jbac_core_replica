'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, MessageSquare, Clock } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const contactDetails = [
    { icon: Phone, title: 'Call Us', detail: '+91 92815 06386', sub: '(WhatsApp Active)' },
    { icon: Mail, title: 'Email Us', detail: 'enlight40@jbac.in', sub: '24/7 Support' },
    { icon: MapPin, title: 'Our Office', detail: 'Vijayawada, Andhra Pradesh', sub: 'Main HQ' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6"
          >
            Get In Touch
          </motion.h1>
          <p className="text-xl text-gray-600 font-telugu">
            మీకు ఏవైనా సందేహాలు ఉన్నా లేదా సహాయం కావాలన్నా మమ్మల్ని సంప్రదించండి.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Methods */}
          <div className="space-y-6">
            {contactDetails.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-[2rem] shadow-lg border border-gray-100 flex items-start space-x-6"
              >
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <item.icon size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-500 text-sm uppercase tracking-wider mb-1">{item.title}</h4>
                  <p className="text-xl font-bold text-gray-900 mb-1">{item.detail}</p>
                  <p className="text-sm text-blue-600 font-medium">{item.sub}</p>
                </div>
              </motion.div>
            ))}
            
            <motion.div 
              initial={{ opacity: 0, opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-blue-600 p-10 rounded-[2rem] text-white shadow-xl shadow-blue-200"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Clock size={28} /> Working Hours
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-white/20 pb-4">
                  <span>Mon - Sat</span>
                  <span className="font-bold">10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span>Sunday</span>
                  <span className="font-bold">Close</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                <MessageSquare size={24} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Send us a Message</h2>
            </div>
            
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-900">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-600 ml-1 font-telugu">మీ పేరు (Name)</label>
                <input required className="w-full p-5 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-4 focus:ring-blue-100 placeholder:text-gray-400" placeholder="Full Name" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-600 ml-1 font-telugu">మొబైల్ సంఖ్య (Phone)</label>
                <input required className="w-full p-5 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-4 focus:ring-blue-100 placeholder:text-gray-400" placeholder="10 Digit Number" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold text-gray-600 ml-1 font-telugu">విషయం (Subject)</label>
                <input required className="w-full p-5 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-4 focus:ring-blue-100 placeholder:text-gray-400" placeholder="What is this about?" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold text-gray-600 ml-1 font-telugu">సందేశం (Message)</label>
                <textarea rows={5} required className="w-full p-5 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-4 focus:ring-blue-100 placeholder:text-gray-400" placeholder="Describe your inquiry..." />
              </div>
              <div className="md:col-span-2 pt-4">
                <button className="w-full bg-blue-600 text-white font-bold py-5 rounded-2xl text-lg flex items-center justify-center gap-3 hover:bg-blue-700 hover:shadow-2xl transition-all h-18">
                  <span>Send Message</span>
                  <Send size={20} />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
