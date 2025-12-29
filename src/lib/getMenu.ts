import type { Menu } from './types/menu'

const MENU: Menu = {
  '2025-12-30': 'laxinoa',
  '2025-12-31': 'sötpotatisbowl',
  '2026-01-01': 'ugnsbakad-lax',
  '2026-01-02': 'halloumi-potatis-tzatziki',
  '2026-01-03': 'chana-daal',
  '2026-01-04': 'mapu-tofu'
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
