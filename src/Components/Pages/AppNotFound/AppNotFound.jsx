import React from 'react';
import AppNotFoundImg from '../../../assets/App-Error.png'
import { Link } from 'react-router';
const AppNotFound = () => {
    return (
        <div className="justify-items-center py-20">
      <img className="py-10" src={AppNotFoundImg} alt="404" />
      <h1 className="font-semibold text-5xl py-5">OOPS, APP NOT FOUND!!</h1>
      <p>The App you are requesting is not found on our system.  please try another apps</p>
        <Link to={'/'}>
        <div className="  flex items-center justify-center pt-10 pb-20">
          <button className="btn text-white text-lg px-10 py-5 bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)]">
            Go Back !
          </button>
        </div> 
      </Link>
    </div>
    );
};

export default AppNotFound;