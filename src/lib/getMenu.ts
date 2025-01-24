import type { Menu } from './types/menu';

const MENU: Menu = {
  '2025-01-19': 'caesarsallad',
  '2025-01-20': 'tofu-stroganoff',
  '2025-01-21': 'ugnsbakad-lax',
  '2025-01-22': 'tonfisksallad',
  '2025-01-23': 'pasta-pesto',
  '2025-01-25': 'spenat-och-fetaostpaj',
  '2025-01-26': 'grekisk-sallad',
  '2025-01-27': 'broccoligratäng',
  '2025-01-28': 'ugnsbakad-lax',
  '2025-01-29': 'chicken-tikka-masala',
  '2025-01-30': 'pasta-pesto',
  '2025-02-01': 'tonfisksallad',
  '2025-02-02': 'caesarsallad',
  '2025-02-03': 'tofu-stroganoff'
};

export function getMenu(from?: string): Menu {
  if (from) {
    const fromDate = new Date(from);
    const menu: Menu = {};
    Object.entries(MENU).forEach(([date, recipe]) => {
      if (new Date(date) >= fromDate) {
        menu[date] = recipe;
      }
    });
    return menu;
  } else {
    return MENU;
  }
}
