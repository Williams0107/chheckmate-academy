"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Bell, Shield, CreditCard } from 'lucide-react';

const Settings = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Settings</h1>
        
        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="bg-white border p-1">
            <TabsTrigger value="profile" className="data-[state=active]:bg-indigo-50 data-[state=active]:text-indigo-600">
              <User className="h-4 w-4 mr-2" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="notifications" className="data-[state=active]:bg-indigo-50 data-[state=active]:text-indigo-600">
              <Bell className="h-4 w-4 mr-2" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="security" className="data-[state=active]:bg-indigo-50 data-[state=active]:text-indigo-600">
              <Shield className="h-4 w-4 mr-2" />
              Security
            </TabsTrigger>
            <TabsTrigger value="billing" className="data-[state=active]:bg-indigo-50 data-[state=active]:text-indigo-600">
              <CreditCard className="h-4 w-4 mr-2" />
              Billing
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <Card className="p-6">
              <h3 className="text-lg font-bold mb-6">Profile Information</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" defaultValue="Michael" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" defaultValue="Chen" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" defaultValue="michael.chen@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Input id="bio" placeholder="Tell us about your chess journey..." />
                </div>
                <Button className="bg-indigo-600 hover:bg-indigo-700">Save Changes</Button>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="notifications">
            <Card className="p-6">
              <h3 className="text-lg font-bold mb-6">Notification Preferences</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border">
                  <div>
                    <p className="font-medium">Lesson Reminders</p>
                    <p className="text-sm text-slate-500">Get notified when it's time for your daily lesson.</p>
                  </div>
                  <Button variant="outline" size="sm">Enabled</Button>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border">
                  <div>
                    <p className="font-medium">New Achievements</p>
                    <p className="text-sm text-slate-500">Get notified when you earn a new badge.</p>
                  </div>
                  <Button variant="outline" size="sm">Enabled</Button>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Settings;