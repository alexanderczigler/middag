import type { Menu } from "./types/menu";

const MENU: Menu = {
	"2025-03-30": "mapu-tofu",
	"2025-03-31": "krämig-lax",
	"2025-04-01": "chana-daal",
	"2025-04-02": "pokebowl",
	"2025-04-03": "broccoligratäng",
	"2025-04-04": "currykyckling",
	"2025-04-05": "laxinoa",
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
