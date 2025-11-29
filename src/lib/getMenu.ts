import type { Menu } from './types/menu'

const MENU: Menu = {
  '2025-11-30': 'halloumi-potatis-tzatziki',
  '2025-12-01': 'chana-daal',
  '2025-12-02': 'ugnsbakad-lax',
  '2025-12-03': 'gnocchi-köttfärssås',
  '2025-12-04': 'laxinoa',
  '2025-12-05': 'tacokväll'
}

export function getMenu(from?: string): Menu {
  if (from) {
    const fromDate = new Date(from)
    const menu: Menu = {}
    for (const [date, recipe] of Object.entries(MENU)) {
      if (new Date(date) >= fromDate) {
        menu[date] = recipe
      }
    }
    return menu
  }

  return MENU
}
