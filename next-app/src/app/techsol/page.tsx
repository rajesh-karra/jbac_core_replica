'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Monitor, PhoneCall, Users, MessageCircle, Mic, Layout } from 'lucide-react';

export default function TechSolPage() {
  const solutions = [
    {
      title: 'Church Automation',
      desc: 'Automate your church and organization processes for effective management and better believer services.',
      icon: Layout
    },
    {
      title: 'Bulk Data Retrieval',
      desc: 'Quickly retrieve and manage church contact lists and believer directories in minutes.',
      icon: Users
    },
    {
      title: 'Audio Conferencing',
      desc: 'Host conferences for 10-300 people with a single phone number. Supports normal phones and interactive polling.',
      icon: PhoneCall
    },
    {
      title: 'Multi-language Broadcast',
      desc: 'Send God\'s word in Telugu or any language to thousands of believers instantly.',
      icon: MessageCircle
    },
    {
      title: 'Voice Broadcasting',
      desc: 'Record messages and broadcast to lakhs of believers. Automated ringing and message playback.',
      icon: Mic
    },
    {
      title: 'Interactive Feedback',
      desc: 'Hardware solutions for automated dialing with IVR feedback (0-9) and detailed status reporting.',
      icon: Monitor
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gray-50 text-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-blue-600 font-bold tracking-widest uppercase mb-4">Innovation for Faith</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 font-telugu">
            Technical Solutions to the Churches and Christian Organisations
          </h1>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 leading-relaxed font-telugu">
            వేగంగా మారుతున్న సాంకేతిక ప్రపంచంలో, మన చర్చిలు మరియు క్రైస్తవ సంస్థలు సువార్తను మరింత సమర్థవంతంగా ప్రకటించడానికి మేము అత్యాధునిక సాంకేతిక పరిష్కారాలను అందిస్తున్నాము.
          </p>
        </motion.div>

        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-gray-100 mb-16">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 space-y-6">
              <h3 className="text-3xl font-bold text-blue-600">Our Goal</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are providing suitable technical solutions to the churches and Christian organisations in order to serve the community better and win more souls. From small congregations to large multinational organizations, our tools are built to scale.
              </p>
              <div className="flex items-center gap-4 text-blue-700 font-bold">
                <CheckCircle2 size={24} />
                <span>Over 40,000 Pastors Connected in AP</span>
              </div>
            </div>
            <div className="flex-1">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80" 
                alt="Tech Solutions" 
                className="rounded-3xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {solutions.map((sol, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[2rem] shadow-lg border border-gray-50 hover:shadow-2xl transition-all"
            >
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8">
                <sol.icon size={32} />
              </div>
              <h4 className="text-2xl font-bold mb-4">{sol.title}</h4>
              <p className="text-gray-500 leading-relaxed">
                {sol.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-blue-600 rounded-[3rem] p-10 md:p-16 text-white text-center shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 font-telugu italic">
              "సువార్త సేవలో సాంకేతికతను మిళితం చేసి క్రీస్తు రాజ్య వ్యాప్తికి తోడ్పడదాం."
            </h3>
            <div className="space-y-2">
              <p className="text-2xl font-extrabold">— ప్రొఫెసర్ డాక్టర్ జోసెఫ్ ప్రకాష్ మోసిగంటి</p>
              <p className="text-blue-100 font-medium tracking-wide">B.Tech, M.Tech, Ph.D</p>
              <p className="text-lg">చైర్మన్, JBAC</p>
              <p className="text-sm opacity-80">డైరెక్టర్ సెయింట్ మేరీస్ గ్రూప్ ఆఫ్ ఇంజినీరింగ్ కాలేజెస్, గుంటూరు</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
