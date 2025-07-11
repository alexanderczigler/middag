import type { Menu } from "./types/menu";

const MENU: Menu = {
	"2025-07-12": "tonfisksallad",
	"2025-07-13": "broccoligratäng",
	"2025-07-14": "currykyckling",
	"2025-07-15": "ugnsbakad-lax",
	"2025-07-16": "mexicali",
	"2025-07-17": "pasta-pesto",
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
