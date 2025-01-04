// // import type { FoodItem } from '../types';

// // export async function analyzeFoodImage(file: File): Promise<FoodItem> {
// //   // Simulate API delay
// //   await new Promise(resolve => setTimeout(resolve, 1500));
  
// //   // Mock response - replace with actual API call
// //   return {
// //     name: "Mixed Salad",
// //     calories: 250,
// //     protein: 8,
// //     carbs: 20,
// //     fat: 15,
// //     timestamp: new Date(),
// //     imageUrl: URL.createObjectURL(file)
// //   };
// // }

// import type { FoodItem } from '../types';

// export async function analyzeFoodImage(file: File): Promise<FoodItem> {
//   // Simulate API delay
//   await new Promise(resolve => setTimeout(resolve, 1500));
  
//   // Mock response - replace with actual API call
//   const mockResponses: FoodItem[] = [
//     {
//       name: "Mixed Salad",
//       calories: 250,
//       protein: 8,
//       carbs: 20,
//       fat: 15,
//       timestamp: new Date(),
//       imageUrl: URL.createObjectURL(file)
//     },
//     {
//       name: "Chicken Curry",
//       calories: 400,
//       protein: 35,
//       carbs: 30,
//       fat: 20,
//       timestamp: new Date(),
//       imageUrl: URL.createObjectURL(file)
//     },
//     {
//       name: "Vegetable Stir Fry",
//       calories: 200,
//       protein: 6,
//       carbs: 25,
//       fat: 10,
//       timestamp: new Date(),
//       imageUrl: URL.createObjectURL(file)
//     },
//     {
//       name: "Pasta Alfredo",
//       calories: 600,
//       protein: 20,
//       carbs: 70,
//       fat: 25,
//       timestamp: new Date(),
//       imageUrl: URL.createObjectURL(file)
//     },
//     {
//       name: "Grilled Salmon",
//       calories: 350,
//       protein: 40,
//       carbs: 5,
//       fat: 18,
//       timestamp: new Date(),
//       imageUrl: URL.createObjectURL(file)
//     },
//     {
//       name: "Beef Steak",
//       calories: 500,
//       protein: 50,
//       carbs: 10,
//       fat: 35,
//       timestamp: new Date(),
//       imageUrl: URL.createObjectURL(file)
//     },
//     {
//       name: "Fruit Bowl",
//       calories: 150,
//       protein: 2,
//       carbs: 35,
//       fat: 1,
//       timestamp: new Date(),
//       imageUrl: URL.createObjectURL(file)
//     },
//     {
//       name: "Avocado Toast",
//       calories: 300,
//       protein: 7,
//       carbs: 25,
//       fat: 20,
//       timestamp: new Date(),
//       imageUrl: URL.createObjectURL(file)
//     }
//   ];

//   // Return a random mock response
//   return mockResponses[Math.floor(Math.random() * mockResponses.length)];
// }

// import type { FoodItem } from '../types';

// export async function analyzeFoodImage(file: File): Promise<FoodItem> {
//   // Simulate API delay
//   await new Promise(resolve => setTimeout(resolve, 1500));
  
