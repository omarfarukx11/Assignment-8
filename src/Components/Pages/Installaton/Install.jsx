import React from "react";
import DownloadImg from "../../../assets/icon-downloads.png";
import StarImg from "../../../assets/icon-ratings.png";

const Install = ({ installApp , handleUninstall }) => {
  const { title, image, size, downloads, ratingAvg ,id } = installApp;
  return (
    <div className="px-10 mt-5">
      <div className="flex px-5 justify-between items-center py-4 shadow-xl rounded-xl bg-[#ffffff]">
        <div className="flex items-center gap-5 ">
          <div className="rounded-xl flex-1">
            <img className="w-[80px] rounded-xl " src={image} alt="app" />{" "}
          </div>
          <div>
            <h1 className="text-2xl pb-3 font-semibold">{title}</h1>
            <div >
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-2 text-[#00D390] bg-[#F1F5E8] py-2 px-4 rounded-lg">
                  <img
                    className="w-[15px]"
                    src={DownloadImg}
                    alt="downloadImage"
                  />
                  <p>{downloads}</p>
                </div>
                <div className="flex items-center gap-2 text-[#FF8811] bg-[#FFF0E1] py-2 px-4 rounded-lg ">
                  <img className="w-[15px]" src={StarImg} alt="downloadImage" />
                  <p>{ratingAvg}</p>
                </div>
                <p className="text-xl text-gray-600">{size} MB</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
            <button onClick={() => {handleUninstall(id ,title)}} className="btn btn-success text-white px-10 py-6 text-xl">
              Uninstall
            </button>
          </div>
      </div>


    </div>
  );
};

export default Install;
