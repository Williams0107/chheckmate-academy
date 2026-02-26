"use client";

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Trophy, School, User, Home } from 'lucide-react';

const Signup = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState<'teacher' | 'student' | 'parent' | null>(null);

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(role === 'teacher' ? '/teacher' : role === 'parent' ? '/parent' : '/student');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link to="/" className="flex justify-center items-center gap-2 mb-6">
          <Trophy className="h-10 w-10 text-indigo-600" />
          <span className="text-2xl font-bold text-gray-900">Checkmate Academy</span>
        </Link>
        <h2 className="text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-xl">
        <Card className="py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {!role ? (
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900 text-center">How will you be using Checkmate Academy?</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <button
                  onClick={() => setRole('teacher')}
                  className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex flex-col items-center space-y-3 hover:border-indigo-500 focus:outline-none"
                >
                  <School className="h-8 w-8 text-indigo-600" />
                  <span className="text-sm font-medium text-gray-900">School/Teacher</span>
                </button>
                <button
                  onClick={() => setRole('parent')}
                  className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex flex-col items-center space-y-3 hover:border-indigo-500 focus:outline-none"
                >
                  <Home className="h-8 w-8 text-indigo-600" />
                  <span className="text-sm font-medium text-gray-900">Parent</span>
                </button>
                <button
                  onClick={() => setRole('student')}
                  className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex flex-col items-center space-y-3 hover:border-indigo-500 focus:outline-none"
                >
                  <User className="h-8 w-8 text-indigo-600" />
                  <span className="text-sm font-medium text-gray-900">Student</span>
                </button>
              </div>
              <p className="text-center text-sm text-gray-500">
                Already have an account?{' '}
                <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Sign in
                </Link>
              </p>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSignup}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-gray-500">Signing up as: <span className="text-indigo-600 capitalize font-bold">{role}</span></span>
                <button type="button" onClick={() => setRole(null)} className="text-xs text-indigo-600 hover:underline">Change</button>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="first-name">First name</Label>
                  <Input id="first-name" required />
                </div>
                <div>
                  <Label htmlFor="last-name">Last name</Label>
                  <Input id="last-name" required />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email address</Label>
                <Input id="email" type="email" required />
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
              </div>

              <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700">
                Create Account
              </Button>
            </form>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Signup;