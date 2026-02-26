"use client";

import React from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogFooter
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { showSuccess } from '@/utils/toast';

const AssignLessonModal = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = React.useState(false);

  const handleAssign = () => {
    showSuccess("Lesson assigned successfully to the class!");
    setOpen(false);
  };

  return (
    <div className="inline-block">
      <Button onClick={() => setOpen(true)} className="bg-indigo-600 hover:bg-indigo-700">
        {children}
      </Button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
            <div className="p-6 border-b">
              <h2 className="text-xl font-bold text-slate-900">Assign New Lesson</h2>
              <p className="text-sm text-slate-500">Select a lesson and a class to assign it to.</p>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="space-y-2">
                <Label>Select Class</Label>
                <Select defaultValue="grade5a">
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a class" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="grade5a">Grade 5 - Section A</SelectItem>
                    <SelectItem value="grade5b">Grade 5 - Section B</SelectItem>
                    <SelectItem value="advanced">Advanced Chess Club</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Select Lesson</Label>
                <Select defaultValue="b3">
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a lesson" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="b3">The Pawns & Promotion</SelectItem>
                    <SelectItem value="b4">The Minor Pieces</SelectItem>
                    <SelectItem value="i1">The Power of the Fork</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Due Date (Optional)</Label>
                <input type="date" className="w-full p-2 border rounded-md text-sm" />
              </div>
            </div>

            <div className="p-6 bg-slate-50 flex justify-end gap-3">
              <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
              <Button onClick={handleAssign} className="bg-indigo-600 hover:bg-indigo-700">Assign Lesson</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssignLessonModal;