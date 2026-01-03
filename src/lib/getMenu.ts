import type { Menu } from './types/menu'

const MENU: Menu = {
  '2026-01-04': 'spenat-och-fetaostpaj',
  '2026-01-05': 'spenat-och-fetaostpaj',
  '2026-01-07': 'currykyckling',
  '2026-01-08': 'laxokado'
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
