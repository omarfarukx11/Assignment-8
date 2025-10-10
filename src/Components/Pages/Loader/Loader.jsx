import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-64 gap-5">
      <div className="sm:text-5xl text-2xl font-bold">
        <h1 className="text-xl sm:text-5xl font-bold bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] bg-clip-text text-transparent">Loading</h1>
      </div>
      <div className="sm:w-12 sm:h-12 w-8 h-8 border-6 border-purple-500 border-dashed rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
