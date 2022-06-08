import styled from 'styled-components';
import { COLORS, BREAKPOINTS } from '../../utils/style-helpers';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

export const CardContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  height: 100%;
  grid-gap: 20px;
  background-color: ${COLORS.DARK_BLUE};
  color: ${COLORS.WHITE};

  @media only screen and (min-width: ${BREAKPOINTS.MEDIUM}) {
    justify-content: center;
    align-items: center;
    width: unset;
    height: unset;
    padding: 40px;
    margin: 40px;
    border-radius: 15px;
  }
`;

export const CardHeader = styled.div`
  display: grid;
  grid-gap: 30px;

  a {
    color: ${COLORS.WHITE};
    text-align: center;

    @media only screen and (min-width: ${BREAKPOINTS.MEDIUM}) {
      text-align: left;
    }
  }
`;

export const CardHeaderPhotoName = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-gap: 10px;

  img {
    border-radius: 100px;
    margin-right: auto;
    margin-left: auto;
  }

  span {
    text-align: center;
    font-size: 22px;
    font-weight: 500;
  }
`;

export const CardBody = styled.div`
  display: grid;
  grid-gap: 10px;

  @media only screen and (min-width: ${BREAKPOINTS.MEDIUM}) {
    grid-template-columns: auto auto;
    grid-column-gap: 35px;
    grid-row-gap: 20px;
  }

  >span:nth-of-type(odd) {
    font-weight: 500;
  }
`;

export const Additional = styled.div`
  color: ${COLORS.WHITE};

  a {
    color: ${COLORS.WHITE};
  }
`;
