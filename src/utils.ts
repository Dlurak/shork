export function arrayEq<T>(arr1: T[], arr2: T[]) {
	const length = arr1.length;

	if (length !== arr2.length) return false;

	for (let i = 0; i < length; i++) {
		const first = arr1[i];
		const second = arr2[i];

		if (first !== second) return false;
	}

	return true;
}

export function fullyContained<T>(arr1: T[], arr2: T[]) {
	for (const item of arr1) {
		const isInArr2 = arr2.some((i) => i === item);
		if (!isInArr2) return false;
	}

	return true;
}
