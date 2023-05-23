import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featured from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
  return (
    <div className="background bg-fixed p-6 mb-10 pb-32">
      <SectionTitle
        subHeading="check it out"
        heading="featured item"
      ></SectionTitle>
      <div className=" max-w-4xl mx-auto bg-black  bg-opacity-10 md:flex justify-center items-center">
            <div className="md:w-1/2">
            <img className="md:w-[400px] shadow-2xl rounded-lg" src={featured} alt="" />
            </div>
            <div className="md:w-1/2 text-white  space-y-8">
                  <p>Aug 20, 2023</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt possimus veritatis repudiandae officia assumenda quod, voluptates soluta eos animi non aliquid fugit saepe voluptatibus minus perferendis excepturi, debitis beatae minima?</p>
                  <button className="btn btn-outline border-0 border-b-4 text-white"> order now</button>
            </div>
      </div>
    </div>
  );
};

export default Featured;
