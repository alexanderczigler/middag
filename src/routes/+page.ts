import type { Menu, Recipe } from '$lib/types';
import { getRecipes } from '$lib/getRecipes';
import { getMenu } from '$lib/getMenu';

export async function load({
  params,
  url
}): Promise<{ date: string; menu: Menu; recipes: Recipe[] }> {
  let date = url.searchParams.get('date') || new Date().toISOString().slice(0, 10);

  const recipes = await getRecipes();
  const menu = await getMenu();
  return { date, menu, recipes };
}
