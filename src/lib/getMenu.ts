import type { Menu } from "./types/menu";

const MENU: Menu = {
	"2025-05-05": "färdig-risotto",
	"2025-05-06": "grekisk-sallad",
	"2025-05-07": "tofu-stroganoff",
	"2025-05-08": "ugnsbakad-lax",
	"2025-05-09": "broccoligratäng",
	"2025-05-10": "holy-caesar",
	"2025-05-11": "mapu-tofu",
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
