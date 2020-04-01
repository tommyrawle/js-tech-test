import styled from 'styled-components';
import BGImage from '../../assets/bg-dark.jpg';

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

export const EventDetailsBlock = styled.div`
  background-image: url(${BGImage});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: row;
  color: #fff;
  padding: 3rem 0;
`;

export const EventDetailsTeam = styled.div`
  width:50%;
  border-${props => props.alignment}: solid 1px #fff;
  text-align:center;
  padding: 10px;

`;

export const EventDetailsPosition = styled.div`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const EventDetailsTeamName = styled.div`
  font-size: 2rem;
  margin-bottom: 1em;
  font-weight: bold;
`;

export const EventDetailsScore = styled.div`
  width: 50px;
  height: 50px;
  font-size: 2.5rem;
  font-weight: bold;
  background-color: #fff;
  color: #000;
  mix-blend-mode: screen;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SecondaryDetailsBlock = styled.div`
  background-color: #ffffff;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ececec;
  margin-bottom: 1rem;
`;

export const DetailsEventType = styled.h2`
  margin: 0;
`;
export const DetailsEventDate = styled.div`
  display: flex;
  align-items: center;
`;
export const LiveIndicator = styled.span`
  animation: blink 1.5s linear infinite;
  width: 16px;
  height: 16px;
  background: red;
  border-radius: 100%;
  display: inline-block;
  margin-left: 20px;

  @keyframes blink {
    49% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    99% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
