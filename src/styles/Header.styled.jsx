import styled from "styled-components";

export const HeaderContainer = styled.header`
  text-align: center;
  background-color: var(--color-bg-header);
  color: var(--color-text-main);
  width: 100%;
  padding: 1em;
  box-shadow: 0 2px 4px var(--color-shadow);

  h1 {
    font-family: "Savate", Arial, sans-serif;
    font-display: swap;
    font-size: 2.5rem;
    margin: 0;
    letter-spacing: 1px;
  }
`;
