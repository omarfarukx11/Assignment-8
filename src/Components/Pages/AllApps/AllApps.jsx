import React from 'react';
import { useLoaderData } from 'react-router';

const AllApps = () => {
    const allAppsData = useLoaderData()
    return (
        <div>
           {
            allAppsData.map(allApp => <AllApps key={allApp.id} allApp={allApp}></AllApps>)
           }
        </div>
    );
};

export default AllApps;