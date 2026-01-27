import type { Menu } from './types/menu'

const MENU: Menu = {
  '2026-01-28': 'laxinoa',
  '2026-01-29': 'sötpotatisbowl',
  '2026-01-30': 'broccoligratäng',
  '2026-01-31': 'svamprisotto',
  '2026-02-01': 'mexicali',
  '2026-02-02': 'ugnsbakad-lax',
  '2026-02-03': 'chana-daal'
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
