import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
  botId: string;
}

export function PreviewModal({ isOpen, onClose, url, botId }: PreviewModalProps) {
  useEffect(() => {
    if (isOpen && botId) {
      const script = document.createElement('script');
      script.src = 'https://app.simplebotinstall.com/js/chat_plugin.js';
      script.setAttribute('data-bot-id', botId);
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [isOpen, botId]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="relative w-full h-full max-w-7xl mx-auto my-4">
        <button
          onClick={onClose}
          className="absolute -top-2 -right-2 bg-gray-800 text-gray-400 p-2 rounded-full
                   hover:text-white hover:bg-gray-700 transition-all z-10"
        >
          <X size={24} />
        </button>
        
        <iframe
          src={url}
          className="w-full h-full rounded-xl border border-gray-800"
          title="Website Preview"
        />
      </div>
    </div>
  );
}