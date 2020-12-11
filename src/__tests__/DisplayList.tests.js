import React from "react"
import { render, fireEvent } from "@testing-library/react"
import DisplayList from "../Components/DisplayList"

test("Check text rendered correctly", () => {
	const { getByText } = render(
		<DisplayList
			selectedSongs={[]}
			onRemoveSong={jest.fn()}
			validate={jest.fn()}
		/>
	)

	const cardTitle = getByText(/Selected songs/i)
	const cardMessage = getByText(/No song selected/i)
	const btnText = getByText(/Validate/i)

	expect(cardTitle).toBeInTheDocument()
	expect(cardMessage).toBeInTheDocument()
	expect(btnText).toBeInTheDocument()
})

test("Check if selected song is rendered", () => {
	const { getByText } = render(
		<DisplayList
			selectedSongs={["A Kind of Magic", "Flash to the Rescue"]}
			onRemoveSong={jest.fn()}
			validate={jest.fn()}
		/>
	)
	const listItem1 = getByText(/A Kind of Magic/i)
	const listItem2 = getByText(/Flash to the Rescue/i)

	expect(listItem1).toBeInTheDocument()
	expect(listItem2).toBeInTheDocument()
})
