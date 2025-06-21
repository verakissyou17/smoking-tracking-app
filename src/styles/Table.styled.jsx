import styled from "styled-components";

export const TableContainer = styled.section`
  width: 100%;
  max-width: 60em;
  margin: 1rem auto;
  padding: 1em;
  overflow-x: auto;
  box-shadow: 0 2px 4px var(--color-shadow);
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: justify;
  color: var(--color-text-main);

  thead {
    background-color: var(--color-table-header-bg);
    font-family: "Savate", Arial, sans-serif;
    letter-spacing: 1px;
  }

  tbody td {
    white-space: nowrap;
  }

  td,
  th {
    padding: 0.5em;
    border-right: 2px solid var(--color-border);
  }

  tr:not(:last-child) {
    border-bottom: 2px solid var(--color-border);
  }

  thead th:last-child,
  tbody tr td:last-child {
    text-align: center;
    width: 5em;
    border-left: 2px solid var(--color-border);
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

export const StyledTableData = styled.td`
  color: ${({ result }) => {
    if (result <= 0 || result <= 0.5) return "green";
    if (result <= 1) return "orange";
    if (result > 1) return "red";
    return "var(--color-text-main)";
  }};
`;

export const StyledTableRow = styled.tr`
  background-color: ${({ result }) => {
    if (result <= 0 || result <= 0.5) return "var(--color-table-green)";
    if (result <= 1) return "var(--color-table-orange)";
    if (result > 1) return "var(--color-table-red)";
    return "var(--color-text-main)";
  }};
`;
