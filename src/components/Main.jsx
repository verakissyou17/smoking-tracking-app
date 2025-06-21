import { useState, useEffect } from "react";
import Form from "./Form";
import Table from "./Table.jsx";
import Savings from "./Savings.jsx";
import { loadEntries, saveEntries } from "../localData.js";
import { MainContainer } from "../styles/Main.styled.jsx";

function Main() {
  const [entries, setEntries] = useState([]);
  const [total, setTotal] = useState(0);
  const [price, setPrice] = useState(0);
  const [budget, setBudget] = useState(0);
  const [expenses, setExpenses] = useState(0);

  useEffect(() => {
    const stored = loadEntries();
    setEntries(stored);
    const totalCigarettes = stored.reduce(
      (acc, curr) => acc + curr.cigarettes,
      0
    );
    setTotal(totalCigarettes.toFixed(2));
  }, []);

  const addEntry = (entry) => {
    const updated = [...entries, entry];
    setEntries(updated);
    saveEntries(updated);
    const totalCigarettes = updated.reduce(
      (acc, curr) => acc + curr.cigarettes,
      0
    );
    setTotal(totalCigarettes.toFixed(2));
    calculateExpenses();
  };

  const handleDelete = (indexToRemove) => {
    setEntries((prev) => prev.filter((_, index) => index !== indexToRemove));
    const updated = entries.filter((_, index) => index !== indexToRemove);
    saveEntries(updated);
    const totalCigarettes = updated.reduce(
      (acc, curr) => acc + curr.cigarettes,
      0
    );
    setTotal(totalCigarettes.toFixed(2));
    calculateExpenses();
  };

  const handleBudgetChange = (e) => {
    setBudget(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const calculateExpenses = () => {
    if (price <= 0 || budget <= 0) return 0;
    const expenses = Math.floor(total * (price / 20));
    setExpenses(expenses);
  };

  return (
    <MainContainer>
      <Form addEntry={addEntry} />
      {entries.length > 0 ? (
        <Savings
          total={total}
          handleBudgetChange={handleBudgetChange}
          handlePriceChange={handlePriceChange}
          calculateExpenses={calculateExpenses}
          expenses={expenses}
          budget={budget}
          price={price}
        />
      ) : null}
      <Table entries={entries} handleDelete={handleDelete} />
    </MainContainer>
  );
}

export default Main;
