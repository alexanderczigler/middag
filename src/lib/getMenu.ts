import type { Menu } from "./types/menu";

const MENU: Menu = {
	"2025-09-22": "pokebowl",
	"2025-09-23": "chicken-tikka-masala",
	"2025-09-24": "chana-daal",
	"2025-09-25": "laxokado",
	"2025-09-26": "svamprisotto",
	"2025-09-27": "gnocchi-köttfärssås",
	"2025-09-28": "ugnsbakad-lax",
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
