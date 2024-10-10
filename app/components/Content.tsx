"use client";
import React from "react";

const Content = () => {
  
  return (
    <main>
      <hr className="border-black" />
      <h1 className="text-white text-3xl font-bold text-center pt-20 ">
        Explore Our Collections
      </h1>
      <h3 className="text-white text-center mt-2">
        Find the perfect beauty products for your skin type
      </h3>
      <h3 className="text-white text-center mt-2">Click Now</h3>
      <div  className="flex justify-center items-center space-x-28 text-black pb-3 pt-16">
        <div 
          className="  border-2 border-white bg-black text-white h-44 w-56 ml-2 mr-10 rounded-3xl p-6 inline-block hover:border-b-8 hover:h-60 hover:bg-[#8f5d2b] hover:font-bold  duration-700"
        >
          <b>Featured</b> <br /> <u>Women</u> <br /> Care Get expert care for women's health
        </div>
        <div
          
          className="border-2 border-white bg-black h-44 text-white w-56 mr-10 rounded-3xl p-6 inline-block hover:border-b-8 hover:h-60 hover:bg-[#8f5d2b] hover:font-bold   duration-700"
        >
          <b>Featured</b> <br />  <u>Mens</u> <br /> Care Get expert care for men's health
        </div>
        <div
          
          className="border-2 border-white bg-black text-white  h-44 w-56 mr-10 rounded-3xl p-6 inline-block hover:border-b-8 hover:h-60 hover:bg-[#8f5d2b] hover:font-bold   duration-700"
        >
          <b>Featured</b> <br /> <u>NewBorn Baby</u> <br /> Care Get expert care for newborn babies
        </div>
        <div
          
          className="border-2 border-white bg-black b[#] h-44 text-white w-56 mr-10 rounded-3xl p-6 inline-block hover:border-b-8 hover:h-60 hover:bg-[#8f5d2b] hover:font-bold    duration-700"
        >
          <b>Featured</b> <br /> <u>Aged Men</u> Care Get expert care for aged men
        </div>
        <div 
          className="border-2 border-white bg-black h-44 w-56 text-white rounded-3xl p-6 inline-block hover:border-b-8 hover:h-60 hover:bg-[#8f5d2b] hover:font-bold    duration-700"
        >
          <b>Featured</b> <br /> <u>Aged womens</u> <br /> Care Get expert care for aged women
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-red-600 text-2xl mt-48 underline">
          <b>Important Message </b>
        </h1>
        <h2 className="text-white pt-6 text-lg font-bold">
          The Dangers of Sharing Personal Items: <br /> A Warning for Boys and
          Girls
        </h2>
        <div>
          <p className="text-white text-balance p-3">
            Sharing personal items like toiletries, cosmetics, <br /> or
            clothing with the opposite gender can be hazardous. Boys, <br />{" "}
            beware of using girls' makeup, hair accessories, or fragrances,{" "}
            <br /> as they may contain harmful chemicals. Girls, avoid using
            boys' <br /> athletic equipment, razors.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Content;
