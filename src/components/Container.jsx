import { ContainerStyled, ContainerBody } from "../styles/Container.styled";

function Container({ entries, handleDelete }) {
  return (
    <>
      {entries.length === 0 ? (
        <p className="empty-list-message">No entry yet</p>
      ) : (
        <ContainerStyled>
          <div className="container-header">
            <span>Date</span>
            <span>Trigger</span>
            <span>Alternative</span>
            <span>Result</span>
            <span>Outcome</span>
            <span>Delete</span>
          </div>
          {entries.map((entry, index) => {
            const now = Date.now();
            const color =
              entry.cigarettes > entry.goal
                ? "var(--color-red-alpha)"
                : entry.cigarettes < entry.goal
                  ? "var(--color-green-alpha)"
                  : "var(--color-light-orange-alpha)";

            return (
              <ContainerBody $color={color} key={index}>
                <span>
                  {(entry.timeStamp === ""
                    ? new Date(now)
                    : new Date(entry.timeStamp)
                  ).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "2-digit",
                  })}
                </span>
                <span>{entry.trigger}</span>
                <span>{entry.alternative}</span>
                <span>
                  {entry.cigarettes} / {entry.goal}
                </span>
                <span>{entry.cigarettes - entry.goal}</span>
                <span>
                  <span
                    className="delete-btn"
                    onClick={() => handleDelete(index)}
                  >
                    X
                  </span>
                </span>
              </ContainerBody>
            );
          })}
        </ContainerStyled>
      )}
    </>
  );
}

export default Container;
