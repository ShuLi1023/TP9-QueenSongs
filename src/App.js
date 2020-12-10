import React from "react";
import "./App.css";
import DisplayList from "./Components/DisplaySelectedList";
import SearchSong from "./Components/SearchSong";
import PropTypes from "prop-types";
import Axios from "axios";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  root: {
    minWidth: "100%",
    minHeight: "10vh",
    display: "flex",
    justifyContent: "center",
  },
  item: {
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  paper: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(40),
    },
  },
});
async function isApiRunning() {
  try {
    await Axios.get(`http://localhost:8081/test`);
  } catch (e) {
    alert("ERROR! API Not running!");
  }
}

const App = () => {
  isApiRunning();

  const [selectedSongs, setSelectedSongs] = React.useState([]);
  const onSelectSong = (song) => {
    if (song !== "" && selectedSongs.indexOf(song) === -1) {
      const selectedSongsList = [...selectedSongs, song];
      setSelectedSongs(selectedSongsList);
    }
  };

  const onRemoveSong = (removeSong) => {
    const newList = selectedSongs.filter((s) => s !== removeSong);
    setSelectedSongs(newList);
  };

  const validate = () => {
    if (selectedSongs.length === 0) {
      alert("No Songs Selected!");
    } else {
      alert("Selected songs: " + selectedSongs);
    }
  };
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
       <Grid container className={classes.root} alignItems="center">
            <SearchSong
              selectedSongs={selectedSongs}
              onSelectSong={onSelectSong}
              onRemoveSong={onRemoveSong}
            />
          </Grid>
      <Grid container className={classes.root} alignItems="center">

        <Grid item sm={2} />
        <Grid className={classes.item} item sm>
          <img src="./images/logo.png" alt="logo" />
        </Grid>
        <Grid container className={classes.item} item sm >
          <Grid item className={classes.paper}>
            <Paper elevation={3}>
              <DisplayList
                selectedSongs={selectedSongs}
                onRemoveSong={onRemoveSong}
                validate={validate}
              />
            </Paper>
          </Grid>
        </Grid>
        <Grid item sm={2} />
      </Grid>
    </ThemeProvider>
  );
};

App.ProtoTypes = {
  selectedSongs: PropTypes.array.isRequired,
};

export default App;
