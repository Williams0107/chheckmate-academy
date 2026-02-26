"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  School, 
  ShieldCheck, 
  BarChart3, 
  Users, 
  CheckCircle2,
  ArrowRight,
  Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Schools = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-indigo-100 text-indigo-600 hover:bg-indigo-100 border-none px-4 py-1">For Educational Institutions</Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">
            Bring Chess to Your <span className="text-indigo-600">Entire District.</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10">
            The only all-in-one platform designed for school-wide chess programs. From curriculum to district-level reporting.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 px-8">Request a Demo</Button>
            <Button size="lg" variant="outline" className="px-8">Download Brochure</Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: "COPPA Compliant", desc: "Built with student privacy as our top priority." },
              { icon: BarChart3, title: "District Analytics", desc: "Monitor progress across multiple schools and grades." },
              { icon: Users, title: "Teacher Training", desc: "We provide the tools and training for any teacher to lead." },
              { icon: Globe, title: "SSO Integration", desc: "Seamlessly connect with Google Classroom and Clever." }
            ].map((feature, idx) => (
              <div key={idx} className="text-center">
                <div className="bg-indigo-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8">Why Schools Choose Checkmate Academy</h2>
              <div className="space-y-6">
                {[
                  "Standardized curriculum aligned with educational standards.",
                  "Automated grading and assessment saves teachers hours.",
                  "Proven to improve critical thinking and math scores.",
                  "Scalable from one classroom to an entire district."
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <CheckCircle2 className="h-6 w-6 text-indigo-400 shrink-0" />
                    <p className="text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
              <Button className="mt-10 bg-indigo-600 hover:bg-indigo-700" asChild>
                <Link to="/signup">Get Started Today</Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800" 
                alt="Classroom" 
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl text-slate-900 max-w-xs">
                <p className="italic text-sm mb-4">"Checkmate Academy has transformed our after-school program. The students are more engaged than ever."</p>
                <p className="font-bold text-xs">— Sarah Jenkins, District Director</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

import { Badge } from '@/components/ui/badge';
export default Schools;