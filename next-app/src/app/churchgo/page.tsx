'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ShieldCheck, Building2 } from 'lucide-react';

export default function ChurchGOPage() {
  const documents = [
    { title: 'GO Ms No. 562', desc: 'Rules for establishing new churches in residential zones.', date: '2023-11-20' },
    { title: 'Supreme Court Guidelines', desc: 'Protected rights for religious gatherings and worship.', date: '2022-05-15' },
    { title: 'Local Authority Permits', desc: 'Standard application forms for sound and event permissions.', date: '2024-01-10' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gray-50 text-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <Building2 className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 font-telugu">చర్చి పర్మిషన్ గవర్నమెంట్ ఆర్డర్స్</h1>
          <p className="text-xl text-gray-600 leading-relaxed font-telugu">
            మీ చర్చి నిర్మాణానికి మరియు కార్యక్రమాల నిర్వహణకు అవసరమైన అన్ని ప్రభుత్వ ఉత్తర్వులు మరియు చట్టపరమైన పత్రాలను ఇక్కడ డౌన్లోడ్ చేసుకోవచ్చు.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {documents.map((doc, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <FileText className="text-blue-600" size={32} />
                  <span className="text-sm font-medium text-gray-400">{doc.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{doc.title}</h3>
                <p className="text-gray-500 text-sm mb-6">{doc.desc}</p>
              </div>
              <button className="flex items-center justify-center gap-2 w-full py-3 bg-blue-50 text-blue-700 font-bold rounded-xl hover:bg-blue-100 transition-colors">
                <Download size={18} />
                Download PDF
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-blue-50">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="bg-green-100 p-6 rounded-full">
              <ShieldCheck className="text-green-600" size={48} />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">చట్టపరమైన హక్కులు</h2>
              <p className="text-gray-600 leading-relaxed mb-4 font-telugu">
                భారత రాజ్యాంగం ప్రకారం ప్రతి పౌరుడికి తన మతాన్ని ప్రచారం చేసుకునే మరియు ఆరాధించే హక్కు ఉంది. ఎవరైనా ఇబ్బంది పెడుతుంటే ఈ ఆర్డర్స్ కాపీలను చూపించి చట్టపరంగా ముందుకు వెళ్ళవచ్చు.
              </p>
              <p className="text-sm text-gray-400 font-bold italic">Legal Disclaimer: These documents are for informational purposes only. Consult with a legal expert for specific cases.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
