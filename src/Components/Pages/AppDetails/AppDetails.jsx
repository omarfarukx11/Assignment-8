import React from "react";
import { useLoaderData, useParams } from "react-router";
import DownloadImg from "../../../assets/icon-downloads.png";
import StarImg from "../../../assets/icon-ratings.png";
import LikeImg from "../../../assets/icon-review.png";
import {
  Bar,
  ComposedChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const AppDetails = () => {
  const { id } = useParams();
  const appId = parseInt(id);
  const appsData = useLoaderData();

  const singleAppDetails = appsData.find((app) => app.id === appId);
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

  return (
    <div className="py-20 bg-[#f5f5f5] px-10">
      <div className="flex flex-col lg:flex-row gap-10 relative">
        <div>
          {" "}
          <img className="w-[400px] h-[400px] lg:mx-0 mx-auto" src={image} alt="app" />
        </div>
        <div className="">
          <div className="lg:text-start text-center">
            <h1 className="text-5xl font-semibold">{title}</h1>
            <p className="text-xl pt-3">
              Developed By{" "}
              <span className="bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] bg-clip-text text-transparent text-xl">
                {" "}
                {companyName}{" "}
              </span>
            </p>
            <div className="divider mt-5 divider-start"></div>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 lg:justify-items-normal justify-items-center  gap-10 pt-5 ">
            <div className="justify-items-center">
              <img src={DownloadImg} alt="downloadImage" />
              <p className="py-3">Downloads</p>
              <h1 className="text-5xl font-semibold">{downloads}</h1>
            </div>
            <div className="justify-items-center" >
              <img src={StarImg} alt="downloadImage" />
              <p className="py-3">Average Ratings</p>
              <h1 className="text-5xl font-semibold">{ratingAvg}</h1>
            </div>
            <div className="justify-items-center">
              <img src={LikeImg} alt="downloadImage" />
              <p className="py-3">Total Reviews</p>
              <h1 className="text-5xl font-semibold">{reviews}</h1>
            </div>
          </div>
          <div className=" lg:absolute bottom-0 text-center md:py-0 py-10">
            <button className="btn btn-success text-white px-10 py-6 text-xl">
              {" "}
              Install Now ({size} MB){" "}
            </button>
          </div>
        </div>
      </div>
      <div className="divider divider-start py-10"></div>

      <div>
        <ResponsiveContainer width="100%" height={300}>
          <ComposedChart
            layout="vertical"
            data={ratings}
            margin={{ top: 10, bottom: 10 , right: 20 }}
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
    </div>
  );
};

export default AppDetails;
