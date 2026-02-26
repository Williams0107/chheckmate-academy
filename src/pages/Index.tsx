"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  BookOpen, 
  Users, 
  BarChart3, 
  Trophy, 
  CheckCircle2, 
  School, 
  Home,
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import { MadeWithDyad } from '@/components/made-with-dyad';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                The Future of <span className="text-indigo-600">Chess Education</span> in Schools.
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                A structured digital curriculum, tracking, and assessment system designed for schools, academies, and parents. Empowering the next generation of grandmasters.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-lg px-8" asChild>
                  <Link to="/signup">Start Free Trial</Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                  <Link to="/curriculum">View Curriculum</Link>
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-4 text-sm text-slate-500">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden">
                      <img src={`https://i.pravatar.cc/150?u=${i}`} alt="User" />
                    </div>
                  ))}
                </div>
                <p>Trusted by 500+ schools worldwide</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-indigo-100 rounded-3xl p-8 relative">
                <img 
                  src="https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=800" 
                  alt="Chess Platform" 
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Trophy className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium uppercase">New Achievement</p>
                    <p className="font-bold text-slate-900">Scholar's Mate Master</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Built for Every Learning Environment</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Whether you're a large school district or a homeschooling parent, our platform scales to your needs.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: School, title: "Schools & Districts", desc: "Full classroom management, teacher tools, and district-wide reporting." },
              { icon: Users, title: "Chess Academies", desc: "Professional tools for coaches to manage multiple groups and track progress." },
              { icon: Home, title: "Parents & Homeschool", desc: "Structured self-paced learning with parent monitoring and reports." }
            ].map((item, idx) => (
              <Card key={idx} className="p-8 hover:shadow-xl transition-shadow border-none bg-white">
                <div className="bg-indigo-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                  <item.icon className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 mb-6">{item.desc}</p>
                <Link to="/signup" className="text-indigo-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Modules */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">A Serious MVP for Serious Results</h2>
              <div className="space-y-6">
                {[
                  { title: "Structured Curriculum", desc: "Beginner to Advanced levels with interactive board demonstrations and practice drills.", icon: BookOpen },
                  { title: "Interactive Board Engine", desc: "Real-time move validation, mistake highlighting, and legal move suggestions.", icon: Trophy },
                  { title: "Assessment Engine", desc: "Auto-graded puzzles and timed tactical exercises to measure real progress.", icon: CheckCircle2 },
                  { title: "Analytics Dashboard", desc: "Deep insights into completion rates, puzzle accuracy, and specific weakness areas.", icon: BarChart3 }
                ].map((feature, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1 bg-indigo-600 rounded-full p-1 shrink-0">
                      <CheckCircle2 className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{feature.title}</h4>
                      <p className="text-slate-600">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-900 rounded-3xl p-10 text-white">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">Teacher Dashboard</h3>
                <p className="text-slate-400">Monitor your entire class at a glance.</p>
              </div>
              <div className="space-y-4">
                <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Class Progress (Intermediate)</span>
                    <span className="text-sm font-bold text-indigo-400">78%</span>
                  </div>
                  <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                    <div className="bg-indigo-500 h-full w-[78%]"></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                    <p className="text-xs text-slate-400 uppercase mb-1">Avg. Accuracy</p>
                    <p className="text-2xl font-bold">92%</p>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                    <p className="text-xs text-slate-400 uppercase mb-1">Puzzles Solved</p>
                    <p className="text-2xl font-bold">1,240</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Trophy className="h-8 w-8 text-indigo-400" />
                <span className="text-2xl font-bold">Checkmate Academy</span>
              </div>
              <p className="text-slate-400 max-w-sm">
                The world's leading digital chess curriculum platform for educational institutions and dedicated parents.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Platform</h4>
              <ul className="space-y-2 text-slate-400">
                <li><Link to="/curriculum" className="hover:text-white">Curriculum</Link></li>
                <li><Link to="/features" className="hover:text-white">Features</Link></li>
                <li><Link to="/pricing" className="hover:text-white">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-slate-400">
                <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
                <li><Link to="/docs" className="hover:text-white">Documentation</Link></li>
                <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 flex flex-col md:row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">© 2024 Checkmate Academy. All rights reserved.</p>
            <MadeWithDyad />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;