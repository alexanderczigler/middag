import type { Menu } from './types/menu';

const MENU: Menu = {
  '2025-10-19': 'mapu-tofu',
  '2025-10-20': 'sötpotatisbowl',
  '2025-10-21': 'krämig-lax',
  '2025-10-22': 'gnocchi-köttfärssås',
  '2025-10-23': 'pokebowl',
  '2025-10-24': 'tacokväll',
  '2025-10-25': 'ugnsbakad-lax',
  '2025-10-26': 'spenat-och-fetaostpaj'
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
