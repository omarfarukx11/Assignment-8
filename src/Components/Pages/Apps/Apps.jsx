import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { useLoaderData } from 'react-router';
import AllApp from '../AllApp/AllApp';
import AppNotFound from '../AppNotFound/AppNotFound';

const Apps = () => {
    const allAppsData = useLoaderData()
    const [searchData , setSearchData] = useState('')

    const filteredApps = allAppsData.filter(app => app.title.toLowerCase().includes(searchData.toLowerCase()))

    return (
        
        <div>
            <div className='text-center my-16 px-5'>
            <h1 className='text-5xl font-semibold'>Our All Applications</h1>
            <p className='text-gray-600 py-5'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex items-center md:flex-row flex-col gap-5 justify-between mb-5 text-xl font-semibold'>
                <p><span>({filteredApps.length})</span> Apps Found</p>
                <label className=" outline-none border-1 tabs-xl flex px-4 py-2 border-gray-200 rounded-lg items-center gap-4">
                    <CiSearch className='text-xl' />
                 <input onChange={e => setSearchData(e.target.value)} type="search"  className='text-lg outline-none' required placeholder='Search' /> 
                </label>
            </div>
          {     
            filteredApps.length > 0 ?
             <div className='grid xl:grid-cols-4 gap-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mb-20'>
            {
                filteredApps.map(data => <AllApp key={data.id} data ={data}></AllApp>)
            }
                </div>
            : 
            <AppNotFound></AppNotFound>
            }
        </div>
  
    );
};

export default Apps;

          