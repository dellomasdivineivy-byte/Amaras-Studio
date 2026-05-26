import React, { useState } from 'react';

interface Order {
  id: string;
  clientName: string;
  category: 'Party or Any Celebration' | 'Wedding' | 'Birthday';
  date: string;
  time: string;
  status: 'Pending' | 'Approved' | 'Rejected';
}

interface StaffDashboardProps {
  user: {
    email: string;
  };
  onLogout?: () => void;
}

export const StaffDashboard: React.FC<StaffDashboardProps> = ({ user, onLogout }) => {
  // Mock Data ng mga orders (Naka-update na sa mga bagong categories mo)
  const [orders, setOrders] = useState<Order[]>([
    {
      id: 'AMRS-101',
      clientName: 'Juan Dela Cruz',
      category: 'Wedding',
      date: 'May 28, 2026',
      time: '10:00 AM',
      status: 'Pending',
    },
    {
      id: 'AMRS-102',
      clientName: 'Maria Clara',
      category: 'Birthday',
      date: 'June 02, 2026',
      time: '2:00 PM',
      status: 'Pending',
    },
    {
      id: 'AMRS-103',
      clientName: 'Sisa Santos',
      category: 'Party or Any Celebration',
      date: 'June 15, 2026',
      time: '4:00 PM',
      status: 'Approved',
    },
  ]);

  // Function para i-update ang status ng Order (Approve o Reject)
  const handleUpdateStatus = (id: string, newStatus: 'Approved' | 'Rejected') => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 p-8 font-sans antialiased">
      
      {/* Header Section */}
      <div className="flex justify-between items-center border-b border-gray-100 pb-4 mb-8">
        <div>
          <h1 className="text-xl font-bold tracking-wider text-[#8A6767]">
            AMARAS STUDIO — STAFF PORTAL
          </h1>
          <p className="text-xs text-gray-400 mt-1">Logged in as: {user?.email || 'Staff'}</p>
        </div>
        {onLogout && (
          <button 
            onClick={onLogout} 
            className="text-xs uppercase tracking-widest text-gray-400 hover:text-red-600 font-medium transition"
          >
            Logout
          </button>
        )}
      </div>

      {/* Main Content: Order Management Section */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm font-semibold tracking-widest mb-6 uppercase text-gray-500">
          Order Verification & Real-Time Monitoring
        </h2>

        {/* Table Container */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          {orders.length === 0 ? (
            <p className="p-8 text-center text-gray-400 text-sm">No bookings or orders available today.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50 text-gray-500 uppercase text-[11px] tracking-wider">
                    <th className="p-4 font-semibold">Order ID</th>
                    <th className="p-4 font-semibold">Client Name</th>
                    <th className="p-4 font-semibold">Service Category</th>
                    <th className="p-4 font-semibold">Schedule</th>
                    <th className="p-4 font-semibold">Status</th>
                    <th className="p-4 font-semibold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {orders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50/50 transition duration-150">
                      <td className="p-4 font-mono text-xs text-gray-600 font-semibold">{order.id}</td>
                      <td className="p-4 font-medium text-gray-800">{order.clientName}</td>
                      <td className="p-4 text-gray-500 text-xs">{order.category}</td>
                      <td className="p-4 text-gray-600 text-xs">
                        <div className="font-medium">{order.date}</div>
                        <div className="text-gray-400 mt-0.5">{order.time}</div>
                      </td>
                      <td className="p-4">
                        <span
                          className={`inline-flex items-center px-2.5 py-1 text-[11px] uppercase tracking-wider rounded-full font-medium ${
                            order.status === 'Approved'
                              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                              : order.status === 'Rejected'
                              ? 'bg-rose-50 text-rose-700 border border-rose-200'
                              : 'bg-amber-50 text-amber-700 border border-amber-200'
                          }`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                            order.status === 'Approved' ? 'bg-emerald-500' : order.status === 'Rejected' ? 'bg-rose-500' : 'bg-amber-500'
                          }`} />
                          {order.status}
                        </span>
                      </td>
                      <td className="p-4 text-right space-x-2">
                        {order.status === 'Pending' ? (
                          <>
                            {/* APPROVE BUTTON */}
                            <button
                              onClick={() => handleUpdateStatus(order.id, 'Approved')}
                              className="px-3 py-1.5 bg-[#8A6767] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#735353] transition rounded-md shadow-sm"
                            >
                              Approve
                            </button>
                            {/* REJECT BUTTON */}
                            <button
                              onClick={() => handleUpdateStatus(order.id, 'Rejected')}
                              className="px-3 py-1.5 bg-white text-gray-600 border border-gray-300 text-xs font-semibold uppercase tracking-wider hover:bg-gray-50 transition rounded-md"
                            >
                              Reject
                            </button>
                          </>
                        ) : (
                          <span className="text-xs text-gray-400 italic font-light">
                            Processed
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StaffDashboard;