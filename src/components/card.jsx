//   card structure component
function CardStructure(props) {
  return (
    <div id={props.id} className={props.clName} onClick={props.shadow}>
      <div>
        <img
          src={require(`../images/${
            props.gender == "female" ? "female" : "male"
          }Profile.jpg`)}
          alt=""
          className="w-full rounded-t-lg"
        />
      </div>
      {/* <p>{props.id}</p> */}
      <div>
        <h1 className="text-2xl my-4">Full Name: {props.fullName}</h1>
      </div>
      <p>
        <b>Designation: </b>
        {props.designation}
      </p>
      <p>
        <b>Gender: </b>
        {props.gender}
      </p>
      <p>
        <b>Team: </b>
        {props.teamName}
      </p>
    </div>
  );
}
export default CardStructure;
