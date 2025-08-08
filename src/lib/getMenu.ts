import type { Menu } from "./types/menu";

const MENU: Menu = {
	"2025-08-08": "ugnsbakad-falukorv",
	"2025-08-09": "sötpotatisbowl",
	"2025-08-10": "currykyckling",
	"2025-08-11": "ugnsbakad-lax",
	"2025-08-12": "linsgryta",
	"2025-08-13": "grekisk-sallad",
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
