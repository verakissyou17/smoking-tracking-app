import { ListContainer, StyledRow } from "../styles/List.styled";

function List({ entries, handleDelete }) {
  return (
    <>
      {entries.length === 0 ? (
        <p className="empty-list-message">Nicio intrare încă.</p>
      ) : (
        <ListContainer>
          <thead>
            <tr>
              <th>Date</th>
              <th>Trigger</th>
              <th>Alternative</th>
              <th>Result</th>
              <th>Outcome</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry, index) => {
              const now = Date.now();
              const result = 
                entry.cigarettes === 0 && entry.goal === 0 ? 0
              : entry.cigarettes > 0 && entry.goal === 0 ? entry.cigarettes 
              : entry.cigarettes / entry.goal;
              return (
                <tr key={index}>
                  <td>
                    {entry.timeStamp === ""
                      ? new Date(now)
                          .toISOString()
                          .split("T")[0]
                          .split("-")
                          .reverse()
                          .join("/")
                      : String(entry.timeStamp)
                          .split("T")[0]
                          .split("-")
                          .reverse()
                          .join("/")}
                  </td>
                  <td>{entry.trigger}</td>
                  <td>
                    {entry.alternative}
                  </td>
                  <StyledRow result={result}>
                    {entry.cigarettes} / {entry.goal}
                  </StyledRow>
                  <td>{entry.outcome || "N/A"}</td>
                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(index)}
                    >
                      X
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </ListContainer>
      )}
    </>
  );
}

export default List;
