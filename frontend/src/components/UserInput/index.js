const UserInput = ({ input }) => {
  return (
    <div key={input._id.$oid}>
      <h2>Number used: {input.user_input}</h2>
      <p>Times it was used: {input.count}</p>
    </div>
  );
};

export default UserInput;
