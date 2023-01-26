import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Emp from "./components/Employees";
import GroupedTeamMembers from "./components/GroupedTeamMembers";
import WrongPath from "./components/WrongPath";
import { empData } from "./components/data";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [team, setTeam] = useState(
    JSON.parse(localStorage.getItem("selectedTeam")) || "TeamA"
  );
  const [employees, setEmployees] = useState(
    JSON.parse(localStorage.getItem("employees")) || empData
  );

  // function to change the select tag value
  function selectTag(event) {
    // event.currentTarget.classList.toggle("border-black");
    setTeam(event.target.value);
  }

  function shadow(event) {
    const change = employees.map((employee) => {
      event.currentTarget.classList.toggle("border-black");
      // change the team name when clicked
      if (employee.id === parseInt(event.currentTarget.id)) {
        // checking whether the selected id is already in that 'team'
        // if yes then deselecting it from that team
        if (employee.teamName === team) {
          return {
            ...employee,
            teamName: "No team",
          };
        }

        // or return the employee object with changed team
        return {
          ...employee,
          teamName: team,
        };
      } else {
        // else returning the object that does not matches the selected id
        return {
          ...employee,
        };
      }
    });
    // changing the employees object
    setEmployees(change);
    event.currentTarget.classList.toggle("border-black");
  }

  // using useEffect to set the local storage whenever the employees get updated
  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  // using useEffect to set the local storage whenever the team get updated
  useEffect(() => {
    localStorage.setItem("selectedTeam", JSON.stringify(team));
  }, [team]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          index
          element={
            <>
              <Content team={team} employees={employees} />
              <Emp
                team={team}
                employees={employees}
                sh={shadow}
                selectTag={selectTag}
                selectValue={team}
              />
            </>
          }
        />
        <Route
          path="/grpTM"
          element={
            <GroupedTeamMembers
              team={team}
              employees={employees}
              setTeam={setTeam}
            />
          }
        />
        <Route path="*" element={<WrongPath />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
