import { getMenu } from '$lib/getMenu'
import { getRecipes } from '$lib/getRecipes'
import type { Ingredient } from '$lib/types/ingredient'
import type { Menu } from '$lib/types/menu'

export async function load({ url }): Promise<{
  ingredients: Ingredient[]
  menu: Menu
  pantry: string[]
  sides: string[]
}> {
  const from: string = url.searchParams.get('from') || ''
  const menu = await getMenu(from)
  const recipes = await getRecipes()
  const plannedRecipeSlugs = Object.values(menu)
  const plannedRecipes = recipes.filter((recipe) =>
    plannedRecipeSlugs.find((slug) => slug === recipe.slug)
  )

  const ingredients: Ingredient[] = []
  const pantry: string[] = []
  const sides: string[] = []

  for (const recipe of plannedRecipes) {
    for (const { name, quantity, unit } of recipe.ingredients) {
      const existingIngredient = ingredients.find(
        (item) => item.name.toLowerCase() === name.toLowerCase() && item.unit === unit
      )
      if (existingIngredient) {
        existingIngredient.quantity += quantity
      } else {
        ingredients.push({ name: name.toLowerCase(), quantity, unit })
      }
    }

    if (recipe.pantry) {
      for (const item of recipe.pantry) {
        if (pantry.includes(item.toLowerCase())) {
          continue
        }
        pantry.push(item.toLowerCase())
      }
    }

    if (recipe.sides) {
      for (const item of recipe.sides) {
        if (sides.includes(item.toLowerCase())) {
          continue
        }
        sides.push(item.toLowerCase())
      }
    }
  }

  ingredients.sort((a, b) => a.name.localeCompare(b.name))
  pantry.sort((a, b) => a.localeCompare(b))

  return { ingredients, menu, pantry, sides }
}
