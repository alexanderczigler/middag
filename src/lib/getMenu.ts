import type { Menu } from './types/menu'

const MENU: Menu = {
  '2025-12-07': 'halloumi-potatis-tzatziki',
  '2025-12-08': 'currykyckling',
  '2025-12-09': 'ugnsbakad-lax',
  '2025-12-10': 'mexicali',
  '2025-12-11': 'chana-daal',
  '2025-12-12': 'svamprisotto'
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
