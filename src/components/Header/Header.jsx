import React from 'react';
import PropTypes from 'prop-types';
import { HeaderContainer, HeaderText, HeaderBackButton } from './Header.styles.jsx';
import Toggle from '../Toggle/Toggle.jsx';
import { useLocation, useHistory } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';

const Header = ({ title }) => {
  const { pathname } = useLocation();
  let history = useHistory();
  return (
    <HeaderContainer>
      {pathname.length > 1 && (
        <div>
          <HeaderBackButton onClick={() => history.push('/')}>
            <FontAwesomeIcon icon={faArrowAltCircleLeft} />
          </HeaderBackButton>
        </div>
      )}
      <HeaderText centered={pathname.length > 1}>{title}</HeaderText>
      <Toggle />
    </HeaderContainer>
  );
};

Header.propTypes = {
  title: PropTypes.string
};

export default Header;
