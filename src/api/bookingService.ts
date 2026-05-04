export interface Booking {
  id: string;
  userId: string;
  userName: string;
  serviceId: string;
  serviceName: string;
  date: string; // YYYY-MM-DD
  time: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  createdAt: string;
}

export const TIME_SLOTS = [
  '09:00 AM', '10:00 AM', '11:00 AM',
  '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
];

const STORAGE_KEY = 'amaras_bookings';

export const bookingService = {
  getBookings: (): Booking[] => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  },

  saveBooking: (booking: Omit<Booking, 'id' | 'createdAt' | 'status'>): Booking => {
    const bookings = bookingService.getBookings();
    const newBooking: Booking = {
      ...booking,
      id: Math.random().toString(36).substr(2, 9),
      status: 'pending',
      createdAt: new Date().toISOString(),
    };
    bookings.push(newBooking);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
    return newBooking;
  },

  updateBookingStatus: (id: string, status: Booking['status']): void => {
    const bookings = bookingService.getBookings();
    const index = bookings.findIndex(b => b.id === id);
    if (index !== -1) {
      bookings[index].status = status;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
    }
  },

  getAvailableSlots: (date: string): string[] => {
    const bookings = bookingService.getBookings();
    const bookedSlots = bookings
      .filter(b => b.date === date && b.status !== 'cancelled')
      .map(b => b.time);
    
    return TIME_SLOTS.filter(slot => !bookedSlots.includes(slot));
  }
};
