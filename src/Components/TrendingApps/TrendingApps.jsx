import React from "react";
import DownloadImg from '../../assets/icon-downloads.png'
import StarImg from '../../assets/icon-ratings.png'
import { Link } from "react-router";

const TrendingApps = ({ appData }) => {
    const {image,title ,ratingAvg , downloads ,id} = appData
  
  return (
    <Link to={`/appDetails/${id}`}>
    <div className="card bg-base-100 hover:scale-105 transition-transform duration-500 ease-in-out shadow-xl p-5 ">
        <img
        className="rounded-lg 2xl:h-[200px] sm:w-[400px] sm:h-[300px] w-[100px] h-[100px] object-cover mx-auto"
          src={image}
          alt="apps"/>
   
      <div>
        <h2 className="sm:text-2xl text-sm font-semibold py-5">{title}</h2>
        <div className="flex justify-between gap-3 text-[12px]">
          <div className="flex items-center sm:gap-2 space-x-1 text-[#00D390] bg-[#F1F5E8] py-2 sm:px-4 px-2 rounded-lg">
            <img className="sm:w-[15px] w-[12px]" src={DownloadImg} alt="downloadImage" />
            <p>{downloads}M</p>
          </div>
          <div className="flex items-center sm:gap-2 space-x-1 text-[#FF8811] bg-[#FFF0E1] py-2 sm:px-4 px-2 rounded-lg ">
            <img className="sm:w-[15px] w-[12px] " src={StarImg} alt="downloadImage" />
            <p>{ratingAvg}</p>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default TrendingApps;
