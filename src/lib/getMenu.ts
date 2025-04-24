import type { Menu } from "./types/menu";

const MENU: Menu = {
	"2025-04-25": "broccoligratäng",
	"2025-04-26": "chana-daal",
	"2025-04-27": "svamprisotto",
	"2025-04-28": "laxinoa",
	"2025-04-29": "sötpotatisbowl",
	"2025-04-30": "ugnsbakad-lax",
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
