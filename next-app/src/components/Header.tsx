'use client';

import React from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      title: 'మా గురించి',
      subMenu: [
        { label: 'నా గురించి', href: '/about' },
        { label: 'బిజినెస్ / హౌస్ రెంట్', href: '/business' },
        { label: 'మీకు మా సహాయం', href: '/ourhelp' },
        { label: 'వెబ్ సైట్ ఎలా ఉపయోగించాలి', href: '/webhelp' },
        { label: 'చర్చి పర్మిషన్ గవర్నమెంట్ ఆర్డర్స్', href: '/churchgo' },
        { label: 'మీ చర్చికి మా టెక్నికల్ సొల్యూషన్స్', href: '/techsol' },
        { label: 'వార్తలు పెట్టండి', href: '/news' },
        { label: 'దాడుల నమోదు', href: '/addattacks' },
        { label: 'బిజినెస్ నమోదు', href: '/addbusiness' },
        { label: 'ఫోటో గేలరీ', href: '/gallery' },
        { label: 'వీడియో గేలరీ', href: '/videospage' },
        { label: 'Downloads', href: '/downloads' },
        { label: 'Help', href: '/help' },
      ],
    },
    { label: 'క్రైస్తవుల ఓట్ / అన్యాయం', href: '/apchristianpolitics' },
    {
      title: 'మీటింగ్స్',
      subMenu: [
        { label: 'మీటింగ్స్ సమాచారం సబ్మిట్ చేయుటకు', href: '/addmeetings' },
        { label: 'మీటింగ్స్ చూచుటకు', href: '/events' },
      ],
    },
    {
      title: 'రిజిస్ట్రేషన్స్',
      subMenu: [
        { label: 'విశ్వాసి రిజిస్ట్రేషన్', href: '/believerregister' },
        { label: 'విద్యార్థి రిజిస్ట్రేషన్', href: '/studentregister' },
        { label: 'మినిస్ట్రీ రిజిస్ట్రేషన్', href: '/ministryregister' },
        { label: 'పాస్టర్ రిజిస్ట్రేషన్', href: '/pastorregister' },
        { label: 'చర్చి రిజిస్ట్రేషన్', href: '/churchregister' },
        { label: 'ఆర్గనైజషన్ రిజిస్ట్రేషన్', href: '/organisationregister' },
        { label: 'పాస్టర్ అసోసియేషన్ రిజిస్ట్రేషన్', href: '/pastorassociationregister' },
        { label: 'లీడర్ రిజిస్ట్రేషన్', href: '/leaders' },
        { label: 'AP 1 Crore Believers', href: '/ap1crore-believers' },
      ],
    },
    {
      title: 'సేవలు',
      subMenu: [
        { label: 'క్రైస్తవ సంస్థలు', href: '/institute' },
        { label: 'వివాహాలు', href: '/marriages' },
        { label: 'ఉద్యోగాలు', href: '/jobs' },
        { label: 'సహాయం కొరకు', href: '/help' },
        { label: 'JBAC వింగ్స్ సమాచారం', href: '/wings' },
        { label: 'సర్చ్ ఆర్గనైజషన్', href: '/organization' },
        { label: 'సర్వే', href: '/survey-news' },
      ],
    },
    {
      title: 'అకౌంట్',
      subMenu: [
        { label: 'మీ చర్చి టైమింగ్స్ ఎంటర్ చేయండి', href: '/addchurchtimings' },
        { label: 'మీ మినిస్ట్రీ కింద మీ వింగ్స్ ఆడ్ చెయ్యటం', href: '/addinstitute' },
        { label: 'బిజినెస్ నమోదు', href: '/addbusiness' },
        { label: 'వివాహం కొరకు రిజిస్ట్రేషన్', href: '/addmarriages' },
        { label: 'ఉద్యోగాల అవసరత సబ్ మిషన్', href: '/addjobs' },
        { label: 'యాడ్స్ సమాచారం సబ్ మిషన్', href: '/addads' },
        { label: 'మీ ప్రొఫైల్ అప్డేట్ కొరకు', href: '/update' },
        { label: 'Logout', href: '/login' },
      ],
    },
    { label: 'Contact Us', href: '/contactus' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2 border-b border-gray-100' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-12 h-12">
               <div className={`w-full h-full rounded-full flex items-center justify-center font-bold shadow-lg transition-colors ${
                 isScrolled ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'
               }`}>JBAC</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.label || item.title} className="relative group">
                {item.subMenu ? (
                  <button 
                    className={`flex items-center space-x-1 font-semibold transition-colors ${
                      isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
                    }`}
                  >
                    <span>{item.title}</span>
                    <ChevronDown size={16} />
                  </button>
                ) : (
                  <Link 
                    href={item.href!} 
                    className={`font-semibold transition-colors ${
                      isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}

                {item.subMenu && (
                  <div className="absolute top-full left-0 mt-2 w-72 bg-white shadow-2xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-3 border border-gray-100 text-gray-800">
                    <div className="max-h-[70vh] overflow-y-auto custom-scrollbar">
                      {item.subMenu.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition-colors text-sm font-medium"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Link 
              href="/login" 
              className={`px-6 py-2 rounded-full border-2 transition-all duration-300 font-bold ${
                isScrolled ? 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white' : 'border-white text-white hover:bg-white hover:text-blue-600'
              }`}
            >
              Login
            </Link>
            <Link 
              href="/signup" 
              className="px-6 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 shadow-lg transition-all duration-300 font-bold"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden text-gray-900 shadow-xl"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <div key={item.label || item.title}>
                  {item.subMenu ? (
                    <div className="space-y-2 text-gray-900">
                      <div className="font-bold text-blue-600 px-2">{item.title}</div>
                      <div className="pl-4 space-y-3 border-l-2 border-gray-100">
                        {item.subMenu.map((subItem) => (
                          <Link 
                            key={subItem.label}
                            href={subItem.href}
                            className="block text-gray-600 hover:text-blue-600 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link 
                      href={item.href!}
                      className="block font-bold text-gray-900 hover:text-blue-600 px-2 py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-6 flex flex-col space-y-3">
                <Link 
                  href="/login" 
                  onClick={() => setIsOpen(false)} 
                  className="text-center py-3 border-2 border-blue-600 text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-colors"
                >
                  Login
                </Link>
                <Link 
                  href="/signup" 
                  onClick={() => setIsOpen(false)} 
                  className="text-center py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
