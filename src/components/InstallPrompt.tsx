import React from 'react';
import { Download } from 'lucide-react';
import { useInstallPrompt } from '../hooks/useInstallPrompt';

export function InstallPrompt() {
  const { isInstallable, promptToInstall } = useInstallPrompt();

  if (!isInstallable) return null;

  return (
    <button
      onClick={promptToInstall}
      className="fixed bottom-4 right-4 flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
    >
      <Download className="h-5 w-5" />
      Add to Home Screen
    </button>
  );
}