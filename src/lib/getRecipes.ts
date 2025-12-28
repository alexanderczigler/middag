import type { Recipe } from './types/recipe'

export async function getRecipes(): Promise<Recipe[]> {
  const modules = import.meta.glob('/src/lib/recipes/*.json') as Record<
    string,
    () => Promise<{ default: Recipe }>
  >

  const recipes: Recipe[] = []

  // Load each recipe found in the path.
  for (const path in modules) {
    const module = await modules[path]()
    const filename = path.split('/').pop()?.replace('.json', '') || ''
    recipes.push({
      ...module.default,
      slug: module.default.slug || filename
    })
  }

  return recipes
}
