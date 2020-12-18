import { songsReducer } from "../reducer/songsReducer";

describe("Song Reducer Testing", () => {
  test("Default values ", () => {
    expect(songsReducer(undefined, {})).toEqual({
      songsList: [],
      selectedSongs: [],
      value: null,
    });
  });

  test("Adding selected song to an empty array", () => {
    const song = "Rain Must Fall";
    const action = {
      type: "SET_SELECTED_SONGS",
      payload: song,
    };

    expect(songsReducer({}, action)).toEqual({
      selectedSongs: song,
    });
  });

  test("Adding selected song to an array containing other selected songs", () => {
    const song = "Rain Must Fall";
    const action = {
      type: "SET_SELECTED_SONGS",
      payload: song,
    };

    const obj = {
      selectedSongs: ["You Take My Breath Away", "You're My Best Friend"],
    };

    expect(songsReducer(obj, action)).toEqual({
      selectedSongs: [
        "You Take My Breath Away",
        "You're My Best Friend",
        "Rain Must Fall",
      ],
    });
  });

  test("Unselecting/Removing selected song", () => {
    const song = "Rain Must Fall";
    const action = {
      type: "REMOVE_SONG",
      payload: song,
    };

    const obj = {
      selectedSongs: [
        "You Take My Breath Away",
        "You're My Best Friend",
        "Rain Must Fall",
      ],
    };

    expect(songsReducer(obj, action)).toEqual({
      selectedSongs: ["You Take My Breath Away", "You're My Best Friend"],
    });
  });
});
