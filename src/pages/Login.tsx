import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Mail, Lock, Camera, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full"
      >
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/10">
            <Camera className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-light tracking-tight text-white uppercase">Welcome</h2>
          <p className="text-white/40 text-sm mt-2 font-light">Access your Amaras Studio account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 ml-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-zinc-900 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-white/30 transition-colors"
                placeholder="name@example.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 ml-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-zinc-900 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-white/30 transition-colors"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full py-4 bg-white text-black text-xs font-bold uppercase tracking-[0.2em] rounded-xl flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors"
          >
            Sign In
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-8 text-center space-y-4">
          <p className="text-white/20 text-xs uppercase tracking-widest">Demo Accounts</p>
          <div className="flex flex-col gap-2">
            <button 
              onClick={() => { setEmail('admin@amaras.com'); setPassword('admin123'); }}
              className="text-[10px] text-white/40 hover:text-white/60 transition-colors uppercase tracking-widest"
            >
              Admin: admin@amaras.com
            </button>
           <button
            onClick={() => { setEmail('staff@amaras.com'); setPassword('UserCircle123'); }}
              className="text-[10px] text-white/40 hover:text-white/60 transition-colors uppercase tracking-widest"
            >
             staff: staff@amaras.com 
           </button>
            <button 
              onClick={() => { setEmail('client@example.com'); setPassword('user123'); }}
              className="text-[10px] text-white/40 hover:text-white/60 transition-colors uppercase tracking-widest"
            >
              Client: client@example.com
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};