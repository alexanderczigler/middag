import type { Menu } from './types/menu';

const MENU: Menu = {
  '2025-07-23': 'broccoligratäng',
  '2025-07-24': 'linsgryta',
  '2025-07-25': 'currykyckling',
  '2025-07-26': 'ugnsbakad-lax',
  '2025-07-27': 'spenat-och-fetaostpaj',
  '2025-07-28': 'tonfisksallad'
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
