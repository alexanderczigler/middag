import type { Recipe } from '$lib/types';
import { getRecipes } from '$lib/getRecipes';

export async function load({ params }): Promise<{ recipe: Recipe }> {
  const { slug } = params;

  // Hämta alla recept
  const recipes = await getRecipes();

  // Hitta receptet med matchande slug
  const recipe = recipes.find((r) => r.slug === slug);

  if (!recipe) {
    throw new Error(`Recipe with slug "${slug}" not found`);
  }

  return { recipe };
}
