import type { Menu } from './types/menu';

const MENU: Menu = {
  '2025-10-12': 'sötpotatisbowl',
  '2025-10-13': 'ugnsbakad-lax',
  '2025-10-14': 'chana-daal',
  '2025-10-15': 'holy-caesar',
  '2025-10-16': 'pokebowl',
  '2025-10-17': 'spenat-och-fetaostpaj',
  '2025-10-18': 'gnocchi-köttfärssås'
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
