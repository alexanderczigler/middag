import type { Ingredient } from './ingredient'

export type Recipe = {
  ingredients: Ingredient[]
  instructions: string[]
  sides?: string[]
  slug?: string
  title: string
  pantry?: string[]
}
