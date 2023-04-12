import React from "react";
import { Link, NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <div className="bg-gray-100">
      <nav className="py-10 flex flex-col lg:flex-row space-y-4 lg:space-y-0 items-center justify-between my-container">
      <Link to='/'> <h2  className='font-bold text-2xl'>Career<span className='text-3xl text-fuchsia-600'>Bazaar</span></h2></Link>
        <div className="space-x-7  font-semibold">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to={"/"}>
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to={"statistics"}>
            Statistics
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to={"applies"}>
            Applied Jobs
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to={"blog"}>
            Blog
          </NavLink>
        </div>
        <button className="btn-primary">Start Applying</button>
      </nav>
    </div>
  );
};

export default Nav;