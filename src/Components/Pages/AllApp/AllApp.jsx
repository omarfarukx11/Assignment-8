import React from 'react';
import DownloadImg from '../../../assets/icon-downloads.png'
import StarImg from '../../../assets//icon-ratings.png'

const AllApp = ({data}) => {
    const {image , title, ratingAvg , downloads} = data;
    return (
           <div className="card bg-base-100 shadow-xl p-5">
                <img
                className="rounded-lg"
                  src={image}
                  alt="apps"/>
           
              <div>
                <h2 className="text-2xl font-semibold py-5">{title}</h2>
                <div className="flex justify-between">
                  <div className="flex items-center gap-2 text-[#00D390] bg-[#F1F5E8] py-2 px-4 rounded-lg">
                    <img className="w-[15px]" src={DownloadImg} alt="downloadImage" />
                    <p>{downloads}</p>
                  </div>
                  <div className="flex items-center gap-2 text-[#FF8811] bg-[#FFF0E1] py-2 px-4 rounded-lg ">
                    <img className="w-[15px]" src={StarImg} alt="downloadImage" />
                    <p>{ratingAvg}</p>
                  </div>
                </div>
              </div>
            </div>
    );
};

export default AllApp;