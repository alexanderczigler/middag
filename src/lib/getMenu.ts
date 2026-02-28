import type { Menu } from './types/menu'

const MENU: Menu = {
  '2026-03-01': ['currykyckling', 'currykyckling'],
  '2026-03-03': ['pestolasagne', 'pestolasagne'],
  '2026-03-05': ['tofu-stroganoff', 'tofu-stroganoff']
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
