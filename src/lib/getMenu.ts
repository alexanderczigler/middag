import type { Menu } from './types/menu';

const MENU: Menu = {
  '2025-09-10': 'tofu-stroganoff',
  '2025-09-11': 'pokebowl',
  '2025-09-12': 'ugnsbakad-lax',
  '2025-09-13': 'chana-daal',
  '2025-09-14': 'mexicali',
  '2025-09-15': 'svamprisotto'
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
