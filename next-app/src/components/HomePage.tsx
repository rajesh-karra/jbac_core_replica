'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { ChevronRight, ShieldCheck, Users, Target, HeartHandshake } from 'lucide-react';
import Link from 'next/link';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const HomePage = () => {
  const banners = [
    "https://jbac.in/baneers/Banner01.png",
    "https://jbac.in/baneers/Banner03.png",
    "https://jbac.in/baneers/Banner04.png",
    "https://jbac.in/baneers/Banner05.png",
    "https://jbac.in/baneers/Banner06.png",
    "https://jbac.in/baneers/Banner07.png",
  ];

  const missionPoints = [
    {
      id: 1,
      text: "Bringing all the believers into single platform including labour to landlord and attender to IAS, Advocates, Doctors, Engineers, Officers, Politicians, Pastors, Business Men, Students & all professionals, so that helping and supporting each other.",
      icon: <Users className="w-8 h-8 text-blue-500" />
    },
    {
      id: 2,
      text: "Unite the whole Christian Community irrespective of Denomination and Caste.",
      icon: <ShieldCheck className="w-8 h-8 text-green-500" />
    },
    {
      id: 3,
      text: "Identifying Christian Political leaders from ward level, village level, Mandal level, Constituency, District level to State level to Serve the Community.",
      icon: <Target className="w-8 h-8 text-red-500" />
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Slider */}
      <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="h-full w-full"
        >
          {banners.map((banner, index) => (
            <SwiperSlide key={index}>
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-[10s] hover:scale-110"
                style={{ backgroundImage: `url(${banner})` }}
              >
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center text-white px-4"
                  >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
                      United in Faith
                    </h1>
                    <p className="text-xl md:text-2xl max-w-2xl mx-auto drop-shadow-md">
                      Serving Christian Community and Unite Christian Community to Serve the AP State.
                    </p>
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Tagline Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif italic leading-relaxed max-w-4xl mx-auto">
              "Serving Christian Community and Unite Christian Community to Serve the AP State."
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="lg:w-1/3"
            >
              <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <div className="w-24 h-2 bg-blue-600 rounded-full mb-8"></div>
              <p className="text-lg text-gray-600">
                JBAC is dedicated to creating a unified platform for the Christian community in Andhra Pradesh, fostering growth, security, and political representation.
              </p>
              <Link href="/about" className="mt-10 inline-flex items-center text-blue-600 font-bold hover:gap-2 transition-all group">
                Learn More About Us <ChevronRight className="ml-1 group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-1 gap-8">
              {missionPoints.map((point, idx) => (
                <motion.div
                  key={point.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow flex items-start gap-6"
                >
                  <div className="p-4 bg-gray-50 rounded-xl">
                    {point.icon}
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed font-medium">
                    {point.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services and Registers (Visual Grid) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-500">Comprehensive support for the Christian ecosystem</p>
        </div>
        
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mock service cards based on original images */}
          <div className="group relative overflow-hidden rounded-3xl aspect-video bg-blue-100 flex items-center justify-center p-8">
             <HeartHandshake className="w-20 h-20 text-blue-600 group-hover:scale-110 transition-transform" />
             <div className="absolute inset-0 bg-blue-600/90 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-6">
                <h3 className="text-2xl font-bold mb-2">Church Services</h3>
                <p className="text-center">Technical solutions and government order assistance for churches.</p>
             </div>
          </div>
          <div className="group relative overflow-hidden rounded-3xl aspect-video bg-green-100 flex items-center justify-center p-8">
             <Users className="w-20 h-20 text-green-600 group-hover:scale-110 transition-transform" />
             <div className="absolute inset-0 bg-green-600/90 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-6">
                <h3 className="text-2xl font-bold mb-2">Registration</h3>
                <p className="text-center">Register as a believer, pastor, or organization to access benefits.</p>
             </div>
          </div>
          <div className="group relative overflow-hidden rounded-3xl aspect-video bg-red-100 flex items-center justify-center p-8">
             <ShieldCheck className="w-20 h-20 text-red-600 group-hover:scale-110 transition-transform" />
             <div className="absolute inset-0 bg-red-600/90 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-6">
                <h3 className="text-2xl font-bold mb-2">Security</h3>
                <p className="text-center">Reporting attacks and ensuring community safety through legal support.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Join the Community Today</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/signup" className="px-10 py-4 bg-blue-600 hover:bg-blue-700 rounded-full font-bold text-lg transition-all transform hover:scale-105">
              Get Started
            </Link>
            <Link href="/login" className="px-10 py-4 border-2 border-white/20 hover:bg-white/10 rounded-full font-bold text-lg transition-all">
              Login to Portal
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
