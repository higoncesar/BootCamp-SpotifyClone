import React from 'react';

import { Container, Search, User } from './styles';

const Header = () => (
  <Container>
    <Search>
      <input type="text" placeholder="Search" />
    </Search>

    <User>
      <img src="https://avatars2.githubusercontent.com/u/13851431?s=460&v=4" alt="avatar" />
      Higon César
    </User>
  </Container>
);

export default Header;
