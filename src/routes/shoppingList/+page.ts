import { getRecipes } from '$lib/getRecipes';
import { getMenu } from '$lib/getMenu';
import type { Menu } from '$lib/types/menu';
import type { Ingredient } from '$lib/types/ingredient';

export async function load({ url }): Promise<{
  menu: Menu;
  ingredients: Ingredient[];
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

  plannedRecipes.forEach((recipe) => {
    recipe.ingredients.forEach(({ name, quantity, unit }) => {
      const existingItem = ingredients.find((item) => item.name === name && item.unit === unit);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        ingredients.push({ name, quantity, unit });
      }
    });
  });

  // Sortera ingredienserna alfabetiskt
  ingredients.sort((a, b) => a.name.localeCompare(b.name));

  return { menu, ingredients };
}
