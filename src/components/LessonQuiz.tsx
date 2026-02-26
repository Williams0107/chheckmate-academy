"use client";

import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Question {
  id: number;
  text: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

interface LessonQuizProps {
  questions: Question[];
  onComplete: () => void;
}

const LessonQuiz = ({ questions, onComplete }: LessonQuizProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = questions[currentIndex];

  const handleOptionSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
  };

  const handleCheckAnswer = () => {
    if (selectedOption === null) return;
    setIsAnswered(true);
    if (selectedOption === currentQuestion.correctIndex) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResults(true);
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setShowResults(false);
  };

  if (showResults) {
    return (
      <Card className="p-8 text-center">
        <div className="mb-6">
          <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="h-10 w-10 text-indigo-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Quiz Completed!</h2>
          <p className="text-slate-500">You scored {score} out of {questions.length}</p>
        </div>
        <div className="flex gap-4 justify-center">
          <Button variant="outline" onClick={handleReset}>
            <RotateCcw className="h-4 w-4 mr-2" />
            Try Again
          </Button>
          <Button className="bg-indigo-600 hover:bg-indigo-700" onClick={onComplete}>
            Finish Lesson
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6 md:p-8">
      <div className="flex justify-between items-center mb-6">
        <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Question {currentIndex + 1} of {questions.length}</span>
        <div className="flex gap-1">
          {questions.map((_, i) => (
            <div key={i} className={`h-1.5 w-8 rounded-full ${i <= currentIndex ? 'bg-indigo-600' : 'bg-slate-100'}`} />
          ))}
        </div>
      </div>

      <h3 className="text-xl font-bold text-slate-900 mb-8">{currentQuestion.text}</h3>

      <div className="space-y-3 mb-8">
        {currentQuestion.options.map((option, index) => {
          let variant = "border-slate-200 hover:border-indigo-300";
          if (isAnswered) {
            if (index === currentQuestion.correctIndex) variant = "border-green-500 bg-green-50 text-green-900";
            else if (index === selectedOption) variant = "border-red-500 bg-red-50 text-red-900";
            else variant = "border-slate-100 opacity-50";
          } else if (selectedOption === index) {
            variant = "border-indigo-600 bg-indigo-50 text-indigo-900";
          }

          return (
            <button
              key={index}
              onClick={() => handleOptionSelect(index)}
              disabled={isAnswered}
              className={`w-full p-4 text-left rounded-xl border-2 transition-all font-medium flex justify-between items-center ${variant}`}
            >
              {option}
              {isAnswered && index === currentQuestion.correctIndex && <CheckCircle2 className="h-5 w-5 text-green-600" />}
              {isAnswered && index === selectedOption && index !== currentQuestion.correctIndex && <XCircle className="h-5 w-5 text-red-600" />}
            </button>
          );
        })}
      </div>

      <AnimatePresence>
        {isAnswered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-xl mb-8 text-sm ${selectedOption === currentQuestion.correctIndex ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}
          >
            <p className="font-bold mb-1">{selectedOption === currentQuestion.correctIndex ? 'Correct!' : 'Incorrect'}</p>
            <p>{currentQuestion.explanation}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex justify-end">
        {!isAnswered ? (
          <Button 
            className="bg-indigo-600 hover:bg-indigo-700 px-8" 
            disabled={selectedOption === null}
            onClick={handleCheckAnswer}
          >
            Check Answer
          </Button>
        ) : (
          <Button className="bg-indigo-600 hover:bg-indigo-700 px-8" onClick={handleNext}>
            {currentIndex === questions.length - 1 ? 'See Results' : 'Next Question'}
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        )}
      </div>
    </Card>
  );
};

export default LessonQuiz;