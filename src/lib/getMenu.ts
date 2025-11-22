import type { Menu } from './types/menu'

const MENU: Menu = {
  '2025-11-23': ['mapu-tofu', 'kinesisk-gurksallad']
}

export function getMenu(from?: string): Menu {
  if (from) {
    const fromDate = new Date(from)
    const menu: Menu = {}
    for (const [date, recipes] of Object.entries(MENU)) {
      if (new Date(date) >= fromDate) {
        menu[date] = recipes
      }
    }
    return menu
  }

  return MENU
}
