"use client";

import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import ChessBoard from '@/components/ChessBoard';
import LessonQuiz from '@/components/LessonQuiz';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChevronLeft, ChevronRight, Info, Lightbulb, BookOpen, CheckCircle2 } from 'lucide-react';
import { showSuccess } from '@/utils/toast';

const quizQuestions = [
  {
    id: 1,
    text: "How many squares are on a standard chessboard?",
    options: ["32", "64", "81", "100"],
    correctIndex: 1,
    explanation: "A standard chessboard is an 8x8 grid, which equals 64 squares."
  },
  {
    id: 2,
    text: "Which square should always be a light-colored square for both players?",
    options: ["Bottom-left", "Top-left", "Bottom-right", "Center"],
    correctIndex: 2,
    explanation: "The rule is 'White on right' - the bottom-right square must be light-colored."
  }
];

const Lesson = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('learn');

  const handleQuizComplete = () => {
    showSuccess("Lesson completed! You've earned 50 XP.");
    navigate('/curriculum');
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center gap-2 mb-8">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/curriculum">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Curriculum
            </Link>
          </Button>
          <span className="text-slate-300">|</span>
          <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">Beginner Level</span>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <TabsList className="bg-white border p-1">
                <TabsTrigger value="learn" className="px-8">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Learn
                </TabsTrigger>
                <TabsTrigger value="quiz" className="px-8">
                  <CheckCircle2 className="h-4 w-4 mr-2" />
                  Quiz
                </TabsTrigger>
              </TabsList>

              <TabsContent value="learn">
                <Card className="p-6 bg-white shadow-sm mb-6">
                  <h1 className="text-3xl font-bold text-slate-900 mb-4">The Chessboard & Coordinates</h1>
                  <div className="prose prose-slate max-w-none mb-8">
                    <p className="text-lg text-slate-600 leading-relaxed">
                      Before we move the pieces, we must understand the battlefield. The chessboard is an 8x8 grid of 64 squares, alternating between light and dark colors.
                    </p>
                    <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100 flex gap-3 my-6">
                      <Info className="h-6 w-6 text-indigo-600 shrink-0" />
                      <p className="text-indigo-900 text-sm">
                        <strong>Pro Tip:</strong> Always ensure the bottom-right square is a light-colored square. "White on right!"
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex justify-center py-8 bg-slate-50 rounded-2xl border border-dashed">
                    <ChessBoard />
                  </div>
                </Card>

                <div className="flex justify-between items-center">
                  <Button variant="outline">Previous Lesson</Button>
                  <Button className="bg-indigo-600 hover:bg-indigo-700" onClick={() => setActiveTab('quiz')}>
                    Take Quiz
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="quiz">
                <LessonQuiz questions={quizQuestions} onComplete={handleQuizComplete} />
              </TabsContent>
            </Tabs>
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-white shadow-sm">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-amber-500" />
                Practice Drill
              </h3>
              <p className="text-sm text-slate-600 mb-6">
                Try moving the pieces on the board to get a feel for the grid. Can you identify the 'e4' square?
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-slate-50 rounded-lg border text-sm flex justify-between items-center">
                  <span>Identify e4 square</span>
                  <span className="text-green-600 font-bold">Done</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border text-sm flex justify-between items-center">
                  <span>Move a pawn to d4</span>
                  <Button size="sm" variant="outline">Try</Button>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-indigo-900 text-white shadow-sm">
              <h3 className="font-bold mb-2">Need Help?</h3>
              <p className="text-indigo-200 text-sm mb-4">Our AI coach is ready to assist you with this lesson.</p>
              <Button variant="secondary" className="w-full">Ask Coach</Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lesson;