import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: "Yarali", duration: "4:23"},
    { title: "Ceylan", duration: "2:12"},
    { title: "Gezme", duration: "3:30"},
    { title: "buralarda", duration: "3:00"},
  ];
}

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});