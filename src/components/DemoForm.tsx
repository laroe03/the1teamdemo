import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';

interface DemoFormProps {
  onSubmit: (url: string, botId: string) => void;
}

export function DemoForm({ onSubmit }: DemoFormProps) {
  const [url, setUrl] = useState('');
  const [botId, setBotId] = useState('41064');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      new URL(url);
      onSubmit(url, botId);
    } catch {
      setError('Please enter a valid URL (including https://)');
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <h3 className="text-2xl font-semibold text-white mb-8 text-center">
        Try our Chatbot on your website.
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="websiteUrl" className="block text-sm font-medium text-gray-300 mb-2">
            Enter Website URL
          </label>
          <input
            type="text"
            id="websiteUrl"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com"
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg 
                     text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 
                     focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label htmlFor="botId" className="block text-sm font-medium text-gray-300 mb-2">
            Enter Bot ID
          </label>
          <input
            type="text"
            id="botId"
            value={botId}
            onChange={(e) => setBotId(e.target.value)}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg 
                     text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 
                     focus:border-transparent transition-all"
          />
        </div>

        {error && (
          <div className="flex items-center gap-2 text-red-400">
            <AlertCircle size={16} />
            <span className="text-sm">{error}</span>
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 
                   rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 
                   transition-all duration-200 transform hover:scale-[1.02]"
        >
          Open Chatbot
        </button>
      </form>
    </div>
  );
}