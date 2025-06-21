import { useState, useEffect } from "react";
import Form from "./Form";
import List from "./List";
import { loadEntries, saveEntries } from "../localData.js";
import { MainContainer } from "../styles/Main.styled.jsx";

function Main() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const stored = loadEntries();
    setEntries(stored);
  }, []);

  const addEntry = (entry) => {
    const updated = [...entries, entry];
    setEntries(updated);
    saveEntries(updated);
  };

  const handleDelete = (indexToRemove) => {
    setEntries((prev) => prev.filter((_, index) => index !== indexToRemove));
    const updated = entries.filter((_, index) => index !== indexToRemove);
    saveEntries(updated);
  };

  return (
    <MainContainer>
      <Form addEntry={addEntry} />
      <List entries={entries} handleDelete={handleDelete} />
    </MainContainer>
  );
}

export default Main;
