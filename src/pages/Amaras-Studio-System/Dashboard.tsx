 import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, Calendar, Users, Camera, 
  BarChart3, UserCog, LogOut, UserCircle
} from 'lucide-react';
import { cn } from '../../lib/utils';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

// Import ng iyong original/kasalukuyang dashboards
import AdminDashboard from '../Admindashboard'; 
import StaffDashboard from '../Staffdashboard';
import ClientDashboard from '../Clientdashboard';

interface MenuItem {
  name: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

export const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string>('Dashboard');
  
  const userRole = (user?.role || 'client') as 'admin' | 'staff' | 'client'; 

  // --- SIDEBAR MENU GENERATOR BASE SA ROLE ---
  const getMenuItems = (): MenuItem[] => {
    switch (userRole) {
      case 'admin':
        return [
          { name: 'Dashboard', icon: LayoutDashboard },
          { name: 'Bookings', icon: Calendar },
          { name: 'Clients Directory', icon: Users },
          { name: 'Staff Management', icon: UserCircle }, 
          { name: 'Services', icon: Camera },
          { name: 'Reports', icon: BarChart3 },
        ];
      case 'staff':
        return [
          { name: 'Dashboard', icon: LayoutDashboard },
          { name: 'Bookings', icon: Calendar },
          { name: 'Services Catalog', icon: Camera },
        ];
      case 'client':
        return [
          { name: 'Dashboard', icon: LayoutDashboard },
          { name: 'My Bookings', icon: Calendar },
        ];
      default:
        return [{ name: 'Dashboard', icon: LayoutDashboard }];
    }
  };

  const menuItems = getMenuItems();

  useEffect(() => {
    setActiveTab('Dashboard');
  }, [userRole]);

  const handleLogout = async () => {
    if (logout) {
      try {
        await logout();
        navigate('/login');
      } catch (error) {
        console.error("Logout failed:", error);
      }
    }
  };

  // --- DATA AT TABLES PARA SA MGA SUB-SECTIONS (ADMIN ONLY) ---
  const adminBookings = [
    { id: 'BK-101', client: 'Maria Santos', service: 'Graduation', date: 'Oct 24, 2023', time: '9:00 AM', status: 'Confirmed' },
    { id: 'BK-102', client: 'Juan Dela Cruz', service: 'Portrait', date: 'Oct 24, 2023', time: '1:00 PM', status: 'Confirmed' },
    { id: 'BK-103', client: 'Caila Ecle', service: 'Wedding', date: 'Oct 28, 2023', time: '8:00 AM', status: 'Pending' },
    { id: 'BK-104', client: 'Danica Magat', service: 'Pageants', date: 'Nov 02, 2023', time: '2:00 PM', status: 'In Progress' }
  ];

  const clientDirectory = [
    { id: 'CL-001', name: 'Maria Santos', email: 'maria@gmail.com', phone: '09123456789', totalBookings: 2 },
    { id: 'CL-002', name: 'Juan Dela Cruz', email: 'juan@gmail.com', phone: '09876543210', totalBookings: 1 },
    { id: 'CL-003', name: 'Caila Ecle', email: 'caila@gmail.com', phone: '09152436781', totalBookings: 4 },
    { id: 'CL-004', name: 'Danica Magat', email: 'danica@gmail.com', phone: '09261543789', totalBookings: 3 }
  ];

  const staffDirectory = [
    { id: 'ST-01', name: 'Edgardo Mendes', status: 'Active' },
    { id: 'ST-02', name: 'Nathan Fernandes', status: 'Active' },
    { id: 'ST-03', name: 'kristine Vargas', status: 'Active' },
    { id: 'ST-04', name: 'Andrea Mae Vinzon', status: 'Active' }
  ];

  const dynamicServices = [
    { name: 'Party or Any Celebration', basePrice: '₱5,000', duration: '3 Hours', description: 'Birthdays, anniversaries, or general celebrations.' },
    { name: 'Wedding', basePrice: '₱15,000', duration: '6 Hours', description: 'Full wedding day photo coverage and documentation.' },
    { name: 'Birthday', basePrice: '₱4,500', duration: '3 Hours', description: 'Special dedication photoshoot layouts.' },
    { name: 'Pageants', basePrice: '₱8,000', duration: '4 Hours', description: 'High-fashion and on-stage competitive photography.' } // Idinagdag ang Pageants
  ];