//   // Mock response - replace with actual API call
//   const mockResponses: FoodItem[] = [
//     { name: "Mixed Salad", calories: 250, protein: 8, carbs: 20, fat: 15, timestamp: new Date(), imageUrl: URL.createObjectURL(file) },
//     { name: "Chicken Curry", calories: 400, protein: 35, carbs: 30, fat: 20, timestamp: new Date(), imageUrl: URL.createObjectURL(file) },
//     { name: "Vegetable Stir Fry", calories: 200, protein: 6, carbs: 25, fat: 10, timestamp: new Date(), imageUrl: URL.createObjectURL(file) },
//     { name: "Pasta Alfredo", calories: 600, protein: 20, carbs: 70, fat: 25, timestamp: new Date(), imageUrl: URL.createObjectURL(file) },
//     { name: "Grilled Salmon", calories: 350, protein: 40, carbs: 5, fat: 18, timestamp: new Date(), imageUrl: URL.createObjectURL(file) },
//     { name: "Beef Steak", calories: 500, protein: 50, carbs: 10, fat: 35, timestamp: new Date(), imageUrl: URL.createObjectURL(file) },
//     { name: "Fruit Bowl", calories: 150, protein: 2, carbs: 35, fat: 1, timestamp: new Date(), imageUrl: URL.createObjectURL(file) },
//     { name: "Avocado Toast", calories: 300, protein: 7, carbs: 25, fat: 20, timestamp: new Date(), imageUrl: URL.createObjectURL(file) },
//     { name: "Caesar Salad", calories: 320, protein: 10, carbs: 15, fat: 25, timestamp: new Date(), imageUrl: URL.createObjectURL(file) },
//     { name: "Margherita Pizza", calories: 700, protein: 30, carbs: 80, fat: 25, timestamp: new Date(), imageUrl: URL.createObjectURL(file) },
//     { name: "Spaghetti Carbonara", calories: 650, protein: 25, carbs: 75, fat: 30, timestamp: new Date(), imageUrl: URL.createObjectURL(file) },
//     { name: "BBQ Chicken Wings", calories: 500, protein: 45, carbs: 20, fat: 30, timestamp: new Date(), imageUrl: URL.createObjectURL(file) },
//     { name: "Vegetable Soup", calories: 150, protein: 5, carbs: 20, fat: 5, timestamp: new Date(), imageUrl: URL.createObjectURL(file) },
//     { name: "Greek Salad", calories: 280, protein: 8, carbs: 15, fat: 20, timestamp: new Date(), imageUrl: URL.createObjectURL(file) },
//     { name: "Tuna Sandwich", calories: 400, protein: 25, carbs: 40, fat: 15, timestamp: new Date(), imageUrl: URL.createObjectURL(file) },
//     { name: "Chocolate Cake", calories: 450, protein: 5, carbs: 60, fat: 20, timestamp: new Date(), imageUrl: URL.createObjectURL(file) },
//     { name: "Pancakes with Syrup", calories: 550, protein: 10, carbs: 80, fat: 15, timestamp: new Date(), imageUrl: URL.createObjectURL(file) },
//     { name: "Sushi Roll", calories: 300, protein: 20, carbs: 40, fat: 5, timestamp: new Date(), imageUrl: URL.createObjectURL(file) },
//     { name: "Egg Omelette", calories: 250, protein: 20, carbs: 2, fat: 18, timestamp: new Date(), imageUrl: URL.createObjectURL(file) },
//     { name: "Smoothie Bowl", calories: 200, protein: 10, carbs: 35, fat: 5, timestamp: new Date(), imageUrl: URL.createObjectURL(file) }
//   ];

//   // Return a random mock response
//   return mockResponses[Math.floor(Math.random() * mockResponses.length)];
// }


import type { FoodItem } from '../types';

