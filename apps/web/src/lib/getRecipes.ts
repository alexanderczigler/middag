import type { Recipe } from './types';

export async function getRecipes(): Promise<Recipe[]> {
  const modules = import.meta.glob('/src/lib/recipes/*.json');

  const recipes: Recipe[] = [];

  for (const path in modules) {
    const module = await modules[path]();
    recipes.push(module.default as Recipe); // Säker typ-cast till Recipe
  }

  recipes.forEach((recipe) => {
    recipe.slug = recipe.slug || recipe.title.toLowerCase().replace(/ /g, '-');
  });

  return recipes;
}
