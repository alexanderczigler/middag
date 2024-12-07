import type { Recipe } from './types';

export async function getRecipes(): Promise<Recipe[]> {
  const modules = import.meta.glob('/src/lib/recipes/*.json') as Record<
    string,
    () => Promise<{ default: Recipe }>
  >;

  const recipes: Recipe[] = [];

  // Load each recipe found in the path.
  for (const path in modules) {
    const module = await modules[path]();
    recipes.push(module.default);
  }

  // Set slug from the recipe title.
  recipes.forEach((recipe) => {
    recipe.slug = recipe.slug || recipe.title.toLowerCase().replace(/ /g, '-');
  });

  return recipes;
}
