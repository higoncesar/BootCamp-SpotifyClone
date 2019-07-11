import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as ErrorActions } from '../ducks/error';
import { Creators as PlaylistsActions } from '../ducks/playlists';

export function* getPlaylists() {
  try {
    const response = yield call(api.get, '/playlists');

    yield put(PlaylistsActions.getPlaylistSuccess(response));
  } catch (error) {
    yield put(ErrorActions.setError('Não foi possivel obter as playlists'));
  }
}
