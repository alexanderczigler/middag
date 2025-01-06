import type { Recipes } from './recipes';

export type Meals = {
  lunch: Recipes;
  dinner: Recipes;
};

export type Menu = {
  [date: string]: Meals;
};
