"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import DashboardSidebar from '@/components/DashboardSidebar';
import MobileDashboardNav from '@/components/MobileDashboardNav';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Trophy, Medal, Crown, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const leaderboardData = [
  { rank: 1, name: 'Michael Chen', score: 1240, school: 'Greenwood High', avatar: 'M' },
  { rank: 2, name: 'Sarah Williams', score: 1185, school: 'Oakwood Academy', avatar: 'S' },
  { rank: 3, name: 'Alex Johnson', score: 1120, school: 'Greenwood High', avatar: 'A' },
  { rank: 4, name: 'Emma Davis', score: 1095, school: 'Riverside Middle', avatar: 'E' },
  { rank: 5, name: 'David Miller', score: 1050, school: 'Greenwood High', avatar: 'D' },
  { rank: 6, name: 'Sophia Garcia', score: 980, school: 'Oakwood Academy', avatar: 'S' },
  { rank: 7, name: 'James Wilson', score: 945, school: 'Riverside Middle', avatar: 'J' },
  { rank: 8, name: 'Olivia Brown', score: 910, school: 'Greenwood High', avatar: 'O' },
];

const Leaderboard = () => {
  return (
    <div className="min-h-screen bg-slate-50 pb-20 md:pb-0">
      <Navbar />
      <div className="flex">
        <DashboardSidebar role="student" />
        <main className="flex-1 p-4 md:p-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div>
                <h1 className="text-3xl font-bold text-slate-900">Leaderboard</h1>
                <p className="text-slate-500">See how you stack up against other students.</p>
              </div>
              <div className="relative w-full md:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input className="pl-10" placeholder="Search students..." />
              </div>
            </div>

            <Tabs defaultValue="global" className="space-y-6">
              <TabsList className="bg-white border p-1">
                <TabsTrigger value="global" className="px-8">Global</TabsTrigger>
                <TabsTrigger value="school" className="px-8">My School</TabsTrigger>
                <TabsTrigger value="class" className="px-8">My Class</TabsTrigger>
              </TabsList>

              <TabsContent value="global">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {/* Top 3 Podium */}
                  <Card className="p-6 flex flex-col items-center text-center border-none shadow-md order-2 md:order-1">
                    <div className="relative mb-4">
                      <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center text-2xl font-bold text-slate-600 border-4 border-slate-200">
                        {leaderboardData[1].avatar}
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-slate-400 text-white p-1.5 rounded-full">
                        <Medal className="h-4 w-4" />
                      </div>
                    </div>
                    <h3 className="font-bold text-slate-900">{leaderboardData[1].name}</h3>
                    <p className="text-sm text-slate-500 mb-2">{leaderboardData[1].school}</p>
                    <p className="text-xl font-extrabold text-slate-600">{leaderboardData[1].score}</p>
                    <span className="text-xs font-bold text-slate-400 uppercase mt-1">2nd Place</span>
                  </Card>

                  <Card className="p-8 flex flex-col items-center text-center border-indigo-200 ring-2 ring-indigo-500 ring-opacity-20 shadow-xl order-1 md:order-2 scale-105 bg-white">
                    <div className="relative mb-4">
                      <div className="w-24 h-24 rounded-full bg-indigo-100 flex items-center justify-center text-3xl font-bold text-indigo-600 border-4 border-indigo-200">
                        {leaderboardData[0].avatar}
                      </div>
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-amber-500">
                        <Crown className="h-8 w-8 fill-current" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{leaderboardData[0].name}</h3>
                    <p className="text-sm text-slate-500 mb-2">{leaderboardData[0].school}</p>
                    <p className="text-2xl font-extrabold text-indigo-600">{leaderboardData[0].score}</p>
                    <span className="text-xs font-bold text-indigo-400 uppercase mt-1">1st Place</span>
                  </Card>

                  <Card className="p-6 flex flex-col items-center text-center border-none shadow-md order-3">
                    <div className="relative mb-4">
                      <div className="w-20 h-20 rounded-full bg-amber-50 flex items-center justify-center text-2xl font-bold text-amber-600 border-4 border-amber-100">
                        {leaderboardData[2].avatar}
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-amber-600 text-white p-1.5 rounded-full">
                        <Medal className="h-4 w-4" />
                      </div>
                    </div>
                    <h3 className="font-bold text-slate-900">{leaderboardData[2].name}</h3>
                    <p className="text-sm text-slate-500 mb-2">{leaderboardData[2].school}</p>
                    <p className="text-xl font-extrabold text-amber-600">{leaderboardData[2].score}</p>
                    <span className="text-xs font-bold text-amber-400 uppercase mt-1">3rd Place</span>
                  </Card>
                </div>

                <Card className="overflow-hidden border-none shadow-md">
                  <div className="divide-y">
                    {leaderboardData.slice(3).map((user) => (
                      <div key={user.rank} className="flex items-center justify-between p-4 hover:bg-slate-50 transition-colors">
                        <div className="flex items-center gap-4">
                          <span className="w-6 text-center font-bold text-slate-400">#{user.rank}</span>
                          <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-600">
                            {user.avatar}
                          </div>
                          <div>
                            <p className="font-bold text-slate-900">{user.name}</p>
                            <p className="text-xs text-slate-500">{user.school}</p>
                          </div>
                        </div>
                        <span className="font-bold text-slate-900">{user.score}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
      <MobileDashboardNav role="student" />
    </div>
  );
};

export default Leaderboard;