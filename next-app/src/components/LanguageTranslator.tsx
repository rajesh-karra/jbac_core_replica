'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Languages, Globe, Check, ChevronUp } from 'lucide-react';

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: any;
  }
}

const LanguageTranslator = () => {
  const [currentLang, setCurrentLang] = useState('te');
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'te', name: 'తెలుగు (Telugu)', native: 'తెలుగు' },
    { code: 'en', name: 'English', native: 'English' },
    { code: 'hi', name: 'हिन्दी (Hindi)', native: 'हिन्दी' },
    { code: 'ta', name: 'தமிழ் (Tamil)', native: 'தமிழ்' },
    { code: 'kn', name: 'ಕನ್ನಡ (Kannada)', native: 'ಕನ್ನಡ' }
  ];

  useEffect(() => {
    // 1. Add Google Translate Script
    const addScript = () => {
      const script = document.createElement('script');
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    };

    // 2. Initialize Function
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,te,hi,ta,kn',
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false,
      }, 'google_translate_element');
    };

    addScript();
  }, []);

  const handleTranslate = (code: string) => {
    setCurrentLang(code);
    setIsOpen(false);
    
    // Google Translate works by changing the value of a hidden select element
    // and triggering a change event. We'll find it and update it.
    const selectEl = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (selectEl) {
      selectEl.value = code;
      selectEl.dispatchEvent(new Event('change'));
    }
  };

  return (
    <>
      {/* Hidden Google Translate Element */}
      <div id="google_translate_element" style={{ display: 'none' }}></div>

      <div className="fixed bottom-8 right-8 z-[60]">
        <div className="relative">
          {/* Main Floating Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center space-x-2 bg-white/90 backdrop-blur-md border border-blue-100 shadow-2xl px-6 py-3 rounded-full text-blue-900 font-bold hover:bg-white transition-all group"
          >
            <Languages className="text-blue-600 group-hover:rotate-12 transition-transform" size={20} />
            <span>{languages.find(l => l.code === currentLang)?.native}</span>
            <ChevronUp size={16} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
          </motion.button>

          {/* Dropdown Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                className="absolute bottom-full right-0 mb-4 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
              >
                <div className="p-4 bg-blue-50 border-b border-blue-100 flex items-center space-x-2">
                  <Globe size={18} className="text-blue-600" />
                  <span className="font-bold text-blue-900">Select Language</span>
                </div>
                <div className="py-2 max-h-[300px] overflow-y-auto">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleTranslate(lang.code)}
                      className={`w-full text-left px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors ${
                        currentLang === lang.code ? 'text-blue-600 font-bold' : 'text-gray-700'
                      }`}
                    >
                      <div className="flex flex-col">
                        <span className="text-sm font-bold">{lang.native}</span>
                      </div>
                      {currentLang === lang.code && <Check size={18} />}
                    </button>
                  ))}
                </div>
                <div className="p-3 bg-gray-50 text-[10px] text-gray-400 text-center border-t border-gray-100">
                  Powered by Google Translate
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default LanguageTranslator;
