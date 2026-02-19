import type { Menu } from './types/menu'

const MENU: Menu = {
  '2026-02-20': 'pokebowl',
  '2026-02-21': 'ugnsbakad-lax',
  '2026-02-22': 'thaiwok-kyckling',
  '2026-02-23': 'mexicali',
  '2026-02-24': 'tofu-stroganoff',
  '2026-02-25': 'chana-daal'
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
