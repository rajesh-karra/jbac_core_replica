'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Shield, BookOpen, Clock, Globe } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { label: 'Believers Joined', value: '1M+', icon: Users },
    { label: 'Events Hosted', value: '500+', icon: Clock },
    { label: 'Support Cases', value: '25k+', icon: Heart },
    { label: 'Global Reach', value: 'All Districts', icon: Globe },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-blue-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-900 via-transparent to-blue-600"></div>
           <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1544427928-c49cdfebf194?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative text-center px-4"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">మా గురుంచి (About Us)</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed font-telugu">
             ఆంధ్రప్రదేశ్ మరియు తెలంగాణ రాష్ట్రాల్లోని క్రైస్తవుల అభ్యున్నతి కోసం పాటుపడుతున్న సంస్థ.
          </p>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-bold text-sm">
                OUR MISSION
              </div>
              <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
                Empowering the Christian Community through Technical & Legal Support
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                JBAC provides a secure digital platform for believers, pastors, and churches to connect, 
                register, and receive support during times of injustice. We bridge the gap between 
                government policy and local practice.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: 'Security', desc: 'Encrypted registration for safety.', icon: Shield },
                  { title: 'Unity', desc: 'Bringing churches together.', icon: Users },
                ].map((item) => (
                  <div key={item.title} className="flex space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-blue-600/10 rounded-3xl -rotate-2"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                 <img 
                   src="https://images.unsplash.com/photo-1544427928-c49cdfebf194?auto=format&fit=crop&q=80" 
                   alt="Mission" 
                   className="w-full h-[500px] object-cover"
                 />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center text-white p-6"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-6 backdrop-blur-sm">
                  <stat.icon size={32} />
                </div>
                <div className="text-4xl font-extrabold mb-2">{stat.value}</div>
                <div className="text-blue-100 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Our Core Values</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-900">
            {[
              { title: 'Transparency', desc: 'Open and honest communication with our community.', icon: BookOpen },
              { title: 'Inclusivity', desc: 'Serving all denominations and backgrounds equally.', icon: Heart },
              { title: 'Efficiency', desc: 'Fast response to injustice reports and support requests.', icon: Clock },
            ].map((value) => (
              <motion.div 
                key={value.title}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-3xl shadow-xl shadow-gray-200/50 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 text-blue-600 rounded-full mb-8">
                  <value.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-500 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
