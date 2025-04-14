import type { Menu } from "./types/menu";

const MENU: Menu = {
	"2025-04-15": "holy-caesar",
	"2025-04-16": "tonfisksallad",
	"2025-04-17": "currykyckling",
	"2025-04-18": "pokebowl",
	"2025-04-21": "mexicali",
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
