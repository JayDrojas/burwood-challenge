import "./UserInput.css"

const UserInput = ({ input, rank }) => {
  return (
    <div key={input._id.$oid} className="user-input">
      <h2>Rank: {rank}</h2>
      <p>Number: {input.user_input}</p>
      <p>Times it was used: {input.count}</p>
    </div>
  );
};

export default UserInput;
