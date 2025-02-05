import type { Menu } from "./types/menu";

const MENU: Menu = {
	"2025-02-02": "tofu-stroganoff",
	"2025-02-04": "mapu-tofu",
	"2025-02-05": "daal",
	"2025-02-06": "tonfisksallad",
	"2025-02-07": "ugnsbakad-lax",
	"2025-02-08": "pasta-tomatsås",
	"2025-02-09": "färdig-risotto",
};

export function getMenu(from?: string): Menu {
	if (from) {
		const fromDate = new Date(from);
		const menu: Menu = {};
		Object.entries(MENU).forEach(([date, recipe]) => {
			if (new Date(date) >= fromDate) {
				menu[date] = recipe;
			}
		});
		return menu;
	} else {
		return MENU;
	}
}
