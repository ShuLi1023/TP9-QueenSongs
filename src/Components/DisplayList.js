import React from "react"
import PropTypes from "prop-types"
import DeleteIcon from "@material-ui/icons/Delete"
import {
	IconButton,
	List,
	ListItem,
	ListItemText,
	makeStyles,
	Card,
	CardActions,
	CardContent,
	Button,
	Typography,
} from "@material-ui/core"

const useStyles = makeStyles(() => ({
	root: {
		width: "100%",
		maxWidth: 360,
		margin: "auto",
	},
	btn: {
		margin: "auto",
	},
}))

const DisplayList = ({ selectedSongs, onRemoveSong, validate }) => {
	const classes = useStyles()
	const displayList =
		selectedSongs.length === 0 ? (
			<Typography color="textSecondary" title="no select">
				No song selected
			</Typography>
		) : (
			<List dense={true} className={classes.root}>
				{selectedSongs.map((song, index) => (
					<ListItem key={index}>
						<ListItemText primary={song} />
						<IconButton
							label="delete"
							aria-label="delete"
							onClick={() => onRemoveSong(song)}
						>
							<DeleteIcon />
						</IconButton>
					</ListItem>
				))}
			</List>
		)
	return (
		<Card>
			<CardContent>
				<Typography variant="h5" component="h2" color="secondary">
					Selected songs
				</Typography>
				{displayList}
			</CardContent>
			<CardActions>
				<Button
					className={classes.btn}
					variant="outlined"
					size="small"
					color="primary"
					onClick={() => validate()}
				>
					Validate
				</Button>
			</CardActions>
		</Card>
	)
}

DisplayList.propTypes = {
	selectedSongs: PropTypes.array.isRequired,
	onRemoveSong: PropTypes.func.isRequired,
}

export default DisplayList
