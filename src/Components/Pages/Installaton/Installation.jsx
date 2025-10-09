import React, { useEffect, useState } from "react";
import { getLocalStorageData } from "../../../Utility/AddLS";
import { useLoaderData } from "react-router";
import Install from "./Install";
import {ToastContainer, toast } from "react-toastify";


const Installation = () => {
  const appsList = useLoaderData();
  const [installApps, setInstallApps] = useState([]);
  useEffect(() => {
    const getStorageData = getLocalStorageData();
    const filteredApp = appsList.filter((app) =>
      getStorageData.includes(app.id.toString()));
    setInstallApps(filteredApp);
  }, [appsList]);

  const handleUninstall = (id , title) => {
    const updataInstallApps = installApps.filter(app => app.id !== id) 
    setInstallApps(updataInstallApps)
    
    const localStorageData = getLocalStorageData()
    const updataLocalStorageData = localStorageData.filter(data => data !== String(id)) 
    const stringifyUpdate = JSON.stringify(updataLocalStorageData)
    localStorage.setItem('install' , stringifyUpdate)
    toast(`${title} uninstalled successfully!`);
  }
  
  return (
    <div className="my-20">
      <div className="text-center px-5">
        <h1 className="text-5xl font-semibold">Your Installed Apps</h1>
        <p className="text-gray-600 pt-5 ">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      {installApps.map(installApp => (
        <Install handleUninstall={handleUninstall} key={installApp.id} installApp={installApp}></Install>
      ))}
         <ToastContainer  position="top-center" />
    </div>
  );
};

export default Installation;
