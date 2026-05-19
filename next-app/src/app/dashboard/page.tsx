'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  User, 
  MessageSquare, 
  ShieldAlert, 
  Settings, 
  LogOut,
  Bell,
  Search,
  PlusCircle,
  ChevronRight,
  TrendingUp,
  Clock
} from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Total Posts', value: '12', icon: MessageSquare, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Active Reports', value: '03', icon: ShieldAlert, color: 'text-red-600', bg: 'bg-red-50' },
    { label: 'Followers', value: '1.2k', icon: User, color: 'text-indigo-600', bg: 'bg-indigo-50' },
  ];

  const recentActivity = [
    { title: 'New meeting submitted', time: '2 hours ago', type: 'meeting' },
    { title: 'Injustice report updated', time: '5 hours ago', type: 'report' },
    { title: 'Profile details changed', time: 'Yesterday', type: 'profile' },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex">
      {/* Sidebar */}
      <aside className="w-72 bg-white border-r border-slate-200 hidden lg:flex flex-col sticky top-0 h-screen">
        <div className="p-8">
           <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-blue-200">JB</div>
              <span className="text-xl font-black tracking-tight text-slate-800">JBAC CORE</span>
           </Link>
        </div>

        <nav className="flex-1 px-6 space-y-4">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-4">Main Menu</p>
          <div className="space-y-1">
            {[
              { id: 'overview', icon: LayoutDashboard, label: 'Overview' },
              { id: 'profile', icon: User, label: 'Profile' },
              { id: 'posts', icon: MessageSquare, label: 'My Posts' },
              { id: 'reports', icon: ShieldAlert, label: 'Injustice Reports' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl font-bold transition-all ${
                  activeTab === item.id 
                  ? 'bg-blue-600 text-white shadow-xl shadow-blue-100' 
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'
                }`}
              >
                <item.icon size={22} />
                {item.label}
              </button>
            ))}
          </div>

          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-4 pt-6">Account</p>
          <div className="space-y-1">
             <button className="w-full flex items-center gap-4 px-4 py-3.5 text-slate-500 hover:bg-slate-50 rounded-2xl font-bold transition-all">
                <Settings size={22} /> Settings
             </button>
             <button className="w-full flex items-center gap-4 px-4 py-3.5 text-red-500 hover:bg-red-50 rounded-2xl font-bold transition-all">
                <LogOut size={22} /> Sign Out
             </button>
          </div>
        </nav>

        <div className="p-6">
           <div className="bg-slate-900 rounded-3xl p-6 text-white relative overflow-hidden">
              <div className="relative z-10">
                <p className="text-sm opacity-60 mb-1">Need help?</p>
                <p className="font-bold mb-4">Support Center</p>
                <Link href="/contactus" className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-bold transition-all">Contact Us</Link>
              </div>
              <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-blue-500/20 rounded-full blur-2xl"></div>
           </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0">
         {/* Top Header */}
         <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-30 px-8 flex items-center justify-between">
            <div className="flex items-center gap-4 flex-1 max-w-xl">
               <div className="relative w-full">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input 
                    type="text" 
                    placeholder="Search your documents..." 
                    className="w-full pl-12 pr-4 py-2.5 bg-slate-100 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  />
               </div>
            </div>

            <div className="flex items-center gap-6">
               <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-xl transition-all">
                  <Bell size={22} />
                  <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
               </button>
               <div className="h-10 w-[1px] bg-slate-200 mr-2"></div>
               <div className="flex items-center gap-3 pl-2">
                  <div className="text-right hidden sm:block">
                     <p className="text-sm font-black text-slate-800 leading-tight">Pastor John Doe</p>
                     <p className="text-xs text-slate-500">Verified Member</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold shadow-lg">JD</div>
               </div>
            </div>
         </header>

         <div className="p-8 lg:p-12 max-w-7xl mx-auto">
            {activeTab === 'overview' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-12"
              >
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                   <div>
                      <h1 className="text-4xl font-black text-slate-900 mb-2 font-telugu">హలో, దైవ సేవకుడా!</h1>
                      <p className="text-slate-500 text-lg">Welcome to your JBAC ministry dashboard.</p>
                   </div>
                   <button className="flex items-center gap-2 px-6 py-3.5 bg-blue-600 text-white rounded-2xl font-bold shadow-xl shadow-blue-100 hover:scale-[1.02] active:scale-95 transition-all">
                      <PlusCircle size={20} />
                      Post New Update
                   </button>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                   {stats.map((stat, i) => (
                      <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 flex items-center gap-6 hover:shadow-xl hover:shadow-slate-200/50 transition-all group">
                         <div className={`w-16 h-16 ${stat.bg} ${stat.color} rounded-x2l flex items-center justify-center group-hover:scale-110 transition-transform`}>
                            <stat.icon size={28} />
                         </div>
                         <div>
                            <p className="text-slate-400 font-bold uppercase text-xs tracking-widest mb-1">{stat.label}</p>
                            <p className="text-3xl font-black text-slate-900">{stat.value}</p>
                         </div>
                      </div>
                   ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                   {/* Activity Table */}
                   <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 p-10">
                      <div className="flex items-center justify-between mb-8">
                         <h2 className="text-2xl font-black text-slate-900">Recent Activity</h2>
                         <button className="text-blue-600 font-bold text-sm hover:underline">View All</button>
                      </div>
                      <div className="space-y-6">
                         {recentActivity.map((act, i) => (
                            <div key={i} className="flex items-center justify-between group cursor-pointer">
                               <div className="flex items-center gap-4">
                                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                     <Clock size={20} />
                                  </div>
                                  <div>
                                     <p className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{act.title}</p>
                                     <p className="text-sm text-slate-400 font-medium">{act.time}</p>
                                  </div>
                               </div>
                               <ChevronRight size={18} className="text-slate-300 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                            </div>
                         ))}
                      </div>
                   </div>

                   {/* Promotion Card */}
                   <div className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl shadow-blue-100">
                      <div className="relative z-10">
                        <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
                           <TrendingUp size={30} />
                        </div>
                        <h3 className="text-3xl font-black mb-4">Promote your Ministry</h3>
                        <p className="text-blue-100 text-lg mb-8 leading-relaxed">Reach more souls by highlighting your church events through our professional promotion tools.</p>
                        <button className="px-8 py-4 bg-white text-blue-700 font-extrabold rounded-2xl shadow-lg hover:bg-blue-50 transition-all">Get Started</button>
                      </div>
                      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                   </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'profile' && (
               <motion.div 
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 className="max-w-4xl"
               >
                  <h1 className="text-4xl font-black text-slate-900 mb-8">Account Settings</h1>
                  <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 p-10 space-y-10">
                     <div className="flex flex-col md:flex-row items-center gap-10">
                        <div className="relative">
                           <div className="w-32 h-32 bg-slate-200 rounded-[2rem] flex items-center justify-center text-4xl text-slate-400 overflow-hidden">
                              JD
                           </div>
                           <button className="absolute bottom-2 right-2 p-2 bg-blue-600 text-white rounded-xl shadow-lg border-2 border-white">
                              <Settings size={18} />
                           </button>
                        </div>
                        <div className="text-center md:text-left space-y-2">
                           <h2 className="text-2xl font-black">Pastor John Doe</h2>
                           <p className="text-slate-500 font-medium">john.doe@example.com</p>
                           <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full uppercase tracking-wider">Pastor Account</span>
                        </div>
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                           <label className="text-sm font-bold text-slate-600 ml-1">Full Name</label>
                           <input type="text" defaultValue="John Doe" className="w-full px-6 py-4 bg-slate-50 border-transparent border-2 focus:border-blue-500 focus:bg-white rounded-2xl outline-none transition-all" />
                        </div>
                        <div className="space-y-3">
                           <label className="text-sm font-bold text-slate-600 ml-1">Ministry Name</label>
                           <input type="text" defaultValue="Gospel Grace Church" className="w-full px-6 py-4 bg-slate-50 border-transparent border-2 focus:border-blue-500 focus:bg-white rounded-2xl outline-none transition-all" />
                        </div>
                        <div className="space-y-3">
                           <label className="text-sm font-bold text-slate-600 ml-1">Phone Number</label>
                           <input type="text" defaultValue="+91 99XXXXXX11" className="w-full px-6 py-4 bg-slate-50 border-transparent border-2 focus:border-blue-500 focus:bg-white rounded-2xl outline-none transition-all" />
                        </div>
                        <div className="space-y-3">
                           <label className="text-sm font-bold text-slate-600 ml-1">City</label>
                           <input type="text" defaultValue="Guntur" className="w-full px-6 py-4 bg-slate-50 border-transparent border-2 focus:border-blue-500 focus:bg-white rounded-2xl outline-none transition-all" />
                        </div>
                     </div>

                     <div className="pt-6 border-t border-slate-100 flex justify-end">
                        <button className="px-8 py-4 bg-blue-600 text-white font-black rounded-2xl shadow-xl shadow-blue-100 hover:scale-[1.02] transition-all">
                           Save Changes
                        </button>
                     </div>
                  </div>
               </motion.div>
            )}
         </div>
      </main>
    </div>
  );
}
