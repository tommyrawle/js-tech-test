import styled from 'styled-components';

export const ToggleWrapper = styled.div`
  color: #ffffff;
  text-align: right;
`;

export const ToggleButtonWrapper = styled.div`
  margin-top: 5px;
`;

export const ToggleButton = styled.button`
  background-color: ${({ isActive }) => (isActive ? '#e5e5e5' : '#ffffff')};
  cursor: pointer;
  &:hover {
    background-color: ${({ isActive }) => (isActive ? '#D9D9D9' : '#f2f2f2')};

  }
  border: 1px solid #e0e0e0
  text-transform: uppercase;
  color: #535353;
  border-radius: ${({ left }) => (left ? '5px 0 0 5px' : '0 5px 5px 0')};
  font-size: 16px;
  padding: 10px;
  outline: none;
`;
