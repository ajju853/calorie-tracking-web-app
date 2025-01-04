import React, { useState } from 'react';
import { History, Download } from 'lucide-react';
import { ImageUpload } from './ImageUpload';
import { NutritionCard } from './NutritionCard';
import { DailySummary } from './DailySummary';
import { analyzeFoodImage } from '../services/foodAnalysis';
import { downloadResults } from '../utils/downloadUtils';
import type { FoodItem } from '../types';

export function FoodLogger() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const [foodItems, setFoodItems] = useState<FoodItem[]>([]);

  const handleImageUpload = async (file: File) => {
    try {
      // Clean up previous image URL if it exists
      if (currentImage) {
        URL.revokeObjectURL(currentImage);
      }

      setIsAnalyzing(true);
      const result = await analyzeFoodImage(file);
      
      // Update current image and food items
      setCurrentImage(result.imageUrl);
      setFoodItems([result]);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleDownload = () => {
    if (foodItems.length > 0) {
      downloadResults(foodItems[0]);
    }
  };

  return (
    <div className="space-y-8">
      <section>
        <ImageUpload onImageUpload={handleImageUpload} isLoading={isAnalyzing} />
      </section>

      <section>
        <DailySummary foodItems={foodItems} />
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <History className="h-6 w-6 text-gray-600" />
            <h2 className="text-xl font-semibold text-gray-900">Today's Food Log</h2>
          </div>
          {foodItems.length > 0 && (
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Download className="h-4 w-4" />
              Download Results
            </button>
          )}
        </div>
        
        <div className="space-y-4">
          {foodItems.length === 0 ? (
            <p className="text-center text-gray-500 py-8">
              No food logged yet. Take a photo of your meal to get started!
            </p>
          ) : (
            foodItems.map((item, index) => (
              <NutritionCard key={index} item={item} />
            ))
          )}
        </div>
      </section>
    </div>
  );
}