import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlaylistDetailsActions } from '../../store/ducks/playlistDetails';
import { Creators as PlayerActions } from '../../store/ducks/player';

import {
  Container, Header, SongList, SongItem,
} from './styles';
import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

import Loading from '../../components/Loading';

class Playlist extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }).isRequired,

    getPlaylistDetailsRequest: PropTypes.func.isRequired,

    playlistDetails: PropTypes.shape({
      data: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        thumbnail: PropTypes.string,
        songs: PropTypes.arrayOf(
          PropTypes.shape({
            title: PropTypes.string,
            album: PropTypes.string,
            author: PropTypes.string,
          }),
        ),
      }),
      loading: PropTypes.bool.isRequired,
    }).isRequired,
    loadSong: PropTypes.func.isRequired,
    currentSong: PropTypes.shape({
      id: PropTypes.number,
    }).isRequired,
  };

  state = {
    selectedSong: null,
  };

  componentDidMount() {
    this.loadPlaylistDetails();
  }

  componentDidUpdate(prevProps) {
    const { match } = this.props;
    if (prevProps.match.params.id !== match.params.id) {
      this.loadPlaylistDetails();
    }
  }

  loadPlaylistDetails = () => {
    const { match } = this.props;
    const { getPlaylistDetailsRequest } = this.props;
    getPlaylistDetailsRequest(match.params.id);
  };

  renderDetails() {
    const { selectedSong } = this.state;
    const { playlistDetails, loadSong, currentSong } = this.props;
    const playlist = playlistDetails.data;
    return (
      <Container>
        <Header>
          <img src={playlist.thumbnail} alt={playlist.title} />

          <div>
            <span>PLAYLIST</span>
            <h1>{playlist.title}</h1>
            {!!playlist.songs && <p>{`${playlist.songs.length} músicas`}</p>}

            <button
              type="button"
              onClick={() => {
                if (playlist.songs) {
                  loadSong(playlist.songs[0], playlist.songs);
                }
              }}
            >
              PLAY
            </button>
          </div>
        </Header>

        <SongList cellPadding={0} cellSpacing={0}>
          <thead>
            <tr>
              <th />
              <th>Título</th>
              <th>Artista</th>
              <th>Álbum</th>
              <th>
                <img src={ClockIcon} alt="Clock" />
              </th>
            </tr>
          </thead>

          <tbody>
            {!playlist.songs ? (
              <tr>
                <td colSpan={5}>Nem uma música nesta playlist</td>
              </tr>
            ) : (
              playlist.songs.map(song => (
                <SongItem
                  key={song.id}
                  onClick={() => this.setState({ selectedSong: song.id })}
                  onDoubleClick={() => loadSong(song, playlist.songs)}
                  selected={selectedSong === song.id}
                  playing={currentSong && currentSong.id === song.id}
                >
                  <td>
                    <img src={PlusIcon} alt="Adiconar" />
                  </td>
                  <td>{song.title}</td>
                  <td>{song.author}</td>
                  <td>{song.album}</td>
                  <td>4:45</td>
                </SongItem>
              ))
            )}
          </tbody>
        </SongList>
      </Container>
    );
  }

  render() {
    const { playlistDetails } = this.props;

    return playlistDetails.loading ? (
      <Container loading="true">
        <Loading />
      </Container>
    ) : (
      this.renderDetails()
    );
  }
}

const mapStateToProps = state => ({
  playlistDetails: state.playlistDetails,
  currentSong: state.player.currentSong,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...PlaylistDetailsActions,
    ...PlayerActions,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Playlist);
