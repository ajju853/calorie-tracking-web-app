import React from 'react';
import { PieChart, Utensils, Target } from 'lucide-react';
import type { FoodItem } from '../types';
import { calculateDailyStats } from '../utils/statsCalculator';

interface DailySummaryProps {
  foodItems: FoodItem[];
}

export function DailySummary({ foodItems }: DailySummaryProps) {
  const stats = calculateDailyStats(foodItems);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center gap-2 mb-4">
        <PieChart className="h-6 w-6 text-blue-600" />
        <h2 className="text-xl font-semibold">Daily Summary</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-lg">
          <Target className="h-8 w-8 text-blue-600" />
          <div>
            <p className="text-sm text-blue-600 font-medium">Total Calories</p>
            <p className="text-2xl font-bold">{stats.totalCalories}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-green-50 p-4 rounded-lg">
          <Utensils className="h-8 w-8 text-green-600" />
          <div>
            <p className="text-sm text-green-600 font-medium">Macros (g)</p>
            <div className="flex gap-3 text-sm">
              <span className="font-medium">P: {stats.totalProtein}</span>
              <span className="font-medium">C: {stats.totalCarbs}</span>
              <span className="font-medium">F: {stats.totalFat}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}