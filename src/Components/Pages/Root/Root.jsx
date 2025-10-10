import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../../Footer/Footer";
import { Outlet, useNavigation } from "react-router";
import Loader from "../Loader/Loader";

const Root = () => {
  const [loader, setLoader] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    setLoader(true);
    const timerSet = setTimeout(() => {
      if (navigation.state === "loading") {
        setLoader(true);
      } else {
        setLoader(false);
      }
    }, 400);

    const timeoutClear = () => clearTimeout(timerSet);
    return timeoutClear;
  }, [navigation.state]);

  return (
     <div>
    {loader ? 
      <div className="flex items-center justify-center h-screen">
        <Loader />
      </div>
     : 
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    }
  </div>
);
};

export default Root;
