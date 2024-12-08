import menu from '/src/lib/menu.json';
import type { Menu } from './types';

export async function getMenu(): Promise<Menu> {
  return menu as Menu;
}
