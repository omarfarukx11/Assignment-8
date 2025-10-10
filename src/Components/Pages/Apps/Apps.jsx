import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { useLoaderData } from "react-router";
import AllApp from "../AllApp/AllApp";
import AppNotFound from "../AppNotFound/AppNotFound";
import Loader from "../Loader/Loader";


const Apps = () => {
  const allAppsData = useLoaderData();
  const [searchData, setSearchData] = useState("");
  const [filteredApps, setFilteredApps] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeOutSet = setTimeout(() => {
      const filteredAllApps = allAppsData.filter((app) =>
        app.title.toLowerCase().includes(searchData.toLowerCase())
      );
      setFilteredApps(filteredAllApps);
      setLoading(false);
    }, 400);

    const timeoutClear =  () => clearTimeout(timeOutSet);
    return timeoutClear;
  }, [searchData, allAppsData]);

  return (
    <div className="md:px-10 px-4">
      <div className="text-center my-16 px-5">
        <h1 className="text-5xl font-semibold">Our All Applications</h1>
        <p className="text-gray-600 py-5">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="flex items-center md:flex-row flex-col gap-5 justify-between mb-5 text-xl font-semibold">
        <p>
          <span>({filteredApps.length})</span> Apps Found
        </p>
        <label className="outline-none border border-gray-200 flex px-4 py-2 rounded-lg items-center gap-4">
          <CiSearch className="text-xl" />
          <input
            onChange={(e) => setSearchData(e.target.value)}
            type="search"
            className="text-lg outline-none"
            required
            placeholder="Search"
          />
        </label>
      </div>

      {loading ? 
        <Loader></Loader>
       : filteredApps.length > 0 ? 
        <div className="grid xl:grid-cols-4 gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mb-20">
          {filteredApps.map((data) => (
            <AllApp key={data.id} data={data}></AllApp>
          ))}
        </div>
      : 
        <AppNotFound />
      }
    </div>
  );
};

export default Apps;
