import type { Recipe } from '$lib/types';
import { getRecipes } from '$lib/getRecipes';

export async function load(): Promise<{ recipes: Recipe[] }> {
  const recipes = await getRecipes();
  console.log('recipes in load:', recipes); // Debug-log
  return { recipes };
}
