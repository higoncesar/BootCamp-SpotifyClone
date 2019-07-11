import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlaylistsActions } from '../../store/ducks/playlists';

import {
  Container, Title, List, Playlist,
} from './styles';

import Loading from '../../components/Loading';

class Browse extends Component {
  static propTypes = {
    playlists: PropTypes.shape({
      loading: PropTypes.bool,
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
        }),
      ),
    }).isRequired,
    getPlaylistRequest: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { getPlaylistRequest } = this.props;
    getPlaylistRequest();
  }

  render() {
    const { playlists } = this.props;
    return (
      <Container>
        <Title>
          Navegar
          {playlists.loading && <Loading />}
        </Title>
        <List>
          {playlists.data.map(playlist => (
            <Playlist key={playlist.id} to={`/playlists/${playlist.id}`}>
              <img src={playlist.thumbnail} alt="Playlist" />
              <strong>{playlist.title}</strong>
              <p>{playlist.description}</p>
            </Playlist>
          ))}
        </List>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  playlists: state.playlists,
});

const mapDispatchToProps = dispatch => bindActionCreators(PlaylistsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Browse);
