import React, { useState } from 'react';
import { 
  LayoutDashboard, Calendar, Users, Camera, Image as ImageIcon, 
  BarChart3, UserCog, LogOut, ChevronLeft, ChevronRight, 
  AlertTriangle, TrendingUp, ClipboardList, Clock, Search, Plus, Trash2, Edit, Check, X,
  UserCircle
} from 'lucide-react';
import { cn } from '../lib/utils';

export const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'Bookings', icon: Calendar },
    { name: 'Admin', icon: UserCog },
    { name: 'Clients', icon: Users },
    { name: 'Staff', icon: UserCircle }, 
    { name: 'Services', icon: Camera },
    { name: 'Reports', icon: BarChart3 },
  ];
// --- CALENDAR LOGIC ---
  const [currentDate, setCurrentDate] = useState(new Date(2023, 9, 1)); // October 2023

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const monthName = currentDate.toLocaleString('default', { month: 'long' });
  const year = currentDate.getFullYear();
  const daysInMonth = new Date(year, currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, currentDate.getMonth(), 1).getDay();
  return (
    <div className="flex min-h-screen bg-[#E2E8F0] font-sans text-slate-700">
      {/* --- SIDEBAR --- */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col sticky top-0 h-screen z-30">
        <div className="p-6 flex items-center gap-2">
          <div className="w-8 h-8 bg-[#8A6767] rounded-lg flex items-center justify-center text-white font-bold">A</div>
          <h1 className="text-lg font-bold tracking-tight text-slate-800 uppercase">Amaras Studio</h1>
        </div>
        
        <nav className="flex-1 px-4 space-y-1 mt-4">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all",
                activeTab === item.name 
                  ? "bg-[#A3C1C1] text-slate-800 shadow-sm" 
                  : "text-slate-500 hover:bg-slate-100"
              )}
            >
              <item.icon size={20} />
              {item.name}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-100 mt-auto">
          <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-400 text-sm font-bold hover:text-red-500 transition-colors">
            <LogOut size={20} /> Logout
          </button>
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar */}
        <header className="bg-[#A3C1C1] px-8 py-3 flex justify-between items-center sticky top-0 z-20 shadow-sm">
          <div className="text-sm font-bold text-slate-800 uppercase tracking-wide">
            AMARAS STUDIO | ADMIN DASHBOARD
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-slate-800 font-semibold text-sm">
             
 <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center"><Users size={16}/></div>
              Admin User
            </div>
            <button className="text-slate-800"><LogOut size={20} /></button>
          </div>
        </header>

        <div className="p-8 space-y-8 overflow-y-auto h-full">
          {(() => {
            switch (activeTab) {
          case 'Dashboard':
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-end">
        <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Dashboard</h2>
        <p className="text-sm font-semibold text-slate-500 italic">
          {currentDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
        </p>
      </div>

      {/* TOP STAT CARDS */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-emerald-400">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Total Bookings (Today)</p>
          <div className="flex items-center gap-2 mt-1">
            <h3 className="text-3xl font-bold text-slate-800">5</h3>
            <TrendingUp size={20} className="text-emerald-500" />
          </div>
          <span className="inline-block mt-2 px-3 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-bold rounded-md uppercase">Confirmed</span>
        </div>

        <div className="bg-[#FDEBD0] p-5 rounded-xl shadow-sm border-l-4 border-amber-400 relative">
          <p className="text-[10px] font-bold text-amber-800/60 uppercase">Pending Requests</p>
          <h3 className="text-3xl font-bold text-amber-900 mt-1">3</h3>
          <ClipboardList className="absolute top-4 right-4 text-amber-600 opacity-30" size={24} />
          <button className="w-full mt-3 py-1 bg-white/50 border border-amber-200 text-amber-800 text-[10px] font-bold rounded-md uppercase hover:bg-white transition-colors">
            View Requests
          </button>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-blue-400">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Revenue (This Month)</p>
          <h3 className="text-2xl font-bold text-slate-800 mt-1">₱24,500</h3>
          <div className="mt-2 h-8 w-full bg-blue-50/50 rounded flex items-end gap-1 p-1">
            <div className="h-1/2 w-full bg-blue-200 rounded-sm"></div>
            <div className="h-3/4 w-full bg-blue-300 rounded-sm"></div>
            <div className="h-full w-full bg-blue-500 rounded-sm"></div>
          </div>
        </div>

        <div className="bg-[#FEF9E7] p-5 rounded-xl shadow-sm border-l-4 border-yellow-400">
          <p className="text-[10px] font-bold text-yellow-800/60 uppercase">Active Shoots</p>
          <h3 className="text-3xl font-bold text-yellow-900 mt-1">2</h3>
          <span className="inline-block mt-2 px-3 py-1 border border-dashed border-yellow-400 text-yellow-800 text-[10px] font-bold rounded-md uppercase">In Progress</span>
        </div>
      </section>

      {/* CALENDAR & SCHEDULE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xs font-bold text-slate-800 uppercase">Automated Calendar Overview</h3>
            <div className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-md text-[10px] font-bold text-slate-500 border border-slate-200">
              <Calendar size={14} /> {monthName.substring(0,3)} {currentDate.getDate()}, {year}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 border rounded-lg overflow-hidden border-slate-100">
              <div className="bg-slate-50 p-2 flex justify-between items-center border-b text-xs font-bold">
                <button onClick={prevMonth} className="p-1.5 hover:bg-slate-200 rounded-full transition-all active:scale-95">
                  <ChevronLeft size={16} />
                </button>
                <span className="uppercase tracking-widest">{monthName} {year}</span>
                <button onClick={nextMonth} className="p-1.5 hover:bg-slate-200 rounded-full transition-all active:scale-95">
                  <ChevronRight size={16} />
                </button>
              </div>
              
              <div className="grid grid-cols-7 text-center">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
                  <div key={d} className="py-2 text-[10px] font-bold text-slate-400 border-b border-r border-slate-50 uppercase">{d}</div>
                ))}
                {/* 42 cells to cover all possible month layouts */}
                {Array.from({ length: 42 }, (_, i) => {
                  const dayNum = i - firstDayOfMonth + 1;
                  const isCurrentMonth = dayNum > 0 && dayNum <= daysInMonth;
                  const hasEvent = isCurrentMonth && [6, 24, 26, 29].includes(dayNum) && currentDate.getMonth() === 9;

                  return (
                    <div key={i} className={cn(
                      "min-h-[50px] p-1 border-b border-r border-slate-50 text-[10px] font-semibold flex flex-col",
                      isCurrentMonth ? "bg-white text-slate-600" : "bg-slate-50/50 text-transparent select-none",
                      isCurrentMonth && dayNum === 24 && currentDate.getMonth() === 9 ? "bg-cyan-50" : "hover:bg-slate-50/50 cursor-pointer"
                    )}>
                      {isCurrentMonth ? dayNum : ""}
                      {hasEvent && <div className="mt-auto mb-1 h-1 w-full bg-cyan-400 rounded-full shadow-sm"></div>}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="md:col-span-4 space-y-3">
              <div className="bg-[#D5DBDB] p-2 rounded text-[10px] font-bold text-center uppercase border-b border-slate-300">
                {monthName.substring(0,3)} 24 Schedule
              </div>
              <div className="bg-cyan-100/50 p-3 rounded-lg border-l-4 border-cyan-500 shadow-sm cursor-pointer hover:bg-cyan-100 transition-colors">
                <p className="text-[9px] font-bold text-slate-800">9:00 AM - 11:00 AM</p>
                <p className="text-[9px] text-slate-600 font-bold uppercase mt-1">Maria Santos - Graduation</p>
              </div>
              <div className="bg-amber-100/50 p-3 rounded-lg border-l-4 border-amber-500 shadow-sm cursor-pointer hover:bg-amber-100 transition-colors">
                <p className="text-[9px] font-bold text-slate-800">1:00 PM - 3:00 PM</p>
                <p className="text-[9px] text-slate-600 font-bold uppercase mt-1">Reyes Family - Portrait</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE PICTORIAL STATUS & BOOKINGS */}
        <div className="lg:col-span-4 space-y-6">
          {/* Progress Section */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-xs font-bold text-slate-800 uppercase mb-6">Pictorial Management Status</h3>
            <div className="space-y-4">
              {[{label:'In Editing', p:'33%'}, {label:'Ready for Review', p:'66%'}, {label:'Completed', p:'100%'}].map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between text-[9px] font-bold uppercase"><span>{item.label}</span><span>{item.p}</span></div>
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-cyan-400" style={{width: item.p}}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Bookings Section */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-xs font-bold text-slate-800 uppercase mb-4">Recent Bookings</h3>
            <table className="w-full text-[10px]">
              <tbody className="divide-y divide-slate-50">
                <tr className="hover:bg-slate-50 transition-colors"><td className="py-2 font-bold">Maria Santos</td><td className="text-right"><span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded font-bold">Confirmed</span></td></tr>
                <tr className="hover:bg-slate-50 transition-colors"><td className="py-2 font-bold">Juan Dela Cruz</td><td className="text-right"><span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded font-bold">Pending</span></td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

              case 'Bookings':
                return (
                  <div className="space-y-6 animate-in fade-in">
                    <h2 className="text-2xl font-bold text-slate-800">Booking Management</h2>
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                      <table className="w-full text-left text-sm">
                        <thead className="bg-slate-50 font-bold text-slate-500 uppercase text-[10px]">
                          <tr><th className="p-4">Client Name</th><th className="p-4">Service</th><th className="p-4">Date & Time</th><th className="p-4">Status</th><th className="p-4">Action</th></tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          <tr>
                            <td className="p-4 font-semibold">Maria Santos</td>
                            <td className="p-4 text-slate-500">Graduation Package</td>
                            <td className="p-4">Oct 24, 9:00 AM</td>
                            <td className="p-4"><span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-[10px] font-bold">CONFIRMED</span></td>
                            <td className="p-4 flex gap-2"><button className="p-1 bg-emerald-50 text-emerald-600 rounded"><Check size={16}/></button><button className="p-1 bg-red-50 text-red-600 rounded"><X size={16}/></button></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                );

             case 'Admin':
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* --- PAGE HEADER --- */}
      <header className="flex justify-between items-center mb-2">
        <h2 className="text-2xl font-black text-slate-800 tracking-tight uppercase">Admin Dashboard</h2>
      </header>

      {/* --- TOP STAT CARDS (REPLICATING IMAGE) --- */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Bookings:', value: '124', icon: <TrendingUp size={24} className="text-blue-500" /> },
          { label: 'Pending Bookings:', value: '18', icon: <Clock size={24} className="text-red-400" /> },
          { label: 'Revenue (MTD):', value: '₱485,000', icon: <BarChart3 size={24} className="text-emerald-500" /> },
          { label: 'Photographers Online:', value: '6/8', icon: <Users size={24} className="text-slate-400" /> },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col justify-between h-28 relative">
            <p className="text-[11px] font-bold text-slate-500">{stat.label}</p>
            <div className="flex items-end justify-between">
              <h3 className="text-3xl font-black text-slate-800">{stat.value}</h3>
              <div className="opacity-80">{stat.icon}</div>
            </div>
          </div>
        ))}
      </section>

      {/* --- PACKAGE PRICING & DETAILS SECTION --- */}
      <section className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="bg-slate-100 px-6 py-3 border-b border-slate-200">
          <h3 className="text-[12px] font-black text-slate-700 uppercase tracking-widest">Current Package Pricing & Details</h3>
        </div>

        {/* --- TABLE HEADER --- */}
        <div className="grid grid-cols-6 px-6 py-2 bg-slate-50 text-[10px] font-black text-slate-400 uppercase border-b border-slate-100">
          <div className="col-span-1">Client Name</div>
          <div className="col-span-1">Service</div>
          <div className="col-span-1">Date</div>
          <div className="col-span-1">Time</div>
          <div className="col-span-1">Status</div>
          <div className="col-span-1 text-center">Action</div>
        </div>

        {/* --- PACKAGE LISTING CONTENT --- */}
        <div className="p-6 space-y-10">
          
          {/* PACKAGE A */}
          <div className="relative border-b border-slate-100 pb-8 last:border-0">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="w-48 italic text-4xl font-serif text-slate-800">Package A</div>
              <div className="flex-1">
                <ul className="text-[11px] font-bold text-slate-600 space-y-1 uppercase list-disc ml-4">
                  <li>Unlimited Shots Photo</li>
                  <li>Edited Photo</li>
                  <li>Soft Copy</li>
                </ul>
              </div>
              <div className="bg-amber-50 px-6 py-2 rounded-lg border border-amber-100">
                <span className="text-xl font-black text-slate-800">₱3,000</span>
              </div>
            </div>
            {/* SUB-ROW: RECENT ACTIVITY FOR PACKAGE A */}
            <div className="mt-4 flex items-center justify-between bg-slate-50 p-2 rounded-lg border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-slate-200 rounded-md flex items-center justify-center text-[10px] font-bold">MS</div>
                <span className="text-[10px] font-bold text-slate-700">Maria S.</span>
                <span className="text-[10px] text-slate-500">Wedding Photography</span>
                <span className="text-[10px] text-slate-500">Apr 20, 2026</span>
                <span className="text-[10px] text-slate-500">10:00 PM</span>
                <span className="bg-emerald-500 text-white text-[9px] font-black px-2 py-0.5 rounded-full uppercase">Confirmed</span>
              </div>
              <button className="bg-slate-300 hover:bg-slate-400 text-slate-700 text-[10px] font-black px-4 py-1.5 rounded uppercase transition-colors">Manage</button>
            </div>
          </div>

          {/* PACKAGE B */}
          <div className="relative border-b border-slate-100 pb-8 last:border-0">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="w-48 italic text-4xl font-serif text-slate-800">Package B</div>
              <div className="flex-1">
                <ul className="text-[11px] font-bold text-slate-600 space-y-1 uppercase list-disc ml-4">
                  <li>Unlimited Shots (Photo)</li>
                  <li>50 Pcs 4R Hardcopy</li>
                  <li>Album</li>
                  <li>Studio Pre-Photoshoot / Outdoor</li>
                  <li>During Event (Photo Coverage)</li>
                  <li>Edited Photo</li>
                  <li>Soft Copy</li>
                  <li>1pc 8R</li>
                </ul>
              </div>
              <div className="bg-amber-50 px-6 py-2 rounded-lg border border-amber-100">
                <span className="text-xl font-black text-slate-800">₱6,000</span>
              </div>
            </div>
          </div>

          {/* PACKAGE C */}
          <div className="relative pb-4">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="w-48 italic text-4xl font-serif text-slate-800">Package C</div>
              <div className="flex-1">
                <ul className="text-[11px] font-bold text-slate-600 space-y-1 uppercase list-disc ml-4">
                  <li>Full Photo and Video Coverage</li>
                  <li>Unlimited Shots</li>
                  <li>100 Pcs 4R Hardcopy</li>
                  <li>Album</li>
                  <li>8R Picture with Frame</li>
                  <li>Free Family Picture</li>
                  <li>Studio Pre-Photoshoot / Outdoor</li>
                  <li>4 to 8 Mins Video Highlights</li>
                  <li>Edited Photo</li>
                  <li>Soft Copy</li>
                </ul>
              </div>
              <div className="bg-amber-50 px-6 py-2 rounded-lg border border-amber-100">
                <span className="text-xl font-black text-slate-800">₱14,000</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );

                

              case 'Clients':
  return (
    <div className="space-y-6 animate-in fade-in">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Client Booking Analytics</h2>
        <div className="bg-white border border-slate-200 rounded-lg px-3 py-1 text-xs font-bold text-slate-500 shadow-sm">
          Monthly View
        </div>
      </div>

      {/* --- BAR GRAPH SECTION --- */}
      <div className="bg-white p-10 rounded-2xl border border-slate-200 shadow-sm">
        {/* Main Graph Container - h-72 para sa vertical space */}
        <div className="flex items-end justify-between h-72 gap-6 px-4 border-b border-slate-100 pb-2 relative">
          {[
            { month: 'JAN', count: 45, height: 'h-[45%]', color: 'bg-slate-200' },
            { month: 'FEB', count: 52, height: 'h-[52%]', color: 'bg-slate-200' },
            { month: 'MAR', count: 85, height: 'h-[85%]', color: 'bg-[#A3C1C1]' }, // Brand Color 1
            { month: 'APR', count: 60, height: 'h-[60%]', color: 'bg-slate-200' },
            { month: 'MAY', count: 35, height: 'h-[35%]', color: 'bg-slate-200' },
            { month: 'JUN', count: 95, height: 'h-[95%]', color: 'bg-[#8A6767]' }, // Brand Color 2
          ].map((item, index) => (
            <div key={index} className="flex-1 flex flex-col items-center justify-end h-full group relative">
              {/* Tooltip on Hover */}
              <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-all bg-slate-800 text-white text-[10px] py-1 px-2 rounded font-bold shadow-lg z-10">
                {item.count} Bookings
              </div>
              
              {/* The Bar - Kinukuha ang height mula sa mapping */}
              <div 
                className={cn(
                  "w-full rounded-t-lg transition-all duration-700 ease-out cursor-pointer hover:brightness-90 shadow-sm", 
                  item.color, 
                  item.height
                )}
              ></div>
              
              {/* Month Label */}
              <span className="absolute -bottom-8 text-[11px] font-black text-slate-400 tracking-tighter uppercase">
                {item.month}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* --- SUMMARY STATS --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm border-l-4 border-[#A3C1C1]">
          <p className="text-[10px] font-bold text-slate-400 uppercase">New Clients</p>
          <h4 className="text-2xl font-bold text-slate-800 mt-1">+12</h4>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm border-l-4 border-[#8A6767]">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Pick Month</p>
          <h4 className="text-2xl font-bold text-slate-800 uppercase mt-1">June</h4>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm border-l-4 border-blue-400">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Retention Rate</p>
          <h4 className="text-2xl font-bold text-slate-800 mt-1">88%</h4>
        </div>
      </div>

      {/* --- ORIGINAL CLIENT DIRECTORY LIST --- */}
      <div className="pt-4">
        <h3 className="text-xs font-bold text-slate-400 uppercase mb-3 tracking-widest">Client Directory</h3>
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-center bg-slate-50 p-4 rounded-xl border border-slate-100">
            <div>
              <p className="font-bold uppercase text-slate-700">Maria Santos</p>
              <p className="text-xs text-slate-400 font-medium">maria@email.com | 0912-345-6789</p>
            </div>
            <div className="flex gap-4">
              <button className="hover:scale-110 transition-transform"><Edit size={18} className="text-slate-400 hover:text-blue-500"/></button>
              <button className="hover:scale-110 transition-transform"><Trash2 size={18} className="text-red-300 hover:text-red-500"/></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

case 'Staff':
                return (
                  <div className="space-y-6 animate-in fade-in">
                    <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Staff Portal</h2>
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                       <h3 className="text-xs font-black text-slate-400 uppercase mb-4 tracking-widest">Manage Bookings</h3>
                       <div className="space-y-4">
                          {[
                            { id: 1, name: 'John Doe', service: 'Portrait Session', date: 'Oct 25, 2023' },
                            { id: 2, name: 'Sarah Wilson', service: 'Wedding Shoot', date: 'Nov 02, 2023' }
                          ].map((booking) => (
                            <div key={booking.id} className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                              <div>
                                <p className="font-bold text-slate-800 uppercase text-sm">{booking.name}</p>
                                <p className="text-xs text-slate-400 font-medium">{booking.service} • {booking.date}</p>
                              </div>
                              <div className="flex gap-2">
                                <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg text-[10px] font-black uppercase transition-all flex items-center gap-1 shadow-sm">
                                  <Check size={14}/> APPROVED
                                </button>
                                <button className="bg-white border border-red-200 text-red-500 hover:bg-red-50 px-4 py-2 rounded-lg text-[10px] font-black uppercase transition-all flex items-center gap-1">
                                  <X size={14}/> REJECT
                                </button>
                              </div>
                            </div>
                          ))}
                       </div>
                    </div>
                  </div>
                );



             case 'Services':
  const celebrationServices = [
    {
      name: 'Wedding Photography',
      basePrice: '₱25,000',
      description: 'Full day coverage for your special day.',
      features: [
        'Full Day Photo & Video Coverage',
        'High-End Retouching (100 Photos)',
        'Premium Leather Wedding Album',
        'Drone/Aerial Cinematography',
        'Soft Copy via Cloud Link'
      ],
      color: 'border-rose-300'
    },
    {
      name: 'Birthday & Debut',
      basePrice: '₱8,500',
      description: 'Capture the milestone moments.',
      features: [
        '4 Hours Coverage',
        'Themed Portrait Session',
        '50 Pcs 4R Hardcopy Prints',
        'Guest On-site Studio Setup',
        'Edited Digital Copies'
      ],
      color: 'border-amber-300'
    },
    {
      name: 'Pageants',
      basePrice: '₱2,000',
      description: 'Ideal for anniversaries, reunions, or corporate parties.',
      features: [
        '3 Hours Event Coverage',
        'Unlimited Digital Shots',
        'Candid & Group Portraits',
        'Basic Color Correction',
        'Next-Day Preview Gallery'
      ],
      color: 'border-[#A3C1C1]'
    },
  ];

  return (<div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between i
    tems-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Service Management</h2>
          <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Event & Celebration Packages</p>
        </div>
        <button className="bg-[#8A6767] text-white px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-sm hover:bg-[#765656] transition-all flex items-center gap-2">
          <Plus size={16} /> Create New Package
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {celebrationServices.map((service, index) => (
          <div key={index} className={`bg-white p-8 rounded-2xl border-t-8 ${service.color} shadow-sm flex flex-col justify-between hover:shadow-md transition-all group`}>
            <div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="font-serif italic text-2xl text-slate-800">{service.name}</h4>
                  <p className="text-[10px] text-slate-400 font-bold uppercase mt-1 tracking-tight">{service.description}</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl text-slate-300 group-hover:text-[#A3C1C1] transition-colors">
                  <Camera size={24} />
                </div>
              </div>
              
              <ul className="space-y-3 my-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-[10px] font-bold text-slate-600 uppercase tracking-tight">
                    <Check size={14} className="text-emerald-500" /> {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-slate-50 flex justify-between items-center">
              <div>
                <span className="text-[9px] font-black text-slate-400 uppercase block">Starting at</span>
                <span className="text-2xl font-black text-slate-800">{service.basePrice}</span>
              </div>
              <div className="flex gap-2">
                <button className="p-2 text-slate-400 hover:text-blue-500 transition-colors">
                  <Edit size={18} />
                </button>
                <button className="p-2 text-slate-400 hover:text-red-500 transition-colors">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
case 'Reports':
        return (
          <div className="space-y-6 animate-in fade-in duration-500 pb-10">
            {/* --- HEADER --- */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h2 className="text-2xl font-black text-slate-800 tracking-tight uppercase">System Reports</h2>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Data Analytics & Financial Overview</p>
              </div>
              <div className="flex gap-2">
                <div className="flex items-center gap-2 bg-white border border-slate-200 px-3 py-2 rounded-xl shadow-sm">
                  <Calendar size={14} className="text-[#8A6767]" />
                  <span className="text-[10px] font-black text-slate-600 uppercase">April 2026</span>
                </div>
                {/* Fixed the missing Download icon reference if not imported, or used BarChart3 instead */}
                <button className="flex items-center gap-2 bg-[#8A6767] text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-[#765656] transition-all shadow-md">
                  <BarChart3 size={14} /> Export Report
                </button>
              </div>
            </div>

            {/* --- KPI STATS --- */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Gross Revenue', value: '₱542,200', trend: '+12.5%', color: 'text-emerald-500', border: 'border-emerald-400' },
                { label: 'Total Reservations', value: '156', trend: '+8.2%', color: 'text-blue-500', border: 'border-blue-400' },
                { label: 'Conversion Rate', value: '64%', trend: '-2.1%', color: 'text-rose-500', border: 'border-rose-400' },
                { label: 'Active Clients', value: '1,042', trend: '+15.0%', color: 'text-amber-500', border: 'border-amber-400' },
              ].map((kpi, i) => (
                <div key={i} className={`bg-white p-5 rounded-2xl border border-slate-200 border-l-4 ${kpi.border} shadow-sm`}>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">{kpi.label}</p>
                  <div className="flex justify-between items-end">
                    <h3 className="text-2xl font-black text-slate-800">{kpi.value}</h3>
                    <span className={`text-[10px] font-bold ${kpi.color}`}>{kpi.trend}</span>
                  </div>
                </div>
              ))}
            </section>

            {/* --- TABLES & CHARTS --- */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column: Service Popularity */}
              <div className="lg:col-span-1 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-[11px] font-black text-slate-800 uppercase tracking-widest mb-6">Service Popularity</h3>
                <div className="space-y-4">
                  {[
                    { name: 'Weddings', percentage: 45, color: 'bg-rose-300' },
                    { name: 'Birthdays', percentage: 30, color: 'bg-amber-300' },
                    { name: 'Pageants', percentage: 15, color: 'bg-[#A3C1C1]' },
                    { name: 'Graduation', percentage: 50, color: 'bg-slate-500' },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-[10px] font-bold text-slate-600 mb-1 uppercase">
                        <span>{item.name}</span>
                        <span>{item.percentage}%</span>
                      </div>
                      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                        <div className={`${item.color} h-full`} style={{ width: `${item.percentage}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Financial Logs */}
              <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center">
                  <h3 className="text-[11px] font-black text-slate-800 uppercase tracking-widest">Financial Logs</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-slate-50 text-[9px] font-black text-slate-400 uppercase tracking-widest">
                        <th className="px-6 py-4">Ref ID</th>
                        <th className="px-6 py-4">Client</th>
                        <th className="px-6 py-4">Amount</th>
                        <th className="px-6 py-4 text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                      {[
                        { id: 'TXN-9921', client: 'Alice Johnson', amount: '₱25,000', status: 'PAID' },
                        { id: 'TXN-9922', client: 'Mark Evans', amount: '₱8,500', status: 'PARTIAL' },
                      ].map((row, i) => (
                        <tr key={i} className="hover:bg-slate-50/50">
                          <td className="px-6 py-4 text-[10px] font-mono font-bold text-slate-400">{row.id}</td>
                          <td className="px-6 py-4 text-[11px] font-bold text-slate-700">{row.client}</td>
                          <td className="px-6 py-4 text-[11px] font-black text-slate-800">{row.amount}</td>
                          <td className="px-6 py-4 text-right">
                            <span className="text-[9px] font-black px-2 py-1 rounded-full bg-emerald-50 text-emerald-600">{row.status}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        );

              default:
                return null;
            }
          })()}
        </div>
      </main>
    </div>
  );
};