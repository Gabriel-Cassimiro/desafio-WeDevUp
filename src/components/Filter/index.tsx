import { api } from "../../services/api"
import { cars } from "../../utils/cars-interface"

interface FilterProps {
	setCars: React.Dispatch<React.SetStateAction<cars[]>>
	days: number
	setDays: React.Dispatch<React.SetStateAction<number>>
	distance: number
	setDistance: React.Dispatch<React.SetStateAction<number>>
}

export function Filter({
	setCars,
	days,
	setDays,
	distance,
	setDistance
}: FilterProps) {
	function handleSubmit() {
		api
			.get(`?duration=${days ? days : 1}&distance=${distance ? distance : 50}`)
			.then(response => setCars(response.data))
	}

	return (
		<div className="flex justify-center">
			<div className="mb-3 sm:w-96 flex flex-col ">
				<div className="flex flex-col sm:flex-row mb-2 gap-2">
					<label className="block w-full text-gray-700 text-sm font-bold">
						<span className="block  text-sm font-medium text-slate-700 mb-2">
							Days
						</span>
						<input
							type="number"
							id="days"
							name="days"
							min="1"
							max="30"
							placeholder="1 to 30 Days"
							value={days}
							onChange={e => setDays(e.target.valueAsNumber)}
							aria-label="Input field day"
							className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white 
						bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 
						focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
						/>
					</label>

					<label className="block w-full  text-gray-700 text-sm font-bold ">
						<span className="block sm:text-right text-sm font-medium text-slate-700 mb-2">
							Km
						</span>
						<input
							type="number"
							id="distance"
							name="distance"
							min="50"
							max="3000"
							step="50"
							placeholder="50 to 3000 Kms"
							value={distance}
							onChange={e => setDistance(e.target.valueAsNumber)}
							aria-label="Input field distance"
							className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white 
						bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 
						focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
						/>
					</label>
				</div>

				<button
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					type="button"
					onClick={handleSubmit}
				>
					Filter cars
				</button>
			</div>
		</div>
	)
}
