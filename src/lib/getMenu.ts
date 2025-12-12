import type { Menu } from './types/menu'

const MENU: Menu = {
  '2025-12-14': 'chana-daal',
  '2025-12-15': 'laxinoa',
  '2025-12-16': 'sötpotatisbowl',
  '2025-12-17': 'ugnsbakad-lax',
  '2025-12-18': 'gnocchi-köttfärssås',
  '2025-12-19': 'halloumi-potatis-tzatziki'
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
