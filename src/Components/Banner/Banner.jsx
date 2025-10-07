import React from "react";
import PlayStoreImg from '../../assets/fi_16076057.png'
import AppStoreImg from '../../assets/fi_5977575.png'
import HeroImg from '../../assets/hero.png'

const Banner = () => {
  return (
    <div className=" bg-[#f5f5f5] shadow-sm pt-20">
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-5xl font-bold text-center pb-5 ">
          We Build <br />
          <span className="bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] bg-clip-text text-transparent">
            Productive 
          </span> Apps
        </h1>
        <p className="text-center text-gray-600">
          At HERO.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
        <div className="card-actions justify-center pt-10">
                <div className="btn  flex items-center justify-center gap-3 py-5"> 
                <a href="https://play.google.com/store/apps?hl=en" target="main"><span className="flex items-center gap-3"><img className="w-[25px] " src={PlayStoreImg} alt="" /> Google Play </span></a>
                </div>
                <div className="btn  flex items-center justify-center gap-3 py-5"> 
                <a href="https://www.apple.com/app-store" target="main"><span className="flex items-center gap-3"><img className="w-[25px] " src={AppStoreImg} alt="" />App Store</span></a>
                 </div>
      
        </div>
      </div>

    <div>
        <div></div>
        <img className="mx-auto pt-10" src={HeroImg} alt="heroImage" />
    </div>
    <div className="bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] text-white px-20">
        <h1 className="text-center font-semibold lg:text-4xl text-2xl py-10
        ">Trusted by Millions, Built for You</h1>
        <div className="grid md:grid-cols-3 grid-cols-1 justify-items-center">
            <div className="text-center py-10">
                <p>Total Downloads</p>
                <h1 className="text-5xl font-semibold py-4">29.6M</h1>
                <p>21% more than last month</p>
            </div>
            <div className="text-center py-10">
                <p>Total Reviews</p>
                <h1 className="text-5xl font-semibold py-4">906K</h1>
                <p>46% more than last month</p>
            </div>
            <div className="text-center py-10">
                <p>Active Apps</p>
                <h1 className="text-5xl font-semibold py-4">132+</h1>
                <p>31 more will Launch</p>
            </div>
        </div>
    </div>
     </div>
  )
}

export default Banner;
