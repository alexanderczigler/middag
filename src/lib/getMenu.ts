import type { Menu } from './types/menu';

const MENU: Menu = {
  '2025-10-26': 'spenat-och-fetaostpaj',
  '2025-10-27': 'gnocchi-köttfärssås',
  '2025-10-28': 'sötpotatisbowl',
  '2025-10-29': 'krämig-lax',
  '2025-10-30': 'pokebowl',
  '2025-10-31': 'tacokväll',
  '2025-11-01': 'ugnsbakad-lax',
  '2025-11-02': 'chana-daal'
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