export async function analyzeFoodImage(file: File): Promise<FoodItem> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Mock response - replace with actual API call
  const mockResponses: FoodItem[] = [
    { name: "Mixed Salad", calories: 250, protein: 8, carbs: 20, fat: 15, timestamp: new Date(), imageUrl: URL.createObjectURL(file) },
    { name: "Chicken Curry", calories: 400, protein: 35, carbs: 30, fat: 20, timestamp: new Date(), imageUrl: URL.createObjectURL(file) },
    { name: "Vegetable Stir Fry", calories: 200, protein: 6, carbs: 25, fat: 10, timestamp: new Date(), imageUrl: URL.createObjectURL(file) },
    { name: "Pasta Alfredo", calories: 600, protein: 20, carbs: 70, fat: 25, timestamp: new Date(), imageUrl: URL.createObjectURL(file) },
    { name: "Grilled Salmon", calories: 350, protein: 40, carbs: 5, fat: 18, timestamp: new Date(), imageUrl: URL.createObjectURL(file) },
    { name: "Beef Steak", calories: 500, protein: 50, carbs: 10, fat: 35, timestamp: new Date(), imageUrl: URL.createObjectURL(file) },
    { name: "Fruit Bowl", calories: 150, protein: 2, carbs: 35, fat: 1, timestamp: new Date(), imageUrl: URL.createObjectURL(file) },
    { name: "Avocado Toast", calories: 300, protein: 7, carbs: 25, fat: 20, timestamp: new Date(), imageUrl: URL.createObjectURL(file) },
    { name: "Caesar Salad", calories: 320, protein: 10, carbs: 15, fat: 25, timestamp: new Date(), imageUrl: URL.createObjectURL(file) },
    { name: "Margherita Pizza", calories: 700, protein: 30, carbs: 80, fat: 25, timestamp: new Date(), imageUrl: URL.createObjectURL(file) },
    { name: "Spaghetti Carbonara", calories: 650, protein: 25, carbs: 75, fat: 30, timestamp: new Date(), imageUrl: URL.createObjectURL(file) },
    { name: "BBQ Chicken Wings", calories: 500, protein: 45, carbs: 20, fat: 30, timestamp: new Date(), imageUrl: URL.createObjectURL(file) },
    { name: "Vegetable Soup", calories: 150, protein: 5, carbs: 20, fat: 5, timestamp: new Date(), imageUrl: URL.createObjectURL(file) },
    { name: "Greek Salad", calories: 280, protein: 8, carbs: 15, fat: 20, timestamp: new Date(), imageUrl: URL.createObjectURL(file) },
    { name: "Tuna Sandwich", calories: 400, protein: 25, carbs: 40, fat: 15, timestamp: new Date(), imageUrl: URL.createObjectURL(file) },
    { name: "Chocolate Cake", calories: 450, protein: 5, carbs: 60, fat: 20, timestamp: new Date(), imageUrl: URL.createObjectURL(file) },
    { name: "Pancakes with Syrup", calories: 550, protein: 10, carbs: 80, fat: 15, timestamp: new Date(), imageUrl: URL.createObjectURL(file) },
    { name: "Sushi Roll", calories: 300, protein: 20, carbs: 40, fat: 5, timestamp: new Date(), imageUrl: URL.createObjectURL(file) },
    { name: "Egg Omelette", calories: 250, protein: 20, carbs: 2, fat: 18, timestamp: new Date(), imageUrl: URL.createObjectURL(file) },
    { name: "Smoothie Bowl", calories: 200, protein: 10, carbs: 35, fat: 5, timestamp: new Date(), imageUrl: URL.createObjectURL(file) },
    { name: "Lentil Soup", calories: 180, protein: 12, carbs: 25, fat: 3, timestamp: new Date(), imageUrl: URL.createObjectURL(file) },
    { name: "Veggie Burger", calories: 350, protein: 15, carbs: 40, fat: 10, timestamp: new Date(), imageUrl: URL.createObjectURL(file) },
    { name: "Miso Soup", calories: 100, protein: 6, carbs: 10, fat: 4, timestamp: new Date(), imageUrl: URL.createObjectURL(file) },
    { name: "Shrimp Tacos", calories: 300, protein: 20, carbs: 35, fat: 10, timestamp: new Date(), imageUrl: URL.createObjectURL(file) },
    { name: "Roasted Chicken", calories: 450, protein: 55, carbs: 5, fat: 20, timestamp: new Date(), imageUrl: URL.createObjectURL(file) },
    { name: "Stuffed Bell Peppers", calories: 320, protein: 25, carbs: 35, fat: 10, timestamp: new Date(), imageUrl: URL.createObjectURL(file) }
  ];

  // Return a random mock response
  return mockResponses[Math.floor(Math.random() * mockResponses.length)];
}
