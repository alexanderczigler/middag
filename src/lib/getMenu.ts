import type { Menu } from './types/menu';

const MENU: Menu = {
  '2025-09-07': 'mexicali',
  '2025-09-08': 'laxokado',
  '2025-09-09': 'sötpotatisbowl',
  '2025-09-10': 'chana-daal',
  '2025-09-11': 'broccoligratäng'
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
