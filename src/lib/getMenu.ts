import type { Menu } from "./types/menu";

const MENU: Menu = {
	"2025-06-30": "sötpotatisbowl",
	"2025-07-01": "ugnsbakad-lax",
	"2025-07-02": "currykyckling",
	"2025-07-03": "pokebowl",
	"2025-07-04": "broccoligratäng",
	"2025-07-05": "ugnsbakad-lax",
	"2025-07-06": "färdig-risotto",
	"2025-07-07": "chana-daal",
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
