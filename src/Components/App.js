import React from 'react'
import DisplayList from './DisplayList'
import SearchSong from './SearchSong'
import PropTypes from 'prop-types'
import theme from '../theme'
import {
	ThemeProvider,
	Grid,
	makeStyles,
	Paper,
	Container,
} from '@material-ui/core'

const useStyles = makeStyles({
	root: {
		padding: '5%',
	},
	container: {
		minWidth: '100%',
		minHeight: '10vh',
		display: 'flex',
		justifyContent: 'center',
	},
	item: {
		flexDirection: 'column',
		alignItems: 'center',
		textAlign: 'center',
	},
	paper: {
		display: 'flex',
		flexWrap: 'wrap',
		'& > *': {
			margin: theme.spacing(1),
			width: theme.spacing(40),
		},
	},
})

const App = () => {

	const classes = useStyles()

	return (
		<ThemeProvider theme={theme}>
			<Container className={classes.root}>
				<Grid container className={classes.container} alignItems="center">
					<SearchSong
						//selectedSongs={selectedSongs}
						//onSelectSong={onSelectSong}
						//onRemoveSong={onRemoveSong}
					/>
				</Grid>
				<Grid container className={classes.container} alignItems="center">
					<Grid item sm={2} />
					<Grid className={classes.item} item sm>
						<img src="./images/logo.png" alt="logo" />
					</Grid>
					<Grid container className={classes.item} item sm>
						<Grid item className={classes.paper}>
							<Paper elevation={3}>
								<DisplayList
									//selectedSongs={selectedSongs}
									//onRemoveSong={onRemoveSong}
									//validate={validate}
								/>
							</Paper>
						</Grid>
					</Grid>
					<Grid item sm={2} />
				</Grid>
			</Container>
		</ThemeProvider>
	)
}

App.ProtoTypes = {
	selectedSongs: PropTypes.array.isRequired,
}

export default App
