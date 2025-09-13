import type { Menu } from "./types/menu";

const MENU: Menu = {
	"2025-09-15": "chana-daal",
	"2025-09-17": "mexicali",
	"2025-09-18": "sötpotatisbowl",
	"2025-09-19": "laxokado",
	"2025-09-20": "broccoligratäng",
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
