import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="bg-cyan-700 p-8  ">
        <h1 className=" text-3xl md:text-4xl text-center font-bold">
          Team Member Allocation
        </h1>
      </div>
      <div className="p-5 text-lg md:text-xl bg-slate-300 font-semibold">
        <a className="mr-5">
          <Link to="/">Home</Link>
        </a>
        <span>
          <Link to="/grpTM">Teams</Link>
        </span>
      </div>
    </>
  );
}

export default Header;
