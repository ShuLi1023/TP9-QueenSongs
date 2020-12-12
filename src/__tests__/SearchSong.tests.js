import React from "react"
import {
	render,
	fireEvent,
	cleanup,
	waitFor,
	act,
} from "@testing-library/react"
import SearchSong from "../Components/SearchSong"
import axiosMock from "axios"

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

test("Check correct Song Name generated for given input", async () => {
	axiosMock.get.mockResolvedValueOnce({
		data: ["A Dozen Red Roses For My Darling"],
		status: 200,
	})

	const { getByLabelText, getByText } = render(
		<SearchSong
			selectedSongs={[]}
			onSelectSong={jest.fn()}
			onRemoveSong={jest.fn()}
		/>
	)

	const autocomplete = getByLabelText("Search Songs")
	expect(autocomplete).toBeInTheDocument()

	act(() => {
		fireEvent.change(autocomplete, { target: { value: "dozen" } })
	})

	const songSuggestion = await waitFor(() =>
		getByText("A Dozen Red Roses For My Darling")
	)
	//console.log("received: \n" + songSuggestion + "\n\n")
	expect(songSuggestion).toBeInTheDocument()
	expect(axiosMock.get).toHaveBeenCalledTimes(1)
	expect(axiosMock.get).toHaveBeenCalledWith("http://localhost:8081/dozen")
})

test("Check 'No Song With Name' msg for invalid song name", async () => {
	axiosMock.get.mockResolvedValueOnce({
		data: [],
		status: 200,
	})

	const { getByLabelText, getByText } = render(
		<SearchSong
			selectedSongs={[]}
			onSelectSong={jest.fn()}
			onRemoveSong={jest.fn()}
		/>
	)

	const autocomplete = getByLabelText("Search Songs")
	expect(autocomplete).toBeInTheDocument()

	act(() => {
		fireEvent.change(autocomplete, { target: { value: "12345" } })
	})
	const msg = await waitFor(() => getByText("No Song With That Name"))

	expect(msg).toBeInTheDocument()
	expect(axiosMock.get).toHaveBeenCalledTimes(1)
	expect(axiosMock.get).toHaveBeenCalledWith("http://localhost:8081/12345")
})
