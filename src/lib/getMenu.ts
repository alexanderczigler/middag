import type { Menu } from './types/menu';

const MENU: Menu = {
  '2025-03-03': 'mexicali',
  '2025-03-04': 'chicken-tikka-masala',
  '2025-03-05': 'laxinoa',
  '2025-03-06': 'spenat-och-fetaostpaj',
  '2025-03-07': 'pepparbiff',
  '2025-03-08': 'tonfisksallad',
  '2025-03-09': 'tofu-stroganoff'
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
