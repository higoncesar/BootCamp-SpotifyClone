import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as ErrorActions } from '../ducks/error';
import { Creators as PlaylistDetailsActions } from '../ducks/playlistDetails';

export function* getPlaylistDetails(action) {
  try {
    const response = yield call(api.get, `/playlists/${action.payload.id}?_embed=songs`);

    yield put(PlaylistDetailsActions.getPlaylistDetailsSuccess(response));
  } catch (error) {
    yield put(ErrorActions.setError('Não foi possivel obter os detalhes da playlist'));
  }
}
