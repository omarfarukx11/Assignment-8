import React from 'react';
import { CiSearch } from "react-icons/ci";
import { useLoaderData } from 'react-router';
import AllApp from '../AllApp/AllApp';

const Apps = () => {
    const allAppsData = useLoaderData()

    return (
        
        <div>
            <div className='text-center my-16'>
            <h1 className='text-5xl font-semibold'>Our All Applications</h1>
            <p className='text-gray-600 py-5'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex items-center md:flex-row flex-col gap-5 justify-between mb-5 text-xl font-semibold'>
                <p><span>(0)</span> Apps Found</p>
                <label className=" outline-none border-1 tabs-xl flex px-4 py-2 border-gray-200 rounded-lg items-center gap-4">
                    <CiSearch className='text-xl' />
                 <input type="search"  className='text-lg outline-none' required placeholder='Search' /> 
                </label>
            </div>
        <div className='grid xl:grid-cols-4 gap-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mb-20'>
            {
            allAppsData.map(data => <AllApp key={data.id} data ={data}></AllApp>)
        }
        </div>
        </div>
  
    );
};

export default Apps;