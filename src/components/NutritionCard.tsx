import React from 'react';
import { Apple } from 'lucide-react';
import type { FoodItem } from '../types';

interface NutritionCardProps {
  item: FoodItem;
}

export function NutritionCard({ item }: NutritionCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center gap-3 mb-3">
        {item.imageUrl ? (
          <img 
            src={item.imageUrl} 
            alt={item.name} 
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
            <Apple className="h-6 w-6 text-green-600" />
          </div>
        )}
        <div>
          <h3 className="font-medium text-gray-900">{item.name}</h3>
          <p className="text-sm text-gray-500">
            {new Date(item.timestamp).toLocaleTimeString()}
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-50 p-2 rounded">
          <p className="text-sm text-blue-600 font-medium">Calories</p>
          <p className="text-lg font-semibold">{item.calories}</p>
        </div>
        <div className="bg-green-50 p-2 rounded">
          <p className="text-sm text-green-600 font-medium">Protein</p>
          <p className="text-lg font-semibold">{item.protein}g</p>
        </div>
        <div className="bg-yellow-50 p-2 rounded">
          <p className="text-sm text-yellow-600 font-medium">Carbs</p>
          <p className="text-lg font-semibold">{item.carbs}g</p>
        </div>
        <div className="bg-red-50 p-2 rounded">
          <p className="text-sm text-red-600 font-medium">Fat</p>
          <p className="text-lg font-semibold">{item.fat}g</p>
        </div>
      </div>
    </div>
  );
}