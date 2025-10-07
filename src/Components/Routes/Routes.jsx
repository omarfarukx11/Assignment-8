import React from 'react';
import { createBrowserRouter, Route } from "react-router";

import Root from '../Pages/Root/Root';

const router = createBrowserRouter([
    {
        path:'/',
        Component:Root,
    }
])

export default router;