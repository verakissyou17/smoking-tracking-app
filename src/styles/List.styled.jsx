import styled from "styled-components";

export const ListContainer = styled.div`
  width: 100%;
  max-width: 60em;
  margin: 1rem auto;
  padding: 1em;
  overflow-x: auto;
  position: relative;
  box-shadow: 0 2px 4px var(--color-shadow);

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--color-bg);
    z-index: -1;
  }
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: justify;

  thead {
    background-color: var(--color-table-header-bg);
    font-family: "Savate", Arial, sans-serif;
    color: var(--color-text-main);
    letter-spacing: 1px;
  }

  tbody td {
    white-space: nowrap;
  }

  td,
  th {
    padding: 0.5em;
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
    font-family: "Savate", Arial, sans-serif;
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
    if (result <= 0 || result <= 0.5) return "darkgreen";
    if (result <= 1) return "darkorange";
    if (result > 1) return "red";
    return "var(--color-text-main)";
  }};
`;
