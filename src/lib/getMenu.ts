import type { Menu } from "./types/menu";

const MENU: Menu = {
	"2025-10-01": "gnocchi-köttfärssås",
	"2025-10-02": "ugnsbakad-lax",
	"2025-10-03": "svamprisotto",
	"2025-10-04": "chana-daal",
	"2025-10-05": "laxokado",
	"2025-10-06": "pokebowl",
};

export function getMenu(from?: string): Menu {
	if (from) {
		const fromDate = new Date(from);
		const menu: Menu = {};
		for (const [date, recipe] of Object.entries(MENU)) {
			if (new Date(date) >= fromDate) {
				menu[date] = recipe;
			}
		}
		return menu;
	}

	return MENU;
}
