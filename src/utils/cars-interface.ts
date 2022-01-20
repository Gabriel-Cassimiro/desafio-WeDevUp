export interface cars {
	id: number
	picturePath: string
	brand: string
	model: string
	pricePerDay: number
	pricePerKm: number
	availability: {
		maxDuration: number
		maxDistance: number
	}
}
