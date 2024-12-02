const Anecdote = ({ anecdote }) => {
  return (
    <>
      <p>{anecdote.text}</p>
      <div>
        <p>
          <strong>Votes:</strong> {anecdote.votes}
        </p>
      </div>
    </>
  );
};

export default Anecdote;
