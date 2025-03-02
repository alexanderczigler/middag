import { getRecipes } from '$lib/getRecipes';
import { getMenu } from '$lib/getMenu';
import type { Menu } from '$lib/types/menu';
import type { Ingredient } from '$lib/types/ingredient';

export async function load({ url }): Promise<{
  ingredients: Ingredient[];
  menu: Menu;
  pantry: string[];
  sides: string[];
}> {
  // Hämta query-parametern 'from' från URL:en
  const from: string = url.searchParams.get('from') || '';

  // Skicka 'from' till getMenu() om den finns, annars null
  const menu = await getMenu(from);

  const recipes = await getRecipes();

  // Extrahera alla recepttitlar från menyn
  const plannedRecipeSlugs = Object.values(menu);

  // Filtrera recepten som matchar menyns titlar
  const plannedRecipes = recipes.filter((recipe) =>
    plannedRecipeSlugs.find((slug) => slug === recipe.slug)
  );

  // Sammanställ ingredienser
  const ingredients: Ingredient[] = [];
  const pantry: string[] = [];
  const sides: string[] = [];

  plannedRecipes.forEach((recipe) => {
    recipe.ingredients.forEach(({ name, quantity, unit }) => {
      const existingIngredient = ingredients.find(
        (item) => item.name === name && item.unit === unit
      );
      if (existingIngredient) {
        existingIngredient.quantity += quantity;
      } else {
        ingredients.push({ name, quantity, unit });
      }
    });

    recipe.pantry?.forEach((item) => {
      if (pantry.includes(item.toLowerCase())) {
        return;
      }

      pantry.push(item.toLowerCase());
    });

    recipe.sides?.forEach((item) => {
      if (sides.includes(item.toLowerCase())) {
        return;
      }

      sides.push(item.toLowerCase());
    });
  });

  // Sortera ingredienserna alfabetiskt
  ingredients.sort((a, b) => a.name.localeCompare(b.name));
  pantry.sort((a, b) => a.localeCompare(b));

  return { ingredients, menu, pantry, sides };
}
