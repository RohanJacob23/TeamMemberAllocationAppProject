import CardStructure from "./card";

function Emp(props) {
  //   iterating to the empData array
  const a = props.employees.map((employee) => {
    return (
      <CardStructure
        key={employee.id}
        id={employee.id}
        gender={employee.gender}
        fullName={employee.fullName}
        designation={employee.designation}
        teamName={employee.teamName}
        shadow={props.sh}
        clName={`border-4 text-center rounded-lg ${
          employee.teamName === props.team ? "border-black" : ""
        }`}
      />
    );
  });

  return (
    <>
      <div className="text-center mb-10">
        <select
          name="select"
          id=""
          className="text-xl border-4 w-1/2"
          onChange={props.selectTag}
          value={props.selectValue}
        >
          {/* <option value="All">All</option> */}
          <option value="TeamA">TeamA</option>
          <option value="TeamB">TeamB</option>
          <option value="TeamC">TeamC</option>
          <option value="TeamD">TeamD</option>
        </select>
      </div>
      <div className="grid sm:grid-cols-3 grid-cols-1 gap-3 w-1/2 sm:w-9/12 m-auto">
        {a}
      </div>
    </>
  );
}

export default Emp;
