'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, Book, Shield, MessageSquare, Tool, FileText } from 'lucide-react';
import Link from 'next/link';

export default function WebHelpPage() {
  const helpSteps = [
    {
      title: 'వెబ్‌సైట్‌లో రిజిస్టర్ ఎలా అవ్వాలి?',
      steps: [
        'మెనూలో "Sign Up" బటన్ క్లిక్ చేయండి.',
        'మీరు "Believer", "Pastor" లేదా "Organization" అని ఎంచుకోండి.',
        'మీ పేరు, ఫోన్ నంబర్ మరియు ఇతర వివరాలు నింపండి.',
        'సబ్మిట్ క్లిక్ చేయండి. మీకు కన్ఫర్మేషన్ మెసేజ్ వస్తుంది.'
      ],
      icon: HelpCircle
    },
    {
      title: 'పాస్టర్ అసోసియేషన్ నంబర్ అంటే ఏమిటి?',
      steps: [
        'ఇది కేవలం రిజిస్టర్డ్ పాస్టర్స్ కోసం మాత్రమే.',
        'మీ అసోసియేషన్ ద్వారా మీకు వచ్చిన ఐడి నంబర్ ప్రైవసీ కోసం ఉపయోగపడుతుంది.'
      ],
      icon: Shield
    },
    {
      title: 'వార్తలు లేదా దాడుల వివరాలు ఎలా పంపాలి?',
      steps: [
        'మెనూలో "మా గురుంచి" లోకి వెళ్లి "వార్తలు పెట్టండి" లేదా "దాడుల నమోదు" క్లిక్ చేయండి.',
        'వివరాలు నింపి సంబంధిత ఫోటోలు అప్‌లోడ్ చేయండి.',
        'మా టీం వాటిని వెరిఫై చేసి పబ్లిష్ చేస్తారు.'
      ],
      icon: MessageSquare
    }
  ];

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">వెబ్ సైట్ ఎలా ఉపయోగించాలి?</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-telugu">
            JBAC వెబ్‌సైట్‌ను సులభంగా ఉపయోగించడం కోసం ఈ సహాయక సూచనలను అనుసరించండి.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            {helpSteps.map((section, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-xl shadow-blue-100 border border-blue-50"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white">
                    <section.icon size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 font-telugu">{section.title}</h3>
                </div>
                <ul className="space-y-4">
                  {section.steps.map((step, sIdx) => (
                    <li key={sIdx} className="flex items-start space-x-3 text-gray-600">
                      <div className="mt-1.5 w-2 h-2 rounded-full bg-blue-400 flex-shrink-0" />
                      <span className="font-telugu leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="sticky top-28 bg-blue-600 rounded-3xl p-10 text-white shadow-2xl"
          >
            <h2 className="text-3xl font-bold mb-8 italic">Quick Support</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-2xl border border-white/20">
                <Tool size={32} />
                <div>
                  <h4 className="font-bold">Technical Issues?</h4>
                  <p className="text-sm opacity-80">Contact our tech team immediately.</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-2xl border border-white/20">
                <FileText size={32} />
                <div>
                  <h4 className="font-bold">Legal Guidance</h4>
                  <p className="text-sm opacity-80">Church permission & gov orders support.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-yellow-400 text-blue-900 rounded-2xl font-bold text-center">
              <p className="mb-4 font-telugu text-lg">ఏవైనా సందేహాలు ఉన్నాయా?</p>
              <Link href="/contactus" className="inline-block bg-blue-900 text-white px-8 py-3 rounded-xl hover:bg-black transition-colors">
                Contact Us Now
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
