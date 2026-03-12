import styled from "styled-components";

export const ContainerStyled = styled.section`
  width: 100%;
  max-width: 60em;
  margin: 1rem auto;
  box-shadow: 0 2px 4px var(--color-shadow);
  border: 2px solid var(--color-border);
  background-color: var(--color-bg-light);
  border-radius: 0.5rem;
  font-size: 0.8rem;

  .container-header {
    display: flex;
    align-items: center;
    background-color: var(--color-green-blue);
    padding: 1em;
  }

  .container-header span {
    flex: 1;
    text-align: center;
  }
`;

export const ContainerBody = styled.div`
  display: flex;
  align-items: center;

  span {
    flex: 1;
    text-align: center;
    padding: 0.25rem;
    border-bottom: 1px solid var(--color-border);
    background-color: ${({ $color }) => $color};
    color: var(--color-text-dark);
  }

  .delete-btn {
    border: none;
    outline: none;
    background-color: transparent;
    color: var(--color-button-delete);
  }
`;
