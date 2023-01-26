import { useState } from "react";
import CollapseComp from "./CollapseComp";

function teamFilter(a, t) {
  return a.filter((employee) => employee.teamName === t);
}

function teamComponent(t) {
  let teamComp = t.map((employee) => {
    return (
      <div key={employee.id} className="my-4">
        <h1>
          <span className="font-bold">Full Name:</span> {employee.fullName}{" "}
        </h1>
        <h1>
          <span className="font-bold">Designation:</span> {employee.designation}{" "}
        </h1>
      </div>
    );
  });
  return teamComp;
}

function GroupedTeamMembers(props) {
  let teamA = teamFilter(props.employees, "TeamA");
  let teamB = teamFilter(props.employees, "TeamB");
  let teamC = teamFilter(props.employees, "TeamC");
  let teamD = teamFilter(props.employees, "TeamD");

  return (
    <div id="accordionExample">
      <CollapseComp
        key={0}
        id="1"
        teamCompFunc={teamComponent}
        team={teamA}
        teamName="TeamA"
        selectedTeam={props.team}
      />
      <CollapseComp
        key={1}
        id="2"
        teamCompFunc={teamComponent}
        team={teamB}
        teamName="TeamB"
        selectedTeam={props.team}
      />
      <CollapseComp
        key={3}
        id="3"
        teamCompFunc={teamComponent}
        team={teamC}
        teamName="TeamC"
        selectedTeam={props.team}
      />
      <CollapseComp
        key={4}
        id="4"
        teamCompFunc={teamComponent}
        team={teamD}
        teamName="TeamD"
        selectedTeam={props.team}
      />
    </div>
  );
}

export default GroupedTeamMembers;
