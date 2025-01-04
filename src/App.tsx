import React from 'react';
import { Camera } from 'lucide-react';
import { Toaster } from 'react-hot-toast';
import { MainLayout } from './layouts/MainLayout';
import { FoodLogger } from './components/FoodLogger';
import { InstallPrompt } from './components/InstallPrompt';

function App() {
  return (
    <MainLayout>
      <Toaster position="top-center" />
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2">
            <Camera className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">CalorieSnapZen</h1>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <FoodLogger />
      </main>
      
      <InstallPrompt />
    </MainLayout>
  );
}

export default App;