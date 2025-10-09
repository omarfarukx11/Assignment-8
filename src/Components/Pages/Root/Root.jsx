import React from 'react';
import Header from '../Header/Header';
import Footer from '../../Footer/Footer';
import { Outlet, useNavigation } from 'react-router';
import Loader from '../Loader/Loader';

const Root = () => {
  const navigation = useNavigation();

  return (
    <div>
      <Header />
      {navigation.state === "loading" && (
        <div className=" w-full text-5xl flex  h-[100vh] z-50 text-center items-center justify-center font-bold gap-5">
         <Loader></Loader>
          </div>
      )}

      <Outlet />

      <Footer />
    </div>
  );
};

export default Root;
