import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Camera, Calendar, User, LogOut, LayoutDashboard, Image as ImageIcon } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { cn } from '../lib/utils';

export const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <Camera className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
            <span className="text-xl font-light tracking-widest uppercase text-white">Amaras Studio</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium text-white/70 hover:text-white transition-colors uppercase tracking-wider">Home</Link>
            {user ? (
              <>
                <Link to="/dashboard" className="text-sm font-medium text-white/70 hover:text-white transition-colors uppercase tracking-wider flex items-center gap-2">
                  <LayoutDashboard className="w-4 h-4" />
                  Dashboard
                </Link>
                {user.role === 'client' && (
                  <Link to="/gallery" className="text-sm font-medium text-white/70 hover:text-white transition-colors uppercase tracking-wider flex items-center gap-2">
                    <ImageIcon className="w-4 h-4" />
                    My Gallery
                  </Link>
                )}
                <button 
                  onClick={handleLogout}
                  className="text-sm font-medium text-red-400 hover:text-red-300 transition-colors uppercase tracking-wider flex items-center gap-2"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login" className="text-sm font-medium text-white/70 hover:text-white transition-colors uppercase tracking-wider flex items-center gap-2">
                <User className="w-4 h-4" />
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
