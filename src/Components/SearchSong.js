import React from "react";
import PropTypes from "prop-types";

import Autocomplete from "@material-ui/lab/Autocomplete";
import { TextField, makeStyles } from "@material-ui/core";

import { connect } from "react-redux";
import {
  setUserInputActionCreator,
  setSelectedSongsActionCreator,
} from "../actions";

const useStyles = makeStyles({
  option: {
    fontSize: 15,
    "& > span": {
      marginRight: 10,
      fontSize: 18,
    },
  },
});
const SearchSong = ({
  allSongs,
  onSelectSong,
  userInput,
  inputValue,
  value,
}) => {

  const classes = useStyles();

  return (
    <Autocomplete
      id="Search-songs"
      value={value}
      style={{ width: 300 }}
      options={allSongs}
      classes={{
        option: classes.option,
      }}
      autoHighlight
      noOptionsText="No Song With That Name"
      renderOption={(option) => <React.Fragment>{option}</React.Fragment>}
      onInputChange={(event, newInputValue) => {
        userInput(newInputValue);
      }}
      onChange={(event, newValue) => {
		if (newValue !== null) onSelectSong(newValue);
		userInput("")
	  }}
	  clearOnBlur={true}
      inputValue={inputValue}
      renderInput={(params) => (
        <TextField
          {...params}
          color="secondary"
          label="Search Songs"
          onChange={ (e) => (userInput(e.target.value))}
          variant="outlined"
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password",
          }}
        />
      )}
    />
  );
};

SearchSong.propTypes = {
  allSongs: PropTypes.array.isRequired,
  selectedSongs: PropTypes.array.isRequired,
  onSelectSong: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
};
const mapStateToProps = (state) => ({
  allSongs: state.songs.allSongs,
  selectedSongs: state.songs.selectedSongs,
  inputValue: state.userInput,
  value: state.songs.value,
});

const mapDispatchToProps = (dispatch) => ({
  userInput: (input) => dispatch(setUserInputActionCreator(input)),
  onSelectSong: (song) => dispatch(setSelectedSongsActionCreator(song)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchSong);
