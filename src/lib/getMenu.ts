import type { Menu } from "./types/menu";

const MENU: Menu = {
	"2025-04-07": "pokebowl",
	"2025-04-08": "broccoligratäng",
	"2025-04-09": "sötpotatisbowl",
	"2025-04-10": "spenat-och-fetaostpaj",
	"2025-04-11": "ugnsbakad-lax",
	"2025-04-12": "holy-caesar",
	"2025-04-13": "chana-daal",
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
