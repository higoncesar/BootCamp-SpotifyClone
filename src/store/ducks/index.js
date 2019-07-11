import { combineReducers } from 'redux';

import playlists from './playlists';
import playlistDetails from './playlistDetails';
import player from './player';
import error from './error';

const reducers = combineReducers({
  playlists,
  playlistDetails,
  error,
  player,
});

export default reducers;
