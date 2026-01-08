import type { Menu } from './types/menu'

const MENU: Menu = {
  '2026-01-17': 'currykyckling',
  '2026-01-18': 'laxokado',
  '2026-01-19': 'chana-daal',
  '2026-01-20': 'gnocchi-köttfärssås',
  '2026-01-21': 'mexicali',
  '2026-01-22': 'halloumi-potatis-tzatziki',
  '2026-01-23': 'tacokväll',
  '2026-01-24': 'tofu-stroganoff'
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
