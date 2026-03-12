import { useState, useEffect } from "react";
import Form from "./Form.jsx";
import Container from "./Container.jsx";
import Savings from "./Savings.jsx";
import { loadEntries, saveEntries } from "../localData.js";
import { MainContainer } from "../styles/Main.styled.jsx";

function Main() {
  const [entries, setEntries] = useState([]);
  const [total, setTotal] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [price, setPrice] = useState(0);
  const [savings, setSavings] = useState(0);

  useEffect(() => {
    const stored = loadEntries();
    setEntries(stored);
    calculateTotal(stored);
  }, []);

  function calculateTotal(entry) {
    const totalCigarettes = entry.reduce(
      (acc, curr) => acc + curr.cigarettes,
      0,
    );
    const totalGoals = entry.reduce((acc, curr) => acc + curr.goal, 0);
   if(totalGoals > totalCigarettes) {
    setTotal(totalGoals - totalCigarettes);
   } else if(totalGoals < totalCigarettes) {
    setTotal(totalCigarettes -totalGoals);
   } else {
    setTotal(0);
   }
  }

  const addEntry = (entry) => {
    const updated = [...entries, entry];
    setEntries(updated);
    saveEntries(updated);
    calculateExpenses();
    calculateTotal(updated);
  };

  const handleDelete = (indexToRemove) => {
    setEntries((prev) => prev.filter((_, index) => index !== indexToRemove));
    const updated = entries.filter((_, index) => index !== indexToRemove);
    saveEntries(updated);
    calculateExpenses();
    calculateTotal(updated);
  };

  const calculateExpenses = () => {
    if (price <= 0 || savings <= 0) return;
    const calculated = (total * (price / 20)).toFixed(2);
    setExpenses(calculated);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  function handleSavingsChange(e) {
    setSavings(e.target.value);
  }

  return (
    <MainContainer>
      <Form addEntry={addEntry} />
      {entries.length > 0 ? (
        <Savings
          total={total}
          price={price}
          handlePriceChange={handlePriceChange}
          expenses={expenses}
          calculateExpenses={calculateExpenses}
          savings={savings}
          handleSavingsChange={handleSavingsChange}
        />
      ) : null}
      <Container entries={entries} handleDelete={handleDelete} />
    </MainContainer>
  );
}

export default Main;
