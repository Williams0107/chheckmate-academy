"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import { showSuccess } from '@/utils/toast';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showSuccess("Message sent! We'll get back to you shortly.");
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Get in Touch</h1>
            <p className="text-xl text-slate-600 mb-12">
              Have questions about our curriculum or need help setting up your school? Our team is here to support you.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-indigo-100 p-3 rounded-xl text-indigo-600">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Email Us</h4>
                  <p className="text-slate-600">support@checkmateacademy.com</p>
                  <p className="text-slate-600">sales@checkmateacademy.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-indigo-100 p-3 rounded-xl text-indigo-600">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Call Us</h4>
                  <p className="text-slate-600">+1 (555) 123-4567</p>
                  <p className="text-sm text-slate-500">Mon-Fri, 9am-5pm EST</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-indigo-100 p-3 rounded-xl text-indigo-600">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Visit Us</h4>
                  <p className="text-slate-600">123 Grandmaster Way</p>
                  <p className="text-slate-600">New York, NY 10001</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="p-8 shadow-xl border-none">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" placeholder="Jane" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" placeholder="Doe" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="jane@example.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="How can we help?" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Tell us more about your needs..." className="min-h-[150px]" required />
              </div>
              <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 py-6 text-lg">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;