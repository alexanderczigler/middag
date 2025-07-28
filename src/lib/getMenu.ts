import type { Menu } from './types/menu';

const MENU: Menu = {
  '2025-07-31': 'ugnsbakad-falukorv',
  '2025-08-01': 'linsgryta',
  '2025-08-02': 'currykyckling',
  '2025-08-03': 'ugnsbakad-lax',
  '2025-08-04': 'pestolasagne',
  '2025-08-05': 'grekisk-sallad'
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
