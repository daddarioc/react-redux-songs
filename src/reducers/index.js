import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:50' },
    { title: 'The Impression that I get', duration: '3:30' },
    { title: 'Everlong', duration: '3:20' },
    { title: 'I Alone', duration: '3:34' }
  ]
};

const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});