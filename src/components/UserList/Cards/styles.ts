import styled from 'styled-components';
import { COLORS } from '../../../utils/style-helpers';

export const Container = styled.div`
  display: grid;
  grid-gap: 5px;

  >div {
    display: grid;
    grid-gap: 20px;
    grid-auto-flow: column;
    grid-auto-columns: auto 1fr;
    align-items: center;
    padding: 20px;
    background-color: ${COLORS.WHITE};
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    cursor: pointer;

    &:hover {
      background-color: ${COLORS.LIGHT_GREY};
    }
  }
`;

export const DetailsContainer = styled.div`
  display: grid;
  grid-gap: 10px;

  >span {
    font-size: 18px;
    font-weight: 500;
  }
`;

export const AdditionalDetailsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-row: auto auto;
  grid-column-gap: 20px;
  grid-row-gap: 5px;
`;

export const Details = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-auto-flow: column;
  align-items: center;
  grid-auto-columns: max-content;
`;
