import type { Menu } from "./types/menu";

const MENU: Menu = {
	"2025-05-15": "mexicali",
	"2025-05-16": "broccoligratäng",
	"2025-05-17": "holy-caesar",
	"2025-05-18": "laxinoa",
	"2025-05-19": "pokebowl",
	"2025-05-20": "chana-daal",
	"2025-05-21": "ugnsbakad-lax",
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
