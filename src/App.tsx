import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DemoForm } from './components/DemoForm';
import { PreviewModal } from './components/PreviewModal';
import { WaveBackground } from './components/WaveBackground';

function App() {
  const [previewUrl, setPreviewUrl] = useState('');
  const [botId, setBotId] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDemoSubmit = (url: string, id: string) => {
    setPreviewUrl(url);
    setBotId(id);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-[#0f172a] to-gray-900 relative">
      <WaveBackground />
      <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent relative">
        <Header />
        
        <main className="pt-12 pb-20">
          <Hero />
          <DemoForm onSubmit={handleDemoSubmit} />
          
          <PreviewModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            url={previewUrl}
            botId={botId}
          />
        </main>
      </div>
    </div>
  );
}

export default App;