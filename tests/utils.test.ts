import { describe, expect, it } from "vitest";
import { arrayEq, fullyContained } from "../src/utils";

describe("array utils", () => {
	it("checks that two arrays have the same content", () => {
		expect(arrayEq([], [])).toBe(true);

		expect(arrayEq([1], [])).toBe(false);
		expect(arrayEq([1, 100, "100"], [1, 100, 100])).toBe(false);

		expect(
			arrayEq(["Control", "Escape", "a"], ["Control", "Escape", "a"]),
		).toBe(true);
	});

	it("checks that one array is fully contained in another", () => {
		expect(fullyContained([], [])).toBe(true);
		expect(fullyContained([], [1, 2])).toBe(true);
		expect(fullyContained([2], [1, 2])).toBe(true);
		expect(fullyContained([3], [1, 2])).toBe(false);

		expect(
			fullyContained(
				["Control", "Escape", "a"],
				["Control", "Escape", "a", "Meta"],
			),
		).toBe(true);
	});
});
