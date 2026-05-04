import React, { useState, useEffect } from 'react';
import { LayoutDashboard, Calendar as CalendarIcon, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { bookingService, TIME_SLOTS } from '../api/bookingService';
import { useAuth } from '../context/AuthContext';

export const Booking: React.FC = () => {
  const { user } = useAuth();
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState('');
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  const [selectedTime, setSelectedTime] = useState('');

  // Update available times kapag may napiling date
  useEffect(() => {
    if (selectedDate) {
      setAvailableSlots(bookingService.getAvailableSlots(selectedDate));
      setSelectedTime('');
    }
  }, [selectedDate]);

  // Calendar Logic: Pag-calculate ng mga araw sa buwan
  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks = Array.from({ length: firstDayOfMonth }, (_, i) => i);

  const handleDateClick = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    // Format: YYYY-MM-DD
    const formatted = date.toISOString().split('T')[0];
    setSelectedDate(formatted);
  };

  const handleConfirm = () => {
    if (!selectedDate || !selectedTime) return alert("Choose Date and Time.");
    
    bookingService.saveBooking({
      userId: user?.id || 'guest',
      userName: user?.name || 'Guest User',
      serviceId: 's1',
      serviceName: 'Portrait Session',
      date: selectedDate,
      time: selectedTime,
    });

    alert("Booking Successful!");
    window.location.href = '/dashboard';
  };

  return (
    <div className="flex min-h-screen bg-[#F2F2F2]">
      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r border-zinc-200 hidden lg:flex flex-col h-screen sticky top-0">
        <div className="p-8 border-b border-zinc-100">
          <h2 className="text-xl font-black italic uppercase">
            AMARAS <span className="text-[#8A6767]">STUDIO</span>
          </h2>
        </div>
        <nav className="p-4 space-y-2">
          <a href="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-500 hover:bg-zinc-50 font-medium">
            <LayoutDashboard size={20} /> Dashboard
          </a>
          <a href="/booking" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#8A6767] text-white shadow-md font-medium">
            <CalendarIcon size={20} /> Booking
          </a>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <header className="mb-8 text-center lg:text-left">
            <h1 className="text-3xl font-bold text-zinc-900">Book Your Session</h1>
            <p className="text-zinc-500">Pick a date and time that fits your schedule.</p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 1. VISUAL CALENDAR GRID */}
            <div className="bg-white p-6 rounded-3xl border border-zinc-100 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-bold text-[#8A6767] uppercase text-xs tracking-widest">Step 1: Select Date</h2>
                <div className="flex items-center gap-3">
                  <button onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)))} className="p-1 hover:bg-zinc-100 rounded-full"><ChevronLeft size={18}/></button>
                  <span className="font-bold text-sm min-w-[100px] text-center">
                    {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
                  </span>
                  <button onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)))} className="p-1 hover:bg-zinc-100 rounded-full"><ChevronRight size={18}/></button>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-bold text-zinc-400 mb-2">
                {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(d => <div key={d}>{d}</div>)}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {blanks.map(b => <div key={`b-${b}`} className="h-10" />)}
                {days.map(d => {
                  const dateObj = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), d);
                  const dateStr = dateObj.toISOString().split('T')[0];
                  const isSelected = selectedDate === dateStr;
                  const isPast = dateObj < new Date(new Date().setHours(0,0,0,0));

                  return (
                    <button
                      key={d}
                      disabled={isPast}
                      onClick={() => handleDateClick(d)}
                      className={`h-10 w-full rounded-xl text-xs font-bold transition-all ${
                        isSelected ? 'bg-[#8A6767] text-white shadow-lg' : 
                        isPast ? 'text-zinc-200 cursor-not-allowed' : 'hover:bg-zinc-50 text-zinc-600 border border-transparent hover:border-zinc-200'
                      }`}
                    >
                      {d}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. TIME SLOTS */}
            <div className="bg-white p-6 rounded-3xl border border-zinc-100 shadow-sm">
              <h2 className="font-bold text-[#8A6767] uppercase text-xs tracking-widest mb-6">Step 2: Available Times</h2>
              {!selectedDate ? (
                <div className="flex flex-col items-center justify-center py-12 text-zinc-400">
                  <Clock size={32} className="mb-2 opacity-20" />
                  <p className="text-sm italic">Select a date first...</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  {TIME_SLOTS.map(slot => {
                    const isTaken = !availableSlots.includes(slot);
                    return (
                      <button
                        key={slot}
                        disabled={isTaken}
                        onClick={() => setSelectedTime(slot)}
                        className={`py-3 px-4 rounded-xl text-xs font-bold border transition-all ${
                          selectedTime === slot ? 'bg-zinc-900 text-white border-zinc-900 shadow-md' : 
                          isTaken ? 'bg-zinc-50 text-zinc-200 border-zinc-100 cursor-not-allowed line-through' : 
                          'bg-white text-zinc-600 border-zinc-200 hover:border-[#8A6767]'
                        }`}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          <button 
            onClick={handleConfirm}
            className="w-full mt-8 bg-zinc-900 text-white py-5 rounded-3xl font-bold text-lg hover:opacity-90 transition-all shadow-xl active:scale-[0.98]"
          >
            CONFIRM APPOINTMENT
          </button>
        </div>
      </main>
    </div>
  );
};

export default Booking;