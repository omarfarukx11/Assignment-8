import React, { useEffect, useState } from "react";
import { getLocalStorageData } from "../../../Utility/AddLS";
import { useLoaderData } from "react-router";
import Install from "./Install";
import { ToastContainer, toast } from "react-toastify";

const Installation = () => {
  const appsList = useLoaderData();
  const [installApps, setInstallApps] = useState([]);
  const [sort , setSort ] = useState('')
  useEffect(() => {
    const getStorageData = getLocalStorageData();
    const filteredApp = appsList.filter((app) =>
      getStorageData.includes(app.id.toString())
    );
    setInstallApps(filteredApp);
  }, [appsList]);

  const handleUninstall = (id, title) => {
    const updataInstallApps = installApps.filter((app) => app.id !== id);
    setInstallApps(updataInstallApps);

    const localStorageData = getLocalStorageData();
    const updataLocalStorageData = localStorageData.filter(
      (data) => data !== String(id)
    );
    const stringifyUpdate = JSON.stringify(updataLocalStorageData);
    localStorage.setItem("install", stringifyUpdate);
    toast(`${title} uninstalled successfully!`);
  };

  const handleSort = (type) => {
    setSort(type)
    if(type === "low") {
      const sortedByPage = [...installApps].sort((a,b) => a.downloads - b.downloads)
      setInstallApps(sortedByPage)
      console.log(sortedByPage)
    }
    if(type === "high") {
      const sortedByPage = [...installApps].sort((a,b) => b.downloads - a.downloads);
      setInstallApps(sortedByPage)
    }
    console.log(setInstallApps)
  }
  

  return (
    <div className="my-20 px-10">
      <div className="text-center px-5">
        <h1 className="text-5xl font-semibold">Your Installed Apps</h1>
        <p className="text-gray-600 pt-5 ">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="flex items-center justify-between pt-10 flex-col-reverse gap-5 md:flex-row">
        <p className="text-xl font-semibold">
          <span>{installApps.length}</span> Apps Found
        </p>
        <div className="dropdown dropdown-bottom rounded-sm px-6 py-2 bg-white shadow-xl">
         <select onChange={e => handleSort(e.target.value)} className="p-2 text-lg ">
          <option selected>Sort By Size </option>
          <option value={'low'}>Low-High</option>
          <option value={'high'}>High-Low</option>
         </select>
        </div>
      </div>

      {installApps.map((installApp) => (
        <Install
          handleUninstall={handleUninstall}
          key={installApp.id}
          installApp={installApp}
        ></Install>
      ))}
      <ToastContainer position="top-center" />
    </div>
  );
};

export default Installation;
