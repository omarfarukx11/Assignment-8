import React from "react";
import { Link, NavLink } from "react-router";
import LogoImg from "../../../assets/logo.png";
import GithubLogo from "../../../assets/fi_2111432.png";

const Header = () => {
  const links = (
    <>
      <NavLink to={"/"}>home</NavLink>
      <NavLink to={"/apps"}>Apps</NavLink>
      <NavLink to={"/install"}>Installation</NavLink>
    </>
  );
  return (
    <div className="navbar bg-[#FFFFFF] shadow-sm md:px-10 lg:py-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-sm z-1 mt-3 w-52 p-2 shadow text-xl font-semibold"
          >
            {links}
          </ul>
        </div>
        <Link to={"/"}>
          <div className="flex items-center gap-2">
            <img className="md:w-[50px] w-[30px]" src={LogoImg} alt="" />
            <h1 className="text-xl font-bold bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] bg-clip-text text-transparent">
              HERO.IO
            </h1>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 space-x-5 text-xl font-semibold">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="btn bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)]  text-white md:p-5">
          <a href="https://github.com/omarfarukx11" target="main">
            <span className="flex items-center gap-3 justify-center ">
              <img className="pb-1" src={GithubLogo} alt="githubLogo" />
              Contribute
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
