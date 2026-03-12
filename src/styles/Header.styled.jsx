import styled from "styled-components";

export const HeaderContainer = styled.header`
  text-align: center;
  background-color: var(--color-bg-header);
  color: var(--black);
  width: 100%;
  padding: 1em;
  box-shadow: 0 2px 4px var(--color-shadow);

  h1 {
    font-family: "Savate", Arial, sans-serif;
    font-size: 2.5rem;
    letter-spacing: 1px;
  }
`;
