import styled from "styled-components";
export const SavingsContainer = styled.section`
  width: 100%;
  max-width: 60em;
  margin: 1rem auto;
  padding: 1em;
  background-color: var(--color-bg);
  box-shadow: 0 2px 4px var(--color-shadow);

  .form-savings {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-block: 1em;

    .form-group {
      font-family: "Savate", Arial, sans-serif;

      label {
        display: block;
        margin-bottom: 0.25em;
      }

      input {
        width: 4rem;
        padding: 0.25em;
        border-radius: 0.5rem;
        border: 1px solid var(--color-border);
      }
    }

    .calculate-btn {
      font-family: "Savate", Arial, sans-serif;
      width: 6rem;
      padding: 0.25em;
      background-color: var(--color-table-header-bg);
      color: var(--color-text-main);
      font-size: 1rem;
      font-weight: bold;
      border: none;
      outline: none;
      border: 1px solid var(--color-border);
      border-radius: 0.5rem;
      align-self: flex-end;
      cursor: pointer;

      &:hover {
        background-color: rgba(15, 180, 164, 0.7);
      }
    }
  }

  .progress-bar-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    & span {
      font-family: "Savate", Arial, sans-serif;
      color: var(--color-text-main);
      font-size: 0.9rem;
      font-weight: bold;
      text-align: center;

    }
  }
`;

export const ProgressBarElement = styled.div`
  width: 85%;
  height: 1.2rem;
  display: block;
  border: 1px solid var(--color-shadow);
  border-radius: 1rem;
  position: relative;
  overflow: hidden;

  &::after {
    content: "${({ $budget, $expenses }) => `${ $budget ? ($expenses * 100) / $budget : ""}%`}";
    text-align: right;
    font-size: 0.8rem; 
    font-family: "Savate", Arial, sans-serif;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${({ $budget, $expenses }) => `${($expenses * 100) / $budget}%`};
    max-width: 100%;
    background-color: ${({ $expenses, $budget }) => {
      if ($expenses <= $budget /2) return "var(--color-table-green)";
      if ($expenses <= $budget) return "var(--color-table-orange)";
         return "var(--color-table-red)";
    }};
    border-radius: 1rem;
    transition: width 0.3s ease-in-out;
  }
`;
