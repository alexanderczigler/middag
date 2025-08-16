import type { Menu } from "./types/menu";

const MENU: Menu = {
	"2025-08-18": "ugnsbakad-falukorv",
	"2025-08-19": "currykyckling",
	"2025-08-20": "pestolasagne",
	"2025-08-21": "linsgryta",
	"2025-08-22": "spenat-och-fetaostpaj",
	"2025-08-24": "broccoligratäng",
	"2025-08-25": "ugnsbakad-falukorv",
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
