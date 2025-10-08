import React from 'react';
import Header from '../Header/Header';
import Footer from '../../Footer/Footer';
import { Outlet, useNavigation } from 'react-router';

const Root = () => {
  const navigation = useNavigation();

  return (
    <div>
      <Header />

      {navigation.state === "loading" && (
        <div className=" w-full h-1 bg-blue-500 animate-pulse z-50 text-center items-center">Loading</div>
      )}

      <Outlet />

      <Footer />
    </div>
  );
};

export default Root;
