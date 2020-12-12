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

test("Check  delete button", () => {
	const mockOnRemove = jest.fn()
	const componentRendered = render(
		<DisplayList
			selectedSongs={["A Kind of Magic"]}
			onRemoveSong={mockOnRemove}
			validate={jest.fn()}
		/>
	)
	const deleteButton = componentRendered.getByLabelText("delete")
	fireEvent.click(deleteButton)
	
	expect(mockOnRemove).toHaveBeenCalledTimes(1)
	expect(mockOnRemove).toHaveBeenCalledWith("A Kind of Magic")
})

test("Check validate button", () => {
	const mockValidate = jest.fn()
	const componentRendered = render(
		<DisplayList
			selectedSongs={["A Kind of Magic"]}
			onRemoveSong={jest.fn()}
			validate={mockValidate}
		/>
	)
	const validateButton = componentRendered.getByText("Validate")
	fireEvent.click(validateButton)
	
	expect(mockValidate).toHaveBeenCalledTimes(1)
})