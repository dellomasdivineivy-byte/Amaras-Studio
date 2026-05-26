 import React, { createContext, useContext, useState } from 'react';

interface User {
  uid: string;
  email: string;
  role: 'admin' | 'staff' | 'client';
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<User>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string): Promise<User> => {
    // 1. Simulate your API call or database check here
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let role: 'admin' | 'staff' | 'client' = 'client';

        // 2. Assign the role based on the credentials used
        if (email === 'admin@amaras.com' && password === 'admin123') {
          role = 'admin';
        } else if (email === 'staff@amaras.com' && password === 'UserCircle123') {
          role = 'staff';
        } else if (email === 'client@example.com' && password === 'user123') {
          role = 'client';
        } else {
          return reject(new Error('Invalid email or password'));
        }

        const loggedInUser: User = {
          uid: Math.random().toString(),
          email,
          role,
        };

        // 3. Save the authenticated user object to the local state
        setUser(loggedInUser);
        
        // 4. Return the user object so your Login component can read its role
        resolve(loggedInUser);
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};