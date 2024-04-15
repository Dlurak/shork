import { registerShortcuts } from "../../src";

registerShortcuts([
	{
		keys: ["Control", "Escape", "a"],
		action: (e) => {
			const newLi = document.createElement("li");
			newLi.innerText = "Just pressed ctrl+esc+a";

			const list = document.getElementById("list");
			list?.appendChild(newLi);
			console.log(e);
		},
	},
	{
		keys: ["Control", "k"],
		action: () => {
			window.alert(
				"just opened a popup/search, this is just a demo of shork not a search",
			);
		},
	},
]);
