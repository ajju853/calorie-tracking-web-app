import { useState, useEffect } from 'react';

export function useInstallPrompt() {
  const [prompt, setPrompt] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setPrompt(e);
      setIsInstallable(true);
    };

    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const promptToInstall = async () => {
    if (prompt) {
      const result = await prompt.prompt();
      if (result.outcome === 'accepted') {
        setIsInstallable(false);
      }
    }
  };

  return { isInstallable, promptToInstall };
}