  return (
    <div className="flex min-h-screen bg-[#E2E8F0] font-sans text-slate-700">
      
      {/* --- SIDEBAR PANEL --- */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col sticky top-0 h-screen z-30">
        <div className="p-6 flex items-center gap-2">
          <div className="w-8 h-8 bg-[#8A6767] rounded-lg flex items-center justify-center text-white font-bold">A</div>
          <h1 className="text-lg font-bold tracking-tight text-slate-800 uppercase">AMARAS STUDIO</h1>
        </div>
        
        <nav className="flex-1 px-4 space-y-1 mt-4">
          {menuItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <button
                key={`${item.name}-${index}`}
                onClick={() => setActiveTab(item.name)}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all",
                  activeTab === item.name 
                    ? "bg-[#A3C1C1] text-slate-800 shadow-sm" 
                    : "text-slate-500 hover:bg-slate-100"
                )}
              >
                <IconComponent size={20} />
                {item.name}
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-100 mt-auto">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-slate-400 text-sm font-bold hover:text-red-500 transition-colors"
          >
            <LogOut size={20} /> Logout
          </button>
        </div>
      </aside>

      {/* --- MAIN FRAME CONTENT --- */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header Navbar */}
        <header className="bg-[#A3C1C1] px-8 py-3 flex justify-between items-center sticky top-0 z-20 shadow-sm">
          <div className="text-sm font-bold text-slate-800 uppercase tracking-wide">
            AMARAS STUDIO | <span className="text-red-800 font-black">{userRole} MODE</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-slate-800 font-semibold text-sm">
              <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center">
                <UserCircle size={18} className="text-slate-600" />
              </div>
              <span className="uppercase text-xs">{user?.email || `${userRole} user`}</span>
            </div>
            <button onClick={handleLogout} className="text-slate-800 hover:text-red-600 transition-colors" aria-label="Logout">
              <LogOut size={20} />
            </button>
          </div>
        </header>

        {/* --- DYNAMIC VIEWPORT SWITCHER --- */}
        <div className="p-8 space-y-8 overflow-y-auto h-full">
          {(() => {
            // 1. DEFAULT DASHBOARD VIEW
            if (activeTab === 'Dashboard') {
              if (userRole === 'admin') return <AdminDashboard />;
              if (userRole === 'staff') return <StaffDashboard />;
              return <ClientDashboard />;
            }

            // 2. OTHER INDIVIDUAL VIEWPORTS
            switch (activeTab) {
              case 'Bookings':
              case 'My Bookings':
                return (
                  <div className="space-y-6 animate-in fade-in duration-200">
                    <div className="flex justify-between items-center">
                      <h2 className="text-xl font-bold text-slate-800 uppercase tracking-wider">Bookings & Reservation Logs</h2>
                      <button className="text-[11px] bg-slate-800 text-white px-3 py-1.5 rounded-xl uppercase font-bold tracking-wider hover:bg-slate-700">Add New Booking</button>
                    </div>
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs border-collapse">
                          <thead>
                            <tr className="bg-slate-50 text-slate-400 font-bold uppercase text-[10px] tracking-wider border-b border-slate-100">
                              <th className="p-4">Booking ID</th>
                              <th className="p-4">Client Name</th>
                              <th className="p-4">Event Type</th>
                              <th className="p-4">Schedule</th>
                              <th className="p-4">Status</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                            {adminBookings.map((b) => (
                              <tr key={b.id} className="hover:bg-slate-50/50 transition-colors">
                                <td className="p-4 font-bold text-slate-800">{b.id}</td>
                                <td className="p-4">{b.client}</td>
                                <td className="p-4">{b.service}</td>
                                <td className="p-4">{b.date} ({b.time})</td>
                                <td className="p-4">
                                  <span className={`text-[9px] px-2 py-0.5 rounded-full font-black uppercase ${
                                    b.status === 'Confirmed' ? 'bg-emerald-50 text-emerald-600' :
                                    b.status === 'Pending' ? 'bg-amber-50 text-amber-600' : 'bg-blue-50 text-blue-600'
                                  }`}>{b.status}</span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                );

              case 'Clients Directory':
                return (
                  <div className="space-y-6 animate-in fade-in duration-200">
                    <h2 className="text-xl font-bold text-slate-800 uppercase tracking-wider">Registered Clients Directory</h2>
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs border-collapse">
                          <thead>
                            <tr className="bg-slate-50 text-slate-400 font-bold uppercase text-[10px] tracking-wider border-b border-slate-100">
                              <th className="p-4">Client ID</th>
                              <th className="p-4">Full Name</th>
                              <th className="p-4">Email Address</th>
                              <th className="p-4">Contact Number</th>
                              <th className="p-4 text-center">Total Sessions</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                            {clientDirectory.map((c) => (
                              <tr key={c.id} className="hover:bg-slate-50/50 transition-colors">
                                <td className="p-4 font-bold text-slate-400">{c.id}</td>
                                <td className="p-4 font-bold text-slate-800">{c.name}</td>
                                <td className="p-4 text-slate-500">{c.email}</td>
                                <td className="p-4">{c.phone}</td>
                                <td className="p-4 text-center font-bold text-cyan-600">{c.totalBookings} Bookings</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                );

              case 'Staff Management':
                return (
                  <div className="space-y-6 animate-in fade-in duration-200">
                    <div className="flex justify-between items-center">
                      <h2 className="text-xl font-bold text-slate-800 uppercase tracking-wider">Studio Staff Personnel & Roles</h2>
                      <button className="text-[11px] bg-slate-800 text-white px-3 py-1.5 rounded-xl uppercase font-bold tracking-wider hover:bg-slate-700">Register Staff</button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {staffDirectory.map((s) => (
                        <div key={s.id} className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all">
                          <div className="flex justify-between items-start">
                            <span className="text-[9px] font-black text-slate-400 uppercase">{s.id}</span>
                            <span className="text-[8px] bg-emerald-50 text-emerald-600 px-1.5 py-0.5 rounded font-black uppercase">{s.status}</span>
                          </div>
                          <h4 className="text-xs font-bold text-slate-800 mt-3">{s.name}</h4>
                          <p className="text-[10px] text-slate-400 font-semibold mt-0.5 uppercase tracking-wide">{s.role}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                );

              case 'Services':
              case 'Services Catalog':
                return (
                  <div className="space-y-6 animate-in fade-in duration-200">
                    <div className="flex justify-between items-center">
                      <h2 className="text-xl font-bold text-slate-800 uppercase tracking-wider">Photography Service Categories</h2>
                      <button className="text-[11px] bg-slate-800 text-white px-3 py-1.5 rounded-xl uppercase font-bold tracking-wider hover:bg-slate-700">Add Service</button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {dynamicServices.map((service, index) => (
                        <div key={`${service.name}-${index}`} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
                          <div>
                            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">{service.name}</h4>
                            <p className="text-xs text-slate-400 mt-2 font-medium">{service.description}</p>
                          </div>
                          <div className="mt-6 pt-4 border-t border-slate-50 flex justify-between items-center">
                            <span className="text-sm font-black text-slate-800">{service.basePrice}</span>
                            <span className="text-[9px] font-bold text-slate-400 bg-slate-50 px-2 py-0.5 rounded-full">⏱ {service.duration}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );

              case 'Reports':
                return (
                  <div className="space-y-6 animate-in fade-in duration-200">
                    <h2 className="text-xl font-bold text-slate-800 uppercase tracking-wider">Studio Performance Reports & Analytics</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Monthly Revenue Target</p>
                        <p className="text-xl font-extrabold text-slate-800 mt-2">₱50,000.00</p>
                        <div className="w-full bg-slate-100 h-1.5 rounded-full mt-4"><div className="bg-slate-800 h-1.5 rounded-full" style={{ width: '49%' }}></div></div>
                        <span className="text-[9px] text-slate-400 font-bold block mt-1.5">49% Completed of total target goal</span>
                      </div>
                      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Most Booked Category</p>
                        <p className="text-xl font-extrabold text-slate-800 mt-2">Wedding Sessions</p>
                        <span className="text-[9px] text-emerald-600 font-bold block mt-4">↑ 12% higher demand than last month</span>
                      </div>
                      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Client Retention Rate</p>
                        <p className="text-xl font-extrabold text-slate-800 mt-2">87.5%</p>
                        <span className="text-[9px] text-cyan-600 font-bold block mt-4">High tier customer satisfaction index</span>
                      </div>
                    </div>
                  </div>
                );

              default:
                return <div className="p-6 text-xs font-bold text-slate-400 uppercase">Loading view content...</div>;
            }
          })()}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;