"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle2, Trophy, School, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: "Parent/Student",
    price: "$14",
    period: "/month",
    description: "Perfect for individual learners and homeschooling.",
    features: [
      "Full access to all curriculum levels",
      "Unlimited tactical puzzles",
      "Progress tracking & achievements",
      "Parent monitoring dashboard",
      "AI Coach assistance"
    ],
    icon: Trophy,
    buttonText: "Start Free Trial",
    highlight: false
  },
  {
    name: "School/Classroom",
    price: "$199",
    period: "/year",
    description: "Designed for a single classroom of up to 30 students.",
    features: [
      "Everything in Parent plan",
      "Teacher dashboard & analytics",
      "Automated grading & reports",
      "Classroom management tools",
      "Printable certificates"
    ],
    icon: School,
    buttonText: "Get Started",
    highlight: true
  },
  {
    name: "District/Academy",
    price: "Custom",
    period: "",
    description: "Scalable solutions for large institutions and districts.",
    features: [
      "Everything in School plan",
      "District-wide reporting",
      "SSO & LMS Integration",
      "Dedicated account manager",
      "Teacher training workshops"
    ],
    icon: Users,
    buttonText: "Contact Sales",
    highlight: false
  }
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Choose the plan that fits your learning environment. No hidden fees.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <Card key={idx} className={`p-8 flex flex-col relative ${plan.highlight ? 'border-indigo-500 ring-2 ring-indigo-500 ring-opacity-50 shadow-xl' : 'border-none shadow-md'}`}>
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${plan.highlight ? 'bg-indigo-600 text-white' : 'bg-indigo-50 text-indigo-600'}`}>
                  <plan.icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                  <span className="text-slate-500 font-medium">{plan.period}</span>
                </div>
                <p className="text-slate-600 text-sm">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                    <span className="text-sm text-slate-600">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                className={`w-full py-6 text-lg font-bold ${plan.highlight ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-white text-indigo-600 border-2 border-indigo-600 hover:bg-indigo-50'}`}
                asChild
              >
                <Link to={plan.name === "District/Academy" ? "/contact" : "/signup"}>
                  {plan.buttonText}
                </Link>
              </Button>
            </Card>
          ))}
        </div>

        <div className="mt-20 bg-white rounded-3xl p-10 shadow-sm border text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Need a custom quote for your school?</h3>
          <p className="text-slate-600 mb-8">We offer special discounts for non-profits and Title I schools.</p>
          <Button variant="outline" size="lg" asChild>
            <Link to="/contact">Talk to our Education Team</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;