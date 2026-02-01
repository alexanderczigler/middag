import type { Menu } from './types/menu'

const MENU: Menu = {
  '2026-02-02': 'ugnsbakad-lax',
  '2026-02-03': 'pokebowl',
  '2026-02-04': 'halloumi-potatis-tzatziki',
  '2026-02-05': 'pasta-pesto',
  '2026-02-06': 'spenat-och-fetaostpaj'
}

// TODO: Next week, add the chicken thai wok!

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
