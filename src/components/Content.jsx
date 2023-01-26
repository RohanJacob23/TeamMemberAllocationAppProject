function Content(props) {
  const num = props.employees.filter(
    (employee) => employee.teamName === props.team
  );
  return (
    <div className="my-5 mx-3 text-center">
      <h1 className="text-3xl font-bold">
        {props.team} has {num.length} Members
      </h1>
    </div>
  );
}

export default Content;
