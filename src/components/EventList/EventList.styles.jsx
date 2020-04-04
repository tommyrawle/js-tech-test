import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const EventListInput = styled.input`
  margin-left: 5px;
`;
export const EventListTableContainer = styled.div`
  margin: 1rem auto;
  width: 70%;
  @media (max-width: 676px) {
    width: 100%;
  }
`;

export const EventListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #002451;
  color: #ffffff;
  padding: 0 20px;
`;
export const EventListTable = styled.table`
  width: 100%;
`;

export const EventListTableRow = styled.tr`
  background-color: #f2f2f2;
  &:nth-child(even) {
    background-color: #ffffff;
    td {
      border-bottom: none;
    }
  }
`;

export const EventListTableCell = styled.td`
  padding: ${({ eventCell }) => (eventCell ? '10px 20px' : '')};
  border-bottom: 1px solid #ececec;
  ${({ timeColumn }) => timeColumn && 'width: 100px; text-align: center'};

  ${({ marketColumn }) => marketColumn && 'width: 40%; vertical-align: top'};
`;

export const EventLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: underline;
  }
`;

export const EventImage = styled.img`
  width: 100%;
  height: auto;
`;
