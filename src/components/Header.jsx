import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="flex justify-center bg-slate-500 pt-6 h-20 ">
        <div className="flex gap-8 font-sans font-bold text-white ">
          <Link to="/">Home</Link>
          <Link to="/scroll">Scroll</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
