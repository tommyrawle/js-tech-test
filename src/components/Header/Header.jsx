import React from 'react';
import PropTypes from 'prop-types';
import { HeaderContainer, HeaderText } from './Header.styles.jsx';
import Toggle from '../Toggle/Toggle.jsx';

const Header = ({ title }) => {
  return (
    <HeaderContainer>
      <HeaderText>{title}</HeaderText>
      <Toggle />
    </HeaderContainer>
  );
};

Header.propTypes = {
  title: PropTypes.string
};

export default Header;
