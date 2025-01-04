import type { FoodItem, DailyStats } from '../types';

export function calculateDailyStats(foodItems: FoodItem[]): DailyStats {
  const initialStats: DailyStats = {
    totalCalories: 0,
    totalProtein: 0,
    totalCarbs: 0,
    totalFat: 0
  };

  return foodItems.reduce((stats, item) => ({
    totalCalories: stats.totalCalories + item.calories,
    totalProtein: stats.totalProtein + item.protein,
    totalCarbs: stats.totalCarbs + item.carbs,
    totalFat: stats.totalFat + item.fat
  }), initialStats);
}