export function handledDiscount(value: number, days: number): string {
	let discount = 1
	if (days > 1 && days <= 4) {
		discount = 0.9
	} else if (days > 4 && days <= 10) {
		discount = 0.7
	} else if (days > 10) {
		discount = 0.5
	}
	return (value * discount).toFixed(0)
}
