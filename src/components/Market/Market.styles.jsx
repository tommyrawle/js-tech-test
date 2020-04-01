import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export const MarketButton = styled.button`
  width: 100%;
  border: none;
  background-color: #002451;
  color: #ffffff;
  padding: 10px;
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

export const ArrowIcon = styled(FontAwesomeIcon)`
  transform: ${({ open }) => (open ? 'rotate(180deg)' : 'rotate(0deg)')};
`;
