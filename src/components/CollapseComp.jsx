import React from "react";

function CollapseComp(props) {
  return (
    <div className="text-center ">
      <div
        className="text-2xl cursor-pointer border py-4 font-semibold border-slate-600 border-2 my-5"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={`#collapseExample${props.id}`}
        aria-expanded="false"
        aria-controls={`#collapseExample${props.id}`}
      >
        Team Name: {props.teamName}
      </div>
      <div
        className={`collapse ${
          props.selectedTeam === props.teamName ? "show" : ""
        }`}
        id={`collapseExample${props.id}`}
        data-bs-parent="#accordionExample"
      >
        <div className="block p-6 rounded-lg shadow-lg bg-white border-b-2 border-slate-600">
          {props.teamCompFunc(props.team)}
        </div>
      </div>
    </div>
  );
}

export default CollapseComp;
