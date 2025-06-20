import styled from "styled-components";

export const ListContainer = styled.table`
  width: 100%;
  max-width: 60em;
  margin: 1rem auto;
  padding: 1em;
  border-collapse: collapse;
  table-layout: fixed;
  box-shadow: 0 2px 4px var(--color-shadow);
  text-align: justify;

  thead {
    background-color: var(--color-table-header-bg);

    font-family: "Savate", sans-serif;
  }

  td,
  th {
    padding: 0.5em;
    width: 100%;
    border-right: 1px solid var(--color-border);
  }

  tr {
    box-shadow: 0 1px 1px var(--color-shadow);
  }

  tr:nth-child(even) {
    background-color: var(--color-alt-row);
  }

  thead th:last-child,
  tbody tr td:last-child {
    text-align: center;
    width: 5em;
    border-left: 1px solid var(--color-border);
  }

  .delete-btn {
    font-family: "Savate", sans-serif;
    border: none;
    outline: none;
    background-color: transparent;
    color: var(--color-button-delete);
    font-weight: bold;
    cursor: pointer;

    &:hover {
      color: var(--color-button-delete-hover);
    }
  }
`;

export const StyledRow = styled.td`
  color: ${({ result }) => {
    if (result === 0) return "var(--color-table-header-bg)";
    if (result < 1) return "var(--color-button-accent)";
    if (result > 1) return "var(--color-button-delete)";
    return "var(--color-text-main)";
  }};
`;
