import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-64 gap-5">
      <div className="text-5xl font-bold">
        <h1>Loading</h1>
      </div>
      <div className="w-12 h-12 border-6 border-purple-500 border-dashed rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
