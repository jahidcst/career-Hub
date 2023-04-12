import React from "react";
import Header from "../Header/Header";

import CategoryList from "./CategoryList/CategoryList";
import FeaturedJob from "./FeaturedJobs/FeaturedJob";
import { useLoaderData } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <div className="bg-gray-100">
        <div className="my-container p-5 lg:p-0 lg:flex-row flex-col flex items-center justify-between">
          <div className="lg:w-[570px] space-y-2 lg:space-y-6">
          <h1 className='text-4xl font-bold mb-3'>find Jobs <br /> Here  To  Build <br /> <span className='text-purple-600'>Your Career</span></h1>
            <p className="text-gray-700">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <button className="btn-primary">Get Started</button>
          </div>
          <div>
            <img src="https://i.ibb.co/3vmyDPc/hardy.png" alt="" />
          </div>
        </div>
      </div>
      <div className="my-container p-3">
        <CategoryList />
        <FeaturedJob />
      </div>
    </div>
  );
};

export default Home;