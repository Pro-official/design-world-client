import React, { useEffect } from "react";
import Navigation from "../Shared/Navigation";
import Banner from "./Banner";
import Designs from "./Designs/Designs";
import { XlviLoader } from "react-awesome-loaders";
import "../../App.css";
import About from "./About";
import TopDesign from "./TopDesign";
import Footer from "./Footer/Footer";
// import Reviews from "./Reviews/Reviews";

const Home = () => {
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  return (
    <>
      {loading ? (
        <XlviLoader
          className="loader ms-auto me-auto mt-5 p-5"
          boxColors={["#EF4444", "#F59E0B", "#6366F1"]}
          desktopSize={"128px"}
          mobileSize={"100px"}
        />
      ) : (
        <>
          <Navigation></Navigation>
          <Banner></Banner>
          <Designs></Designs>
          <About></About>
          <TopDesign></TopDesign>
          {/* <Reviews></Reviews> */}
          <Footer></Footer>
        </>
      )}
    </>
  );
};

export default Home;
