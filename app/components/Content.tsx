import React from "react";

const Content = () => {
  return (
    <main>
      <hr className="border-2 border-black" />
      <h1 className="text-white text-3xl font-bold text-center pt-10">
        Explore Our Collections
      </h1>
      <h3 className="text-white text-center mt-4">
        Find the perfect beauty products for your skin type
      </h3>
      <h3 className="text-white text-center mt-4">Click Now</h3>
      <div className="flex justify-center items-center space-x-5 text-black pb-3 pt-10">
        <div className="border-2 border-white bg-black text-white h-44 w-56 ml-2 mr-5 rounded-3xl p-6 inline-block hover:border-b-8 hover:h-60 hover:bg-[#8f5d2b] hover:font-bold duration-700">
          <p><b>Featured</b>
          <br />
          <u>Women</u>
          <br />
          Care Get expert care for women&apos;s  health</p>
        </div>
        <div className="border-2 border-white bg-black h-44 text-white w-56 mr-5 rounded-3xl p-6 inline-block hover:border-b-8 hover:h-60 hover:bg-[#8f5d2b] hover:duration-700">
          <p><b>Featured</b>
          <br />
          <u>Mens</u>
          <br />
          Care Get expert care for men&apos;s health</p>
        </div>
        <div className="border-2 border-white bg-black text-white h-44 w-56 mr-5 rounded-3xl p-6 inline-block hover:border-b-8 hover:h-60 hover:bg-[#8f5d2b] hover:font-bold duration-700">
          <p><b>Featured</b>
          <br />
          <u>NewBorn Baby</u>
          <br />
          Care Get expert care for newborn babies</p>
        </div>
        <div className="border-2 border-white bg-black text-white h-44 w-56 mr-5 rounded-3xl p-6 inline-block hover:border-b-8 hover:h-60 hover:bg-[#8f5d2b] hover:font-bold duration-700">
          <p><b>Featured</b>
          <br />
          <u>Aged Men</u>
          Care Get expert care for aged men</p>
        </div>
        <div className="border-2 border-white bg-black text-white h-44 w-56 rounded-3xl p-6 inline-block hover:border-b-8 hover:h-60 hover:bg-[#8f5d2b] hover:font-bold duration-700">
          <p><b>Featured</b>
          <br />
          <u>Aged womens</u>
          <br />
          Care Get expert care for aged women </p>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-red-600 text-2xl mt-10 underline">
         <p> <b>Important Message</b></p>
        </h1>
        <h2 className="text-white pt-6 text-lg font-bold">
          The Dangers of Sharing Personal Items:
          <br />
          A Warning for Boys and Girls
        </h2>
        <div>
          <p className="text-white text-center p-3">
            Sharing personal items like toiletries, cosmetics,
            <br />
            or clothing with the opposite gender can be hazardous. Boys,
            <br />
            beware of using girls makeup, hair accessories, or fragrances,
            <br />
            as they may contain harmful chemicals. Girls, avoid using boys
            athletic equipment, razors.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Content;
