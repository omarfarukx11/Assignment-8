import React from 'react';
import { getLocalStorageData } from '../../../Utility/AddLS';
import { useLoaderData } from 'react-router';
import Install from './Install';

const Installation = () => {
    const appsList = useLoaderData()
    const getStorageData  = getLocalStorageData()
    console.log(getStorageData)

    const filteredApp = appsList.filter(app =>
  getStorageData.includes(app.id.toString()));
    return (
        <div>
            {
                filteredApp.map(installApp => <Install installApp={installApp}></Install>)
            }
        </div>
    );
};

export default Installation;