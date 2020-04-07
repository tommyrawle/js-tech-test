import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #002451;
  width: 100%;
  padding: 15px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > * {
    flex: 1;
  }
`;

export const HeaderText = styled.h1`
  color: #ffffff;
  text-align: ${({ centered }) => (centered ? 'center' : 'left')};
`;

export const HeaderBackButton = styled.button`
  font-size: 2rem;
  border: none;
  background-color: transparent;
  color: #ffffff;
  cursor: pointer;
`;
HeaderBackButton.displayName = 'HeaderBackButton';
