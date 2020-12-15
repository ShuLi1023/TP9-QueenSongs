import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { TextField, makeStyles } from '@material-ui/core'
import { allSongs } from "../songs"
//import { removeSong } from '../actions'


const useStyles = makeStyles({
	option: {
		fontSize: 15,
		'& > span': {
			marginRight: 10,
			fontSize: 18,
		},
	},
})
const SearchSong = ({ selectedSongs, onRemoveSong, onSelectSong }) => {
	const [autocompleteSongsList, setAutocompleteSongsList] = React.useState([])
	const [userInput, setUserInput] = React.useState('')
	const [value, setValue] = React.useState(null)

	useEffect(() => {
			const songs = selectedSongs
			if (songs === null) {
				alert('ERROR!')
				setAutocompleteSongsList([])
			} else {
				setAutocompleteSongsList(songs)
			}
	}, [userInput])

	const toggleSongSelected = (song) => {
		if (selectedSongs.includes(song)) {
			onRemoveSong(song)
		} else {
			onSelectSong(song)
		}

		setAutocompleteSongsList([])
		setUserInput('')
	}

	const onChange = (e) => {
		setUserInput(e.target.value)
	}

	const classes = useStyles()

	return (
		<Autocomplete
			id="Search-songs"
			value={value}
			style={{ width: 300 }}
			options={autocompleteSongsList}
			classes={{
				option: classes.option,
			}}
			autoHighlight
			noOptionsText="No Song With That Name"
			renderOption={(option) => <React.Fragment>{option}</React.Fragment>}
			onInputChange={(event, newInputValue) => {
				setUserInput(newInputValue)
			}}
			onChange={(event, newValue) => {
				if (newValue !== null) toggleSongSelected(newValue)
				setValue(null)
			}}
			inputValue={userInput}
			renderInput={(params) => (
				<TextField
					{...params}
					color="secondary"
					label="Search Songs"
					onChange={onChange}
					variant="outlined"
					inputProps={{
						...params.inputProps,
						autoComplete: 'new-password',
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

const mapStateToProps = (state) => ({
	selectedSongs: state.selectedSongs,
})

//const mapDispatchToProps = (dispatch) => ({
//	removeSong: (song) => dispatch(removeSong(song)),
//})

export default connect(mapStateToProps)(SearchSong)
