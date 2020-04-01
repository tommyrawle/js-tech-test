import styled from 'styled-components';

export const EventListTableCell = styled.td`
  padding: ${({ eventCell }) => (eventCell ? '10px 20px' : '')};
  border-bottom: 1px solid #ececec;
`;

export const EventMarkets = styled.div`
  width: 60%;
  margin: 0 auto;
  @media (max-width: 676px) {
    width: 100%;
  }
`;
