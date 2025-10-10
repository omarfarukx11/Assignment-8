import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import DownloadImg from "../../../assets/icon-downloads.png";
import StarImg from "../../../assets/icon-ratings.png";
import LikeImg from "../../../assets/icon-review.png";
import { ToastContainer, toast } from "react-toastify";
import {
  Bar,
  ComposedChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { addToLocalStorage, getLocalStorageData } from "../../../Utility/AddLS";
import AppNotFound from "../AppNotFound/AppNotFound";

const AppDetails = () => {
  const [isInstall, setIsInstall] = useState(false);
  const { id } = useParams();
  const appId = parseInt(id);
  const appsData = useLoaderData();

  const singleAppDetails = appsData.find((app) => app.id === appId);
  if(!singleAppDetails) {
    return <AppNotFound></AppNotFound>
  }
  const {
    image,
    title,
    companyName,
    ratingAvg,
    ratings,
    downloads,
    reviews,
    description,
    size,
  } = singleAppDetails;

  useEffect(() => {
    const localStorageData = getLocalStorageData();
    if (localStorageData.includes(String(appId))) {
      setIsInstall(true);
    }
  }, [appId]);

  const handleInstall = (id) => {
    addToLocalStorage(id);
    setIsInstall(true);
    toast(`${title} installed successfully!`);
  };

  return (
    <div className="py-20 bg-[#f5f5f5] px-10">
      <div className="flex flex-col lg:flex-row gap-10 relative">
        <div>
          <img
            className="md:w-[400px] md:h-[400px] w-[150px] h-[150px] rounded-lg lg:mx-0 mx-auto"
            src={image}
            alt="app"
          />
        </div>
        <div>
          <div className="lg:text-start text-center">
            <h1 className="md:text-5xl text-2xl font-semibold">{title}</h1>
            <p className="md:text-xl pt-3">
              Developed By {''}
              <span className="bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] bg-clip-text text-transparent text-xl"> 
              {companyName}
              </span>
            </p>
            <div className="divider mt-5 divider-start"></div>
          </div>


          
          <div className="grid grid-cols-3 lg:justify-items-normal justify-items-center  md:gap-10 pt-5 ">
            <div className="justify-items-center">
              <img className="w-[20px]  pb-2" src={DownloadImg} alt="downloadImage" />
              <p className="md:py-3 text-[10px]">Downloads</p>
              <h1 className="md:text-5xl font-semibold">{downloads} M</h1>
            </div>
            <div className="justify-items-center">
              <img className="w-[20px]  pb-2" src={StarImg} alt="downloadImage" />
              <p className="md:py-3 text-[10px]">Average Ratings</p>
              <h1 className="md:text-5xl font-semibold">{ratingAvg}</h1>
            </div>
            <div className="justify-items-center">
              <img className="w-[20px]  pb-2" src={LikeImg} alt="downloadImage" />
              <p className="md:py-3 text-[10px]">Total Reviews</p>
              <h1 className="md:text-5xl font-semibold">{reviews}</h1>
            </div>
          </div>
          <div className=" lg:absolute bottom-0 text-center md:py-0 py-6">
            <button
              onClick={() => {
                handleInstall(id);
              }}
              disabled={isInstall}
              className={`bg-[#00D380] disabled:cursor-not-allowed px-5 rounded-sm py-2 text-white md:text-xl`}
            >
              {isInstall ? "Installed" : `Install Now (${size} MB)`}
            </button>
          </div>
        </div>
      </div>
      <div className="divider divider-start md:py-10"></div>

      <div>
        <ResponsiveContainer width="100%" height={300}>
          <ComposedChart
            layout="vertical"
            data={ratings}
            margin={{ top: 10, bottom: 10, right: 20 }}
          >
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" scale="band" reversed />
            <Tooltip />
            <Bar dataKey="count" barSize={30} fill="#FF8811" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      <div className="divider divider-start py-5 "></div>

      <div>
        <p className="font-semibold text-2xl py-5">Description</p>
        <p className="text-gray-500">{description}</p>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default AppDetails;
