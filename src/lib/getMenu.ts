import type { Menu } from './types/menu';

const MENU: Menu = {
  '2025-11-03': 'chicken-tikka-masala',
  '2025-11-05': 'ugnsbakad-lax',
  '2025-11-06': 'pasta-pesto',
  '2025-11-07': 'svamprisotto',
  '2025-11-08': 'laxinoa',
  '2025-11-10': 'chana-daal'
};

export function getMenu(from?: string): Menu {
  if (from) {
    const fromDate = new Date(from);
    const menu: Menu = {};
    for (const [date, recipe] of Object.entries(MENU)) {
      if (new Date(date) >= fromDate) {
        menu[date] = recipe;
      }
    }
    return menu;
  }

  return MENU;
}
