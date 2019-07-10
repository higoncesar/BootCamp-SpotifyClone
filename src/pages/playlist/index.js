import React from 'react';

import { Container, Header, SongList } from './styles';
import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

const Playlist = () => (
  <Container>
    <Header>
      <img
        src="http://www.lovethispic.com/uploaded_images/81998-Imagine-Dragons-Album-Cover.jpg"
        alt="Playlist"
      />

      <div>
        <span>PLAYLIST</span>
        <h1>Rock dos Bons</h1>
        <p>13 Músicas</p>

        <button type="button">PLAY</button>
      </div>
    </Header>

    <SongList cellPadding={0} cellSpacing={0}>
      <thead>
        <th />
        <th>Título</th>
        <th>Artista</th>
        <th>Álbum</th>
        <th>
          <img src={ClockIcon} alt="Clock" />
        </th>
      </thead>

      <tbody>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adiconar" />
          </td>
          <td>Radioactive</td>
          <td>Imagine Dragons</td>
          <td>Night Visions</td>
          <td>4:45</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adiconar" />
          </td>
          <td>Radioactive</td>
          <td>Imagine Dragons</td>
          <td>Night Visions</td>
          <td>4:45</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adiconar" />
          </td>
          <td>Radioactive</td>
          <td>Imagine Dragons</td>
          <td>Night Visions</td>
          <td>4:45</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adiconar" />
          </td>
          <td>Radioactive</td>
          <td>Imagine Dragons</td>
          <td>Night Visions</td>
          <td>4:45</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adiconar" />
          </td>
          <td>Radioactive</td>
          <td>Imagine Dragons</td>
          <td>Night Visions</td>
          <td>4:45</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adiconar" />
          </td>
          <td>Radioactive</td>
          <td>Imagine Dragons</td>
          <td>Night Visions</td>
          <td>4:45</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adiconar" />
          </td>
          <td>Radioactive</td>
          <td>Imagine Dragons</td>
          <td>Night Visions</td>
          <td>4:45</td>
        </tr>
      </tbody>
    </SongList>
  </Container>
);

export default Playlist;
