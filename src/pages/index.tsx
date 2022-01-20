import { NextPage } from "next"

import { Cars } from "../components/Cars"

export const Home: NextPage = () => {
	return (
		<div className="flex justify-center flex-col mt-6 ">
			<Cars />
		</div>
	)
}

export default Home
