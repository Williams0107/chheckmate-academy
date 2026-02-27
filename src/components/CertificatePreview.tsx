"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trophy, Download, Share2, Award, Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface CertificateProps {
  studentName: string;
  moduleName: string;
  date: string;
  onClose: () => void;
}

const CertificatePreview = ({ studentName, moduleName, date, onClose }: CertificateProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="max-w-4xl w-full"
      >
        <Card className="bg-white p-12 relative overflow-hidden border-[12px] border-indigo-600 shadow-2xl">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-indigo-600 -translate-x-16 -translate-y-16 rotate-45" />
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600 translate-x-16 -translate-y-16 rotate-45" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-600 -translate-x-16 translate-y-16 rotate-45" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-indigo-600 translate-x-16 translate-y-16 rotate-45" />
          
          <div className="text-center relative z-10">
            <div className="flex justify-center mb-8">
              <div className="bg-indigo-50 p-4 rounded-full">
                <Trophy className="h-16 w-16 text-indigo-600" />
              </div>
            </div>
            
            <h1 className="text-5xl font-serif font-bold text-slate-900 mb-4 tracking-tight">Certificate of Achievement</h1>
            <p className="text-xl text-slate-500 italic mb-12">This is to certify that</p>
            
            <div className="mb-12">
              <h2 className="text-6xl font-bold text-indigo-600 border-b-4 border-indigo-100 inline-block px-8 pb-2">{studentName}</h2>
            </div>
            
            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              has successfully completed the <span className="font-bold text-slate-900">{moduleName}</span> module 
              at Checkmate Academy, demonstrating exceptional tactical awareness and strategic thinking.
            </p>
            
            <div className="grid grid-cols-3 gap-12 items-end mt-16">
              <div className="text-center">
                <div className="border-b-2 border-slate-300 pb-2 mb-2">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Jon_Fosse_signature.svg" alt="Signature" className="h-12 mx-auto opacity-50" />
                </div>
                <p className="text-xs font-bold text-slate-400 uppercase">Grandmaster Coach</p>
              </div>
              
              <div className="flex justify-center">
                <div className="w-24 h-24 rounded-full border-4 border-indigo-600 flex items-center justify-center relative">
                  <Award className="h-12 w-12 text-indigo-600" />
                  <div className="absolute inset-0 border-2 border-dashed border-indigo-200 rounded-full animate-spin-slow" />
                </div>
              </div>
              
              <div className="text-center">
                <div className="border-b-2 border-slate-300 pb-2 mb-2">
                  <p className="text-lg font-bold text-slate-900">{date}</p>
                </div>
                <p className="text-xs font-bold text-slate-400 uppercase">Date of Issue</p>
              </div>
            </div>
          </div>
        </Card>
        
        <div className="mt-8 flex justify-center gap-4">
          <Button variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20" onClick={onClose}>
            Close Preview
          </Button>
          <Button className="bg-indigo-600 hover:bg-indigo-700 px-8">
            <Download className="h-4 w-4 mr-2" />
            Download PDF
          </Button>
          <Button variant="secondary">
            <Share2 className="h-4 w-4 mr-2" />
            Share Achievement
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default CertificatePreview;