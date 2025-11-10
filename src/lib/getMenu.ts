import type { Menu } from './types/menu';

const MENU: Menu = {
  '2025-11-11': 'tonfisksallad',
  '2025-11-12': 'mexicali',
  '2025-11-13': 'gnocchi-köttfärssås',
  '2025-11-14': 'laxinoa',
  '2025-11-15': 'pasta-pesto',
  '2025-11-16': 'sötpotatisbowl'
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
