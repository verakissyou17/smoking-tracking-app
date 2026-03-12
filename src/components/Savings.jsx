import { SavingsContainer, ProgressBarElement } from "../styles/Savings.styled";

function Savings({
  total,
  calculateExpenses,
  expenses,
  savings,
  handleSavingsChange,
  price,
  handlePriceChange,
}) {
  const percent = savings ? (expenses * 100) / savings : 0;
  return (
    <SavingsContainer>
      <h2>Calculate your savings</h2>
      <form className="form-savings">
        <div className="form-group">
          <label htmlFor="price">Price/pack:</label>
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
        <div className="form-group">
          <label htmlFor="savings">Savings:</label>
          <input
            type="number"
            id="savings"
            name="savings"
            min={0}
            onChange={handleSavingsChange}
            value={savings}
            className="price-input"
          />
        </div>
        <button
          type="button"
          className="calculate-btn"
          disabled={!price}
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
            $savings={savings}
            $percent={percent}
          />
          <span>{savings}</span>
        </div>
      ) : (
        <p>Enter the price per package.</p>
      )}

      <h3 className="savings">Savings: {expenses}</h3>
    </SavingsContainer>
  );
}

export default Savings;
