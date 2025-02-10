import type { Menu } from './types/menu';

const MENU: Menu = {
  '2025-02-11': 'daal',
  '2025-02-12': 'grekisk-sallad',
  '2025-02-13': 'ugnsbakad-lax',
  '2025-02-14': 'chicken-tikka-masala'
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
