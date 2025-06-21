import { SavingsContainer, ProgressBarElement } from "../styles/Savings.styled";

function Savings({
  total,
  budget,
  price,
  handleBudgetChange,
  handlePriceChange,
  calculateExpenses,
  expenses,
}) {
  return (
    <SavingsContainer>
      <h2>Calculate your savings</h2>
      <form className="form-savings">
        <div className="form-group">
          <label htmlFor="budget">Budget:</label>
          <input
            type="number"
            id="budget"
            name="budget"
            min={0}
            onChange={handleBudgetChange}
            value={budget}
            className="budget-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price per pack:</label>
          <input
            type="number"
            id="price"
            name="price"
            min={0}
            onChange={handlePriceChange}
            value={price}
            className="price-input"
          />
        </div>
        <button
          type="button"
          className="calculate-btn"
          onClick={() => {
            calculateExpenses();
          }}
        >
          Calculate
        </button>
      </form>

      {expenses ? (
        <div className="progress-bar-container">
          <ProgressBarElement
            role="progressbar"
            className="progress-bar"
            $total={total}
            $expenses={expenses}
            $budget={budget}
          />
          <span>
            {expenses} / {budget}
          </span>
        </div>
      ) : (
        <p>Enter a budget and a price.</p>
      )}
    </SavingsContainer>
  );
}

export default Savings;
