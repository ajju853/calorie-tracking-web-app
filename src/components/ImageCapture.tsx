import React, { useRef } from 'react';
import { Camera } from 'lucide-react';

interface ImageCaptureProps {
  onCapture: (file: File) => void;
}

export function ImageCapture({ onCapture }: ImageCaptureProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCapture = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onCapture(file);
    }
  };

  return (
    <div className="mt-4 flex justify-center">
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handleCapture}
        className="hidden"
      />
      <button
        onClick={() => inputRef.current?.click()}
        className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        <Camera className="h-5 w-5" />
        Take Photo
      </button>
    </div>
  );
}