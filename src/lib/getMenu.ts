import type { Menu } from "./types/menu";

const MENU: Menu = {
	"2025-05-30": "mexicali",
	"2025-05-31": "holy-caesar",
	"2025-06-01": "ugnsbakad-lax",
	"2025-06-02": "chana-daal",
	"2025-06-03": "pokebowl",
	"2025-06-04": "sötpotatisbowl",
	"2025-06-05": "ugnsbakad-lax",
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
