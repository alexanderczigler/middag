import type { Recipes } from './recipes';

export type Menu = {
  [date: string]: Recipes;
};
