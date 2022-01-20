import Image from "next/image"
import { useState, useEffect } from "react"

import { api } from "../../services/api"
import { Filter } from "../Filter/index"
import { cars } from "../../utils/cars-interface"
import { handledDiscount } from "../../utils/handleDiscount"

export function Cars() {
	const [cars, setCars] = useState<cars[]>([])
	const [days, setDays] = useState(1)
	const [distance, setDistance] = useState(50)

	useEffect(() => {
		api.get("/").then(response => setCars(response.data))
	}, [])

	return (
		<div>
			<Filter
				setCars={setCars}
				days={days}
				setDays={setDays}
				distance={distance}
				setDistance={setDistance}
			/>
			<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 mx-6 ">
				{cars.map(cars => {
					return (
						<div key={cars.id} className=" rounded-lg">
							<Image
								height={150}
								width={150}
								src={cars.picturePath}
								alt={cars.model}
								layout="responsive"
								className="cursor-pointer rounded-sm transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
							/>
							<div className="flex flex-col p-2 gap-2">
								<div className="opacity-80  flex justify-center">
									{cars.brand.toUpperCase()}
								</div>

								<div className="text-xl font-bold flex justify-center">
									{cars.model}
								</div>

								<div className="flex justify-between items-center">
									<span className=""> Price per day </span>
									<span>${cars.pricePerDay}</span>
								</div>

								<div className="flex justify-between items-center ">
									<span className="">Price per Km </span>
									<span>${cars.pricePerKm} </span>
								</div>

								<div className="flex py-1 justify-between border-t-2 border-blue-800">
									<span className="text-xs opacity-80 font-mono font-semibold">
										RENTAL PRICE
									</span>
									<span className="text-lg text-gray-600">
										$
										{handledDiscount(
											days * cars.pricePerDay + distance * cars.pricePerKm,
											days
										)}
									</span>
								</div>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}
