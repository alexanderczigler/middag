import type { Menu } from "./types/menu";

const MENU: Menu = {
	"2025-03-24": "holy-caesar",
	"2025-03-25": "ugnsbakad-lax",
	"2025-03-26": "pokebowl",
	"2025-03-27": "chana-daal",
	"2025-03-28": "mexicali",
	"2025-03-29": "chicken-tikka-masala",
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
