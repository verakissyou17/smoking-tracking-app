import styled from "styled-components";
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 23em;
  padding: 1em;
  margin: 2em auto;
  background-color: var(--color-bg-light);
  box-shadow: 2px 2px 5px var(--color-shadow);

  @media (min-width: 63em) {
    max-width: 63em;
  }

  fieldset {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2em;
    border: none;
    outline: none;

    .form-group {
      margin-bottom: 0;
    }
  }

  .form-group {
    margin-bottom: 1em;
    width: 100%;

    label {
      display: block;
      margin-bottom: 0.5em;
      font-weight: bold;
    }

    input,
    textarea {
      width: 100%;
      padding: 0.5em;
      border-radius: 4px;
      border: 1px solid var(--color-border);
      font-family: "Savate", Arial, sans-serif;
    }

    input::placeholder,
    textarea::placeholder {
      color: var(--black);
      font-size: 0.7rem;
      opacity: 0.8;
      font-style: italic;
    }
  }

  button {
    font-family: "Savate", Arial, sans-serif;
    width: 30%;
    margin: 2em auto 1em;
    padding: 0.5em 1em;
    background-color: var(--color-button-accent);
    color: var(--black);
    font-size: 1.2rem;
    font-weight: bold;
    border: none;
    border-radius: 0.75rem;
    cursor: pointer;

    &:hover {
      background-color: var(--color-button-accent-hover);
    }
  }

  .error-message {
    color: red;
    font-size: 0.75rem;
    margin-top: 0.25em;
  }
`;
