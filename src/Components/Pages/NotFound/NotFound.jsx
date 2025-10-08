import React from "react";
import NotFoundImg from "../../../assets/error-404.png";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="justify-items-center py-20">
      <img className="py-10" src={NotFoundImg} alt="404" />
      <h1 className="font-semibold text-5xl py-5 uppercase">Oops, page not found!!</h1>
      <p>The page you are looking for is not available.</p>
      <Link to={"/"}>
        <div className="  flex items-center justify-center pt-10 pb-20">
          <button className="btn text-white text-lg px-10 py-5 bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)]">
            Go Back !
          </button>
        </div>
      </Link>
    </div>
  );
};

export default NotFound;
