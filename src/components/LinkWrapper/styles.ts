import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  top: var(--medium);
  right: var(--medium);
  z-index: 1100; // leaflet has z-index 1000
  color: var(--white);
  cursor: pointer;

  svg {
    transition: color 0.3 ease-in-out;
  }
  &:hover {
    svg {
      color: var(--highlight);
    }
  }
`
