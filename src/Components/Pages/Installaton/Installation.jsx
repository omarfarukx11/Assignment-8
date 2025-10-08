import React from "react";
import { getLocalStorageData } from "../../../Utility/AddLS";
import { useLoaderData } from "react-router";
import Install from "./Install";

const Installation = () => {
  const appsList = useLoaderData();
  const getStorageData = getLocalStorageData();
  const filteredApp = appsList.filter((app) =>
    getStorageData.includes(app.id.toString())
  );
  return (
    <div className="my-20">
        <div className="text-center px-5">
          <h1 className="text-5xl font-semibold">Your Installed Apps</h1>
          <p className="text-gray-600 pt-5 ">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
      {filteredApp.map((installApp) => (
        <Install installApp={installApp}></Install>
      ))}
    </div>
  );
};

export default Installation;
