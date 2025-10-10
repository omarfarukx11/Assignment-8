import React from "react";
import Banner from "../../Banner/Banner";
import TrendingApps from "../../TrendingApps/TrendingApps";
import { Link, useLoaderData } from "react-router";

const Home = () => {
  const appsData = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <div className="text-center pt-20 pb-10 ">
        <h1 className="text-5xl font-semibold pb-3 px-5">Trending Apps</h1>
        <p className="text-gray-500 px-5">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-5 md:px-10 px-4">
        {appsData.slice(0, 8).map((appData) => (
          <TrendingApps key={appData.id} appData={appData} />
        ))}
      </div>

      <div className="  flex items-center justify-center pt-10 pb-20">
        <Link to={"/apps"}>
          <button className="btn text-white text-lg px-10 py-5 bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)]">
            Show All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
