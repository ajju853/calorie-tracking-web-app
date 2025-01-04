import { useState, useCallback } from 'react';
import { toast } from 'react-hot-toast';
import type { FoodItem } from '../types';

export function useFoodItems() {
  const [foodItems, setFoodItems] = useState<FoodItem[]>([]);

  const addFoodItem = useCallback((item: FoodItem) => {
    setFoodItems(prev => [item, ...prev]);
    toast.success('Food item added successfully!');
  }, []);

  return {
    foodItems,
    addFoodItem
  };
}