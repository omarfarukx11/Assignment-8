import React from 'react';
import { createBrowserRouter, Route } from "react-router";
import Root from '../Pages/Root/Root';
import Home from '../Pages/Home/Home';
import Apps from '../Pages/Apps/Apps';
import Installation from '../Pages/Installaton/Installation';
import AppDetails from '../Pages/AppDetails/AppDetails';



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
                loader: () => fetch('/data.json'),
                Component:Apps
            },
            {
                path:'/instal',
                Component:Installation
            },
            {
                path:'/appDetails/:id',
                loader: ({params}) => fetch('data.json'),
                Component:AppDetails,
            }
            
            
        
        ]
    }
])

export default router;