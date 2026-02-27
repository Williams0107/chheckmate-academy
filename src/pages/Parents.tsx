"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Heart, 
  Brain, 
  Target, 
  ShieldCheck, 
  ArrowRight,
  CheckCircle2,
  Star
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Parents = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-indigo-100 text-indigo-600 hover:bg-indigo-100 border-none px-4 py-1">For Dedicated Parents</Badge>
              <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">
                Give Your Child the <span className="text-indigo-600">Gift of Strategy.</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                Chess isn't just a game—it's a workout for the brain. Help your child develop critical thinking, patience, and problem-solving skills with our structured curriculum.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 px-8" asChild>
                  <Link to="/signup">Start 14-Day Free Trial</Link>
                </Button>
                <Button size="lg" variant="outline" className="px-8">Watch How It Works</Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1586165368502-1bad197a6461?auto=format&fit=crop&q=80&w=800" 
                alt="Child playing chess" 
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs">
                <div className="flex gap-1 mb-2">
                  {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-sm italic text-slate-600">"My son's concentration has improved immensely since he started using Checkmate Academy."</p>
                <p className="text-xs font-bold mt-2">— David K., Parent</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Chess Matters</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Research shows that children who play chess perform better in STEM subjects and develop stronger social-emotional skills.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Brain, title: "Cognitive Growth", desc: "Improves memory, concentration, and logical reasoning through complex pattern recognition." },
              { icon: Target, title: "Decision Making", desc: "Teaches children to weigh options and consider consequences before making a move." },
              { icon: Heart, title: "Emotional Intelligence", desc: "Builds resilience, sportsmanship, and the ability to learn from mistakes in a safe environment." }
            ].map((benefit, idx) => (
              <Card key={idx} className="p-8 border-none bg-slate-50 hover:shadow-lg transition-all">
                <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <benefit.icon className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Parent Tools */}
      <section className="py-20 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800" 
                alt="Parent monitoring progress" 
                className="rounded-3xl shadow-2xl opacity-90"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-8">Stay Connected to Their Progress</h2>
              <div className="space-y-6">
                {[
                  { title: "Real-time Dashboards", desc: "See exactly what your child is learning and where they excel." },
                  { title: "Weekly Email Summaries", desc: "Get a snapshot of their achievements and areas for improvement." },
                  { title: "Coach Communication", desc: "Directly message their school coach or our staff grandmasters." },
                  { title: "Achievement Alerts", desc: "Celebrate every milestone with instant notifications of new badges." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1 bg-indigo-500 rounded-full p-1 shrink-0">
                      <CheckCircle2 className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{item.title}</h4>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="mt-10 bg-indigo-600 hover:bg-indigo-700" size="lg" asChild>
                <Link to="/signup">Create Parent Account</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShieldCheck className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">A Safe, Ad-Free Environment</h2>
          <p className="text-lg text-slate-600 mb-8">
            We take student safety seriously. Our platform is COPPA compliant, completely ad-free, and features moderated social interactions to ensure a positive learning experience.
          </p>
          <Link to="/privacy" className="text-indigo-600 font-bold hover:underline">Read our Safety Commitment</Link>
        </div>
      </section>
    </div>
  );
};

import { Badge } from '@/components/ui/badge';
export default Parents;