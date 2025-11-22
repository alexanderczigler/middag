import type { Menu } from './types/menu'

const MENU: Menu = {
  '2025-11-23': 'mapu-tofu',
  '2025-11-24': 'chana-daal',
  '2025-11-25': 'mexicali',
  '2025-11-26': 'ugnsbakad-lax',
  '2025-11-27': 'sötpotatisbowl',
  '2025-11-28': 'currykyckling'
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
