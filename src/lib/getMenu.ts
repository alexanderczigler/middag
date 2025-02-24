import type { Menu } from './types/menu';

const MENU: Menu = {
  '2025-02-25': 'grekisk-sallad',
  '2025-03-01': 'mapu-tofu',
  '2025-03-02': 'broccoligratäng'
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
