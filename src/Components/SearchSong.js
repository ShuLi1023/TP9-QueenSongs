import React, { useEffect } from "react"
import PropTypes from "prop-types"
import Axios from "axios"
import Autocomplete from "@material-ui/lab/Autocomplete"
import { TextField, makeStyles } from "@material-ui/core"

const callApi = async (input) => {
	try {
		const response = await Axios.get(`http://localhost:8081/${input}`)
		if (response.status === 200) {
			return response.data
		} else {
			return null
		}
	} catch (e) {
		return null
	}
}

const useStyles = makeStyles({
	option: {
		fontSize: 15,
		"& > span": {
			marginRight: 10,
			fontSize: 18,
		},
	},
})
const SearchSong = ({ selectedSongs, onRemoveSong, onSelectSong }) => {
	const [activeSong, setActiveSong] = React.useState(0)
	const [autocompleteSongsList, setAutocompleteSongsList] = React.useState([])
	const [userInput, setUserInput] = React.useState("")
	const [shouldCallApi, setShouldCallApi] = React.useState(false)

	useEffect(() => {
		async function updateData() {
			const songs = await callApi(userInput)
			if (songs === null) {
				alert("ERROR! API Not running!")
				setAutocompleteSongsList([])
			} else {
				setAutocompleteSongsList(songs)
			}
		}

		if (shouldCallApi && userInput.trim() !== "") {
			setShouldCallApi(false)
			updateData()
		}
	}, [userInput, shouldCallApi])

	const toggleSongSelected = (song) => {
		if (selectedSongs.includes(song)) {
			onRemoveSong(song)
		} else {
			onSelectSong(song)
		}

		setAutocompleteSongsList([])
		setUserInput("")
		setActiveSong(0)
	}

	const onChange = (e) => {
		setUserInput(e.target.value)
		if (e.target.value !== "") {
			setShouldCallApi(true)
		}
		setActiveSong(0)
	}

	const onKeyDown = (e) => {
		switch (e.key) {
			case "Enter":
				if (autocompleteSongsList[activeSong])
					toggleSongSelected(autocompleteSongsList[activeSong])
				break

			case "ArrowUp":
				if (activeSong === 0) {
					return
				}
				setActiveSong(activeSong - 1)
				if (activeSong > 1 && autocompleteSongsList.length > 4) {
					onScroll(false)
				}
				break

			case "ArrowDown":
				if (activeSong + 1 === autocompleteSongsList.length) {
					return
				}
				setActiveSong(activeSong + 1)
				if (activeSong > 1 && autocompleteSongsList.length > 4) {
					onScroll(true)
				}
				break

			case "Escape":
				setActiveSong(0)
				break

			default:
		}
	}
	const onScroll = (Boolean) => {
		const elmnt = document.getElementById("active")
		if (elmnt !== null) {
			elmnt.scrollIntoView(Boolean)
		}
	}
	const classes = useStyles()

	return (
		<Autocomplete
			id="Search-songs"
			style={{ width: 300 }}
			options={autocompleteSongsList}
			classes={{
				option: classes.option,
			}}
			autoHighlight
			noOptionsText="No Song With That Name"
			renderOption={(option) => <React.Fragment>{option}</React.Fragment>}
			inputValue={userInput}
			onInputChange={(event, newInputValue) => {
				setUserInput(newInputValue)
			}}
			onChange={(event, newValue) => {
				if (newValue !== null) toggleSongSelected(newValue)
			}}
			value={userInput}
			renderInput={(params) => (
				<TextField
					{...params}
					color="secondary"
					label="Search Songs"
					onChange={onChange}
					onKeyDown={onKeyDown}
					variant="outlined"
					inputProps={{
						...params.inputProps,
						autoComplete: "new-password",
					}}
				/>
			)}
		/>
	)
}

SearchSong.propTypes = {
	selectedSongs: PropTypes.array.isRequired,
	onRemoveSong: PropTypes.func.isRequired,
	onSelectSong: PropTypes.func.isRequired,
}

export default SearchSong
