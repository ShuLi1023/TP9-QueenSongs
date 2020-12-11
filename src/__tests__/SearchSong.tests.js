import React from "react"
import { render, fireEvent, cleanup } from "@testing-library/react"
import SearchSong from "../Components/SearchSong"

afterEach(cleanup)

test("Check text rendered correctly", () => {
	const componentRendered = render(
		<SearchSong
			selectedSongs={[]}
			onSelectSong={jest.fn()}
			onRemoveSong={jest.fn()}
		/>
	)

	const placeholderText = componentRendered.getByLabelText("Search Songs")
	expect(placeholderText).toBeInTheDocument()
})

test("Check noOptionsText for invalid Song Name", () => {
	const componentRendered = render(
		<SearchSong
			selectedSongs={[]}
			onSelectSong={jest.fn()}
			onRemoveSong={jest.fn()}
		/>
	)

	const autocomplete = componentRendered.getByLabelText("Search Songs")

	fireEvent.change(autocomplete, { target: { value: "12345" } })

	const element = componentRendered.getByText("No Song With That Name")
	expect(element).toBeInTheDocument()
})

/*
test("Check correct Song Name generated for given input", async () => {
	callAPI: jest.fn().mockResolvedValue({})

	const wrapper = shallow(
		<SearchSong
			selectedSongs={[]}
			onSelectSong={jest.fn()}
			onRemoveSong={jest.fn()}
		/>
	)

	wrapper.instance().callApi = jest.fn.mockResolvedValue({
		status: 200,
		data: "A Dozen Red Roses For My Darling",
	})

	const instance = wrapper.instance()

	const autocomplete = instance.getByLabelText("Search Songs")

	fireEvent.change(autocomplete, { target: { value: "dozen" } })

	const element = componentRendered.getByText(
		"A Dozen Red Roses For My Darling"
	)
	expect(element).toBeInTheDocument()
})
*/
