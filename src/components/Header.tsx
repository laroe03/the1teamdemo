import React from 'react';
import { Bot } from 'lucide-react';

export function Header() {
  return (
    <header className="w-full max-w-7xl mx-auto px-6 py-8">
      <div className="flex items-center gap-3">
        <Bot size={32} className="text-purple-500" />
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
          The 1 Team Custom Bots
        </h1>
      </div>
    </header>
  );
}