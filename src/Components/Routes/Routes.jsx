import React from 'react';
import { createBrowserRouter, Route } from "react-router";

import Root from '../Pages/Root/Root';
import Home from '../Pages/Home/Home';
import Apps from '../Pages/Apps/Apps';
import Installation from '../Pages/Installaton/Installation';
import AllApps from '../Pages/AllApps/AllApps';

const router = createBrowserRouter([
    {
        path:'/',
        Component:Root,
        children:[
            {
            index:true,
            loader: () => fetch('data.json'),
            Component:Home,
            },
            {
                path:'/apps',
                Component:Apps
            },
            {
                path:'/instal',
                Component:Installation
            },
            {
                path:'/allApps',
                loader:() => fetch('allData.json'),
                Component:AllApps
            }
        ]
    }
])

export default router;