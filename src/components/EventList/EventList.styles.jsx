import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const EventListTable = styled.table`
  margin: 0 auto;
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
  padding: 10px 20px;
  border-bottom: 1px solid #ececec;
`;

export const EventLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: underline;
  }
`;
