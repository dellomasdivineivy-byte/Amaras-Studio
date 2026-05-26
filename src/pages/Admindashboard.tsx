 import React, { useState } from 'react';

// Uri ng mga Tabs na gagamitin para sa navigation control
type AdminTab = 'dashboard' | 'bookings' | 'clients' | 'staff' | 'services' | 'reports';

export const AdminDashboard: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<AdminTab>('dashboard');

  // SIMULATED DATA STATES
  const [services, setServices] = useState([
    { id: 1, name: 'Party or Any Celebration', price: '₱5,000', duration: '3 Hours', status: 'Active' },
    { id: 2, name: 'Wedding', price: '₱15,000', duration: '6 Hours', status: 'Active' },
    { id: 3, name: 'Birthday', price: '₱4,500', duration: '3 Hours', status: 'Active' },
    { id: 4, name: 'Pageants', price: '₱8,000', duration: '4 Hours', status: 'Active' } // Idinagdag ang Pageants category
  ]);

  const [bookings] = useState([
    { id: 'BK-101', client: 'Maria Santos', service: 'Graduation', date: 'Oct 24, 2023', time: '9:00 AM', status: 'Confirmed' },
    { id: 'BK-102', client: 'Juan Dela Cruz', service: 'Portrait', date: 'Oct 24, 2023', time: '1:00 PM', status: 'Confirmed' },
    { id: 'BK-103', client: 'Caila Ecle', service: 'Wedding', date: 'Oct 28, 2023', time: '8:00 AM', status: 'Pending' },
    { id: 'BK-104', client: 'Danica Magat', service: 'Pageants', date: 'Nov 02, 2023', time: '2:00 PM', status: 'In Progress' }
  ]);

  const [clients] = useState([
    { id: 'CL-001', name: 'Maria Santos', email: 'maria@gmail.com', phone: '09123456789', totalBookings: 2 },
    { id: 'CL-002', name: 'Juan Dela Cruz', email: 'juan@gmail.com', phone: '09876543210', totalBookings: 1 },
    { id: 'CL-003', name: 'Caila Ecle', email: 'caila@gmail.com', phone: '09152436781', totalBookings: 4 },
    { id: 'CL-004', name: 'Danica Magat', email: 'danica@gmail.com', phone: '09261543789', totalBookings: 3 }
  ]);

  const [staff] = useState([
    { id: 'ST-01', name: 'Caila Ecle', status: 'Active' },
    { id: 'ST-02', name: 'Jana Gerola', status: 'Active' },
    { id: 'ST-03', name: 'Hazel Lomero', status: 'Active' },
    { id: 'ST-04', name: 'Danica Magat', status: 'Active' }
  ]);

  return (
    <div className="space-y-6">
      
      {/* INTERNAL SUB-NAVIGATION LINKS (Para magamit mo habang inaayos ang routing connection) */}
      <div className="flex gap-2 border-b border-slate-100 pb-3 text-xs font-bold uppercase tracking-wider text-slate-400">
        <button 
          onClick={() => setActiveSubTab('dashboard')} 
          className={`pb-1 px-1 transition-all ${activeSubTab === 'dashboard' ? 'text-slate-800 border-b-2 border-slate-800' : 'hover:text-slate-600'}`}
        >
          Overview Dashboard
        </button>
        <button 
          onClick={() => setActiveSubTab('bookings')} 
          className={`pb-1 px-1 transition-all ${activeSubTab === 'bookings' ? 'text-slate-800 border-b-2 border-slate-800' : 'hover:text-slate-600'}`}
        >
          Bookings Management
        </button>
        <button 
          onClick={() => setActiveSubTab('clients')} 
          className={`pb-1 px-1 transition-all ${activeSubTab === 'clients' ? 'text-slate-800 border-b-2 border-slate-800' : 'hover:text-slate-600'}`}
        >
          Clients Directory
        </button>
        <button 
          onClick={() => setActiveSubTab('staff')} 
          className={`pb-1 px-1 transition-all ${activeSubTab === 'staff' ? 'text-slate-800 border-b-2 border-slate-800' : 'hover:text-slate-600'}`}
        >
          Staff Management
        </button>
        <button 
          onClick={() => setActiveSubTab('services')} 
          className={`pb-1 px-1 transition-all ${activeSubTab === 'services' ? 'text-slate-800 border-b-2 border-slate-800' : 'hover:text-slate-600'}`}
        >
          Services & Pageants
        </button>
        <button 
          onClick={() => setActiveSubTab('reports')} 
          className={`pb-1 px-1 transition-all ${activeSubTab === 'reports' ? 'text-slate-800 border-b-2 border-slate-800' : 'hover:text-slate-600'}`}
        >
          Reports & Analytics
        </button>
      </div>

      {/* DYNAMIC CONTENT CONTAINER */}
      <div>
        
        {/* ================= 1. DEFAULT OVERVIEW DASHBOARD ================= */}
        {activeSubTab === 'dashboard' && (
          <div className="space-y-6">
            {/* 4 STATS CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex justify-between items-start">
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Bookings (Today)</p>
                  <h3 className="text-4xl font-extrabold text-slate-800 mt-2">{bookings.filter(b => b.status === 'Confirmed').length + 3}</h3>
                  <span className="inline-block mt-3 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full uppercase tracking-wider">Confirmed</span>
                </div>
                <div className="text-emerald-500 bg-emerald-50 p-2 rounded-xl text-xs font-bold">↗</div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex justify-between items-start">
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Pending Requests</p>
                  <h3 className="text-4xl font-extrabold text-slate-800 mt-2">3</h3>
                  <button onClick={() => setActiveSubTab('bookings')} className="mt-3 text-[10px] font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-lg uppercase tracking-wider border border-amber-200 hover:bg-amber-100 transition-colors">
                    View Requests
                  </button>
                </div>
                <div className="text-amber-500 bg-amber-50 p-2 rounded-xl text-lg">📋</div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex justify-between items-start">
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Revenue (This Month)</p>
                  <h3 className="text-3xl font-extrabold text-slate-800 mt-2">₱24,500</h3>
                  <div className="flex gap-1 mt-4">
                    <div className="h-2 w-6 bg-blue-200 rounded-sm"></div>
                    <div className="h-2 w-6 bg-blue-300 rounded-sm"></div>
                    <div className="h-2 w-8 bg-blue-500 rounded-sm"></div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex justify-between items-start">
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Active Shoots</p>
                  <h3 className="text-4xl font-extrabold text-slate-800 mt-2">2</h3>
                  <span className="inline-block mt-3 text-[10px] font-bold text-amber-600 bg-amber-50 border border-amber-200 border-dashed px-2 py-0.5 rounded-full uppercase tracking-wider">In Progress</span>
                </div>
              </div>
            </div>

            {/* LOWER SECTION: CALENDAR AND STATUS */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Automated Calendar Overview</h3>
                  <div className="text-[11px] font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-lg">Oct 1, 2023</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  <div className="md:col-span-7">
                    <div className="flex justify-between items-center mb-4 px-2">
                      <button className="text-slate-400 hover:text-slate-600 font-bold">&lt;</button>
                      <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">October 2023</span>
                      <button className="text-slate-400 hover:text-slate-600 font-bold">&gt;</button>
                    </div>
                    <div className="grid grid-cols-7 gap-y-3 text-center text-[11px]">
                      {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(day => (
                        <span key={day} className="font-bold text-slate-400 text-[9px]">{day}</span>
                      ))}
                      {[...Array(31)].map((_, i) => {
                        const dayNum = i + 1;
                        return (
                          <div key={i} className="flex justify-center items-center py-1">
                            <span className={`w-6 h-6 flex items-center justify-center rounded-md font-semibold ${dayNum === 24 ? 'bg-cyan-100 text-cyan-700 font-bold' : 'text-slate-700'}`}>
                              {dayNum}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="md:col-span-5 space-y-3 flex flex-col justify-center">
                    <div className="bg-slate-200 text-slate-700 font-bold text-[10px] uppercase text-center py-1.5 rounded-md tracking-wider">Oct 24 Schedule</div>
                    <div className="bg-cyan-50 border-l-4 border-cyan-400 p-3 rounded-r-xl">
                      <p className="text-[10px] font-black text-cyan-800">9:00 AM - 11:00 AM</p>
                      <p className="text-[11px] font-bold text-slate-700 mt-1">MARIA SANTOS - GRADUATION</p>
                    </div>
                    <div className="bg-amber-50 border-l-4 border-amber-300 p-3 rounded-r-xl">
                      <p className="text-[10px] font-black text-amber-800">1:00 PM - 3:00 PM</p>
                      <p className="text-[11px] font-bold text-slate-700 mt-1">REYES FAMILY - PORTRAIT</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-5">Pictorial Management Status</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-[10px] font-bold text-slate-500 mb-1"><span>IN EDITING</span><span>33%</span></div>
                      <div className="w-full bg-slate-100 h-1.5 rounded-full"><div className="bg-cyan-400 h-1.5 rounded-full" style={{ width: '33%' }}></div></div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[10px] font-bold text-slate-500 mb-1"><span>READY FOR REVIEW</span><span>66%</span></div>
                      <div className="w-full bg-slate-100 h-1.5 rounded-full"><div className="bg-cyan-400 h-1.5 rounded-full" style={{ width: '66%' }}></div></div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[10px] font-bold text-slate-500 mb-1"><span>COMPLETED</span><span>100%</span></div>
                      <div className="w-full bg-slate-100 h-1.5 rounded-full"><div className="bg-cyan-400 h-1.5 rounded-full" style={{ width: '100%' }}></div></div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-4">Recent Bookings</h3>
                  <div className="divide-y divide-slate-50 text-[11px] font-bold text-slate-700">
                    <div className="py-2.5 flex justify-between items-center"><span>Maria Santos</span><span className="text-[9px] bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full font-black uppercase">Confirmed</span></div>
                    <div className="py-2.5 flex justify-between items-center"><span>Juan Dela Cruz</span><span className="text-[9px] bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full font-black uppercase">Confirmed</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= 2. BOOKINGS MANAGEMENT ================= */}
        {activeSubTab === 'bookings' && (
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 animate-in fade-in duration-200">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">Bookings & Reservation Management</h3>
              <button className="text-[10px] bg-slate-800 text-white px-3 py-1.5 rounded-xl uppercase font-bold tracking-wider hover:bg-slate-700">Add New Booking</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-slate-400 font-bold uppercase text-[10px] tracking-wider border-b border-slate-100">
                    <th className="p-3">Booking ID</th>
                    <th className="p-3">Client Name</th>
                    <th className="p-3">Event Type</th>
                    <th className="p-3">Schedule</th>
                    <th className="p-3">Status</th>
                    <th className="p-3 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                  {bookings.map((b) => (
                    <tr key={b.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-3 font-bold text-slate-800">{b.id}</td>
                      <td className="p-3">{b.client}</td>
                      <td className="p-3">{b.service}</td>
                      <td className="p-3">{b.date} ({b.time})</td>
                      <td className="p-3">
                        <span className={`text-[9px] px-2 py-0.5 rounded-full font-black uppercase ${
                          b.status === 'Confirmed' ? 'bg-emerald-50 text-emerald-600' :
                          b.status === 'Pending' ? 'bg-amber-50 text-amber-600' : 'bg-blue-50 text-blue-600'
                        }`}>{b.status}</span>
                      </td>
                      <td className="p-3 text-center">
                        <button className="text-[10px] font-black text-slate-400 hover:text-slate-700 uppercase tracking-tight">Manage</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ================= 3. CLIENTS DIRECTORY ================= */}
        {activeSubTab === 'clients' && (
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 animate-in fade-in duration-200">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4">Registered Clients Directory</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-slate-400 font-bold uppercase text-[10px] tracking-wider border-b border-slate-100">
                    <th className="p-3">Client ID</th>
                    <th className="p-3">Full Name</th>
                    <th className="p-3">Email Address</th>
                    <th className="p-3">Contact Number</th>
                    <th className="p-3 text-center">Total Projects</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                  {clients.map((c) => (
                    <tr key={c.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-3 font-bold text-slate-500">{c.id}</td>
                      <td className="p-3 font-bold text-slate-800">{c.name}</td>
                      <td className="p-3 text-slate-500">{c.email}</td>
                      <td className="p-3">{c.phone}</td>
                      <td className="p-3 text-center font-bold text-cyan-600">{c.totalBookings} Sessions</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ================= 4. STAFF MANAGEMENT (TAMA NA ANG SYNTAX LOGIC DITO) ================= */}
        {activeSubTab === 'staff' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-slate-800 uppercase tracking-wider">STUDIO STAFF PERSONNEL & ROLES</h2>
              <button className="text-[11px] bg-slate-800 text-white px-3 py-1.5 rounded-xl uppercase font-bold tracking-wider hover:bg-slate-700">Register Staff</button>
            </div>
            
            {/* STAFF CARDS CONTAINER */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {staff.map((s) => (
                <div key={s.id} className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all">
                  <div className="flex justify-between items-start">
                     <span className="text-[9px] font-black text-slate-400 uppercase">{s.id}</span>
                    <span className="text-[8px] bg-emerald-50 text-emerald-600 px-1.5 py-0.5 rounded font-black uppercase">{s.status}</span>
                  </div>
                  
                  {/* Pangalan lamang ang nakalagay; wala nang role element sa ibaba nito */}
                  <h4 className="text-xs font-bold text-slate-800 mt-3">{s.name}</h4>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= 5. SERVICES & PAGEANTS ================= */}
        {activeSubTab === 'services' && (
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 animate-in fade-in duration-200">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">Photography Service Categories</h3>
              <button className="text-[10px] bg-slate-800 text-white px-3 py-1.5 rounded-xl uppercase font-bold tracking-wider hover:bg-slate-700">Add Service</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {services.map((svc) => (
                <div key={svc.id} className="p-5 rounded-xl border border-slate-100 bg-white shadow-sm flex flex-col justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-slate-800 uppercase tracking-tight">{svc.name}</h4>
                    <p className="text-lg font-black text-slate-800 mt-2">{svc.price}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-50 flex justify-between items-center text-[10px] font-bold text-slate-400">
                    <span>⏱ {svc.duration}</span>
                    <span className="text-emerald-600">{svc.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= 6. REPORTS & ANALYTICS ================= */}
        {activeSubTab === 'reports' && (
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 animate-in fade-in duration-200 space-y-6">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">Studio Performance Reports</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-slate-50 rounded-xl">
                <p className="text-[10px] font-bold text-slate-400 uppercase">Monthly Target</p>
                <p className="text-lg font-extrabold text-slate-800 mt-1">₱50,000.00</p>
                <div className="w-full bg-slate-200 h-1 rounded-full mt-3"><div className="bg-slate-800 h-1 rounded-full" style={{ width: '49%' }}></div></div>
                <span className="text-[9px] text-slate-400 font-bold block mt-1">49% Completed of target</span>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl">
                <p className="text-[10px] font-bold text-slate-400 uppercase">Most Booked Category</p>
                <p className="text-lg font-extrabold text-slate-800 mt-1">Wedding</p>
                <span className="text-[9px] text-emerald-600 font-bold block mt-3">↑ 12% higher than last month</span>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl">
                <p className="text-[10px] font-bold text-slate-400 uppercase">Client Retention</p>
                <p className="text-lg font-extrabold text-slate-800 mt-1">87.5%</p>
                <span className="text-[9px] text-cyan-600 font-bold block mt-3">High customer satisfaction index</span>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default AdminDashboard;