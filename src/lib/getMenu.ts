import type { Menu } from "./types/menu";

const MENU: Menu = {
	"2025-06-09": "mexicali",
	"2025-06-10": "chana-daal",
	"2025-06-11": "holy-caesar",
	"2025-06-12": "ugnsbakad-lax",
	"2025-06-13": "pokebowl",
	"2025-06-14": "sötpotatisbowl",
	"2025-06-15": "ugnsbakad-lax",
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
