import { Shortcut } from "./types";
import { fullyContained } from "./utils";

let keys: Record<string, boolean> = {};

export function registerShortcuts(shortcuts: Shortcut[]) {
	window.addEventListener("keydown", (e) => {
		keys[e.key] = true;

		const pressedKeys = Object.entries(keys)
			.filter((k) => k[1])
			.map(([k]) => k);

		const matchingShortcuts = shortcuts.filter((s) =>
			fullyContained(s.keys, pressedKeys),
		);

		for (const shortcut of matchingShortcuts) {
			if (shortcut.preventDefault ?? true) e.preventDefault();

			shortcut.action(e);
		}
	});

	window.addEventListener("keyup", (e) => {
		keys[e.key] = false;
	});

	window.addEventListener("focusout", () => {
		keys = {};
	});
}
