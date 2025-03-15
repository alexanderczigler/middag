import type { Menu } from './types/menu';

const MENU: Menu = {
  '2025-03-16': 'pokebowl',
  '2025-03-17': 'chana-daal',
  '2025-03-18': 'ugnsbakad-lax',
  '2025-03-19': 'tonfisksallad',
  '2025-03-20': 'mapu-tofu',
  '2025-03-21': 'broccoligratäng',
  '2025-03-22': 'sötpotatisbowl'
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
