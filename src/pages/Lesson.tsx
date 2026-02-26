"use client";

import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import ChessBoard from '@/components/ChessBoard';
import LessonQuiz from '@/components/LessonQuiz';
import AICoach from '@/components/AICoach';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChevronLeft, ChevronRight, Info, Lightbulb, BookOpen, CheckCircle2, Sparkles } from 'lucide-react';
import { showSuccess } from '@/utils/toast';
import { lessonsData } from '@/data/lessons';
import { getCoachHint } from '@/utils/chessAI';
import { Chess } from 'chess.js';

const Lesson = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('learn');
  const [currentFen, setCurrentFen] = useState('start');
  const [showCoach, setShowCoach] = useState(false);
  
  const lesson = lessonsData[id as keyof typeof lessonsData];

  useEffect(() => {
    if (lesson) {
      setCurrentFen(lesson.fen);
    }
  }, [lesson]);

  if (!lesson) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Lesson not found</h2>
          <Button asChild><Link to="/curriculum">Back to Curriculum</Link></Button>
        </div>
      </div>
    );
  }

  const handleQuizComplete = () => {
    showSuccess(`Lesson "${lesson.title}" completed! You've earned 50 XP.`);
    navigate('/curriculum');
  };

  const handleMove = (move: any) => {
    // Update local FEN to keep track of board state for the coach
    const game = new Chess(currentFen === 'start' ? undefined : currentFen);
    game.move(move);
    setCurrentFen(game.fen());
  };

  const getHint = () => {
    const game = new Chess(currentFen === 'start' ? undefined : currentFen);
    return getCoachHint(game, lesson.title);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/curriculum">
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back to Curriculum
              </Link>
            </Button>
            <span className="text-slate-300">|</span>
            <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">{lesson.level} Level</span>
          </div>
          <Button 
            variant={showCoach ? "secondary" : "outline"} 
            className={showCoach ? "bg-indigo-100 text-indigo-600 border-indigo-200" : ""}
            onClick={() => setShowCoach(!showCoach)}
          >
            <Sparkles className="h-4 w-4 mr-2" />
            {showCoach ? "Hide AI Coach" : "Ask AI Coach"}
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className={showCoach ? "lg:col-span-2" : "lg:col-span-3 max-w-4xl mx-auto w-full"}>
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
                  <h1 className="text-3xl font-bold text-slate-900 mb-4">{lesson.title}</h1>
                  <div className="prose prose-slate max-w-none mb-8">
                    <p className="text-lg text-slate-600 leading-relaxed">
                      {lesson.content}
                    </p>
                    <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100 flex gap-3 my-6">
                      <Info className="h-6 w-6 text-indigo-600 shrink-0" />
                      <p className="text-indigo-900 text-sm">
                        <strong>Pro Tip:</strong> {lesson.proTip}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex justify-center py-8 bg-slate-50 rounded-2xl border border-dashed">
                    <ChessBoard fen={lesson.fen} onMove={handleMove} />
                  </div>
                </Card>

                <div className="flex justify-between items-center">
                  <Button variant="outline" asChild><Link to="/curriculum">Previous Lesson</Link></Button>
                  <Button className="bg-indigo-600 hover:bg-indigo-700" onClick={() => setActiveTab('quiz')}>
                    Take Quiz
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="quiz">
                <LessonQuiz questions={lesson.quiz} onComplete={handleQuizComplete} />
              </TabsContent>
            </Tabs>
          </div>

          {showCoach && (
            <div className="space-y-6">
              <AICoach lessonTitle={lesson.title} onGetHint={getHint} />
              
              <Card className="p-6 bg-white shadow-sm">
                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-amber-500" />
                  Practice Drill
                </h3>
                <p className="text-sm text-slate-600 mb-6">
                  {lesson.drill}
                </p>
                <Button size="sm" variant="outline" className="w-full">Start Drill</Button>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Lesson;