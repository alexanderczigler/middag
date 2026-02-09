import type { Menu } from './types/menu'

const MENU: Menu = {
  '2026-02-10': 'thaiwok-kyckling',
  '2026-02-11': 'mexicali',
  '2026-02-12': 'pokebowl',
  '2026-02-13': 'chana-daal',
  '2026-02-14': 'krämig-lax',
  '2026-02-15': 'chicken-tikka-masala'
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
