import type { Menu } from './types/menu';

const MENU: Menu = {
  '2025-02-19': 'tonfisksallad',
  '2025-02-20': 'tofu-stroganoff',
  '2025-02-21': 'ugnsbakad-lax',
  '2025-02-22': 'svamprisotto',
  '2025-02-23': 'currykyckling',
  '2025-02-24': 'grekisk-sallad'
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
