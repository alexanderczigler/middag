import type { Menu } from './types/menu'

const MENU: Menu = {
  '2025-11-17': 'halloumi-potatis-tzatziki',
  '2025-11-18': 'tofu-stroganoff',
  '2025-11-19': 'sötpotatisbowl',
  '2025-11-20': 'ugnsbakad-lax',
  '2025-11-21': 'svamprisotto',
  '2025-11-22': 'mapu-tofu',
  '2025-11-23': 'kinesisk-gurksallad'
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
