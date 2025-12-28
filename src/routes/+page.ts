import { getRecipes } from '$lib/getRecipes'
import { getMenu } from '$lib/getMenu'
import type { Menu } from '$lib/types/menu'
import type { Recipe } from '$lib/types/recipe'

export async function load(): Promise<{ menu: Menu; recipes: Recipe[] }> {
  const recipes = await getRecipes()
  const menu = await getMenu()
  return { menu, recipes }
}
