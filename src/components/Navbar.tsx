"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Trophy, Menu, X } from 'lucide-react';
import NotificationCenter from './NotificationCenter';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <Trophy className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-900">Checkmate Academy</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/curriculum" className="text-gray-600 hover:text-indigo-600 font-medium">Curriculum</Link>
            <Link to="/schools" className="text-gray-600 hover:text-indigo-600 font-medium">For Schools</Link>
            <Link to="/parents" className="text-gray-600 hover:text-indigo-600 font-medium">For Parents</Link>
            
            <div className="h-6 w-px bg-slate-200 mx-2"></div>
            
            <NotificationCenter />
            
            <Button variant="outline" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button className="bg-indigo-600 hover:bg-indigo-700" asChild>
              <Link to="/signup">Get Started</Link>
            </Button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <NotificationCenter />
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b px-4 pt-2 pb-4 space-y-1">
          <Link to="/curriculum" className="block px-3 py-2 text-gray-600 font-medium">Curriculum</Link>
          <Link to="/schools" className="block px-3 py-2 text-gray-600 font-medium">For Schools</Link>
          <Link to="/parents" className="block px-3 py-2 text-gray-600 font-medium">For Parents</Link>
          <div className="pt-4 flex flex-col gap-2">
            <Button variant="outline" className="w-full" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button className="bg-indigo-600 hover:bg-indigo-700 w-full" asChild>
              <Link to="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;