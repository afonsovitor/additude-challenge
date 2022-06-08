import styled from 'styled-components';
import { COLORS, BREAKPOINTS } from '../../utils/style-helpers';

export const Container = styled.div`
  display: grid;
  grid-gap: 15px;
  padding: 20px;

  @media only screen and (min-width: ${BREAKPOINTS.SMALL}) {
    padding: 40px;
  }

  input {
    border: 1px solid #63666A;
    border-radius: 1px;
    padding: 8px;
    outline: none;
  }
`;

export const FilterSortContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-auto-flow: row;

  @media only screen and (min-width: ${BREAKPOINTS.MEDIUM}) {
    grid-auto-flow: column;
  }
`;

export const SortContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 20px;

  select {
    height: 33px;
  }
`;

export const ErrorLoadingContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  color: ${COLORS.WHITE};
`;
