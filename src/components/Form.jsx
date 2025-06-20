import { useState } from "react";
import { FormContainer } from "../styles/Form.styled";

function Form({ addEntry }) {
  const [cigarettes, setCigarettes] = useState("");
  const [goal, setGoal] = useState("");
  const [timeStamp, setTimeStamp] = useState("");
  const [trigger, setTrigger] = useState("");
  const [alternative, setAlternative] = useState("");
  const [outcome, setOutcome] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!trigger || !alternative || !outcome) {
      setError("Please fill in all fields.");
      return;
    } else {
      setError("");
    }

    const entry = {
      cigarettes: Number(cigarettes),
      goal: Number(goal),
      timeStamp: timeStamp ? new Date(timeStamp).toISOString() : "",
      trigger,
      alternative,
      outcome,
    };
    addEntry(entry);
    setCigarettes("");
    setGoal("");
    setTimeStamp("");
    setTrigger("");
    setAlternative("");
    setOutcome("");
    setError("");
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <fieldset>
        <div className="form-group">
          <label htmlFor="cigarettes">Cigarettes per day:</label>
          <input
            type="number"
            min={0}
            id="cigarettes"
            name="cigarettes"
            value={cigarettes}
            onChange={(e) => {
              const val = e.target.value;
              setCigarettes(Number(val));
            }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="goal">Goal:</label>
          <input
            type="number"
            min={0}
            id="goal"
            name="goal"
            value={goal}
            onChange={(e) => {
              const val = e.target.value;
              setGoal(Number(val));
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="timestamp">Date:</label>
          <input
            type="date"
            id="timestamp"
            name="timestamp"
            value={timeStamp}
            onChange={(e) => setTimeStamp(e.target.value)}
          />
        </div>
      </fieldset>

      <div className="form-group">
        <label htmlFor="trigger">Trigger:</label>
        <input
          type="text"
          id="trigger"
          name="trigger"
          value={trigger}
          onChange={(e) => {
            if (e.target.value.length < 0) {
              setError("Trigger cannot be empty.");
              return;
            } else {
              setError("");
            }

            setTrigger(e.target.value);
          }}
        />
        <small className="error-message">{error}</small>
      </div>
      <div className="form-group">
        <label htmlFor="alternative">Alternative:</label>
        <input
          type="text"
          id="alternative"
          name="alternative"
          value={alternative}
          onChange={(e) => {
            if (e.target.value.length < 0) {
              setError("Alternative cannot be empty.");
              return;
            } else {
              setError("");
            }

            setAlternative(e.target.value);
          }}
        />
        <small className="error-message">{error}</small>
      </div>
      <div className="form-group">
        <label htmlFor="outcome">Outcome:</label>
        <textarea
          id="outcome"
          name="outcome"
          value={outcome}
          onChange={(e) => {
            if (e.target.value.length < 0) {
              setError("Alternative cannot be empty.");
              return;
            } else {
              setError("");
            }
            setOutcome(e.target.value);
          }}
        />
        <small className="error-message">{error}</small>
      </div>

      <button type="submit">Submit</button>
    </FormContainer>
  );
}

export default Form;
