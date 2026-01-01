import React from "react";
import {
  assets,
  heroContent,
  heroTitle1,
  heroTitle2,
} from "../../assets/assets";


function Hero() {
  return (
    <div className=" relative ">
      <div className="container mx-auto px-9 py-2">
        <div className="flex flex-col md:flex-row items-center justify-center space-x-7">
          {/* left side  */}
          <div className="w-full md:w-1/2 mt-30-">
<div className="flex flex-col">
    <div className="px-4 py-2 5 w-[300px] bg-primary/40  text-white shadow rounded-full ]">
        <span className="text-dark font-semibold">Supercharge your website today</span>
    </div>
    <h1 className="text-4xl md:text-5xl text-dark/82 mt-6 font-extrabold mb-8">

            <span >{heroTitle1}</span> <br/>
            <span >{heroTitle2}</span>

    </h1>
            <p className="mt-4 text-xl  mb-8">{heroContent}</p>

            {/* hero btn section  */}
            <div className=" flex items-center  space-x-8">

                <button className="bg-primary/70 border-2 py-3 px-7 text-m/snug" type="button ">Get Started</button>
                <button className=" border-2 py-3 px-7 text-m/snug" type="button">View Plans</button>
            </div>
</div>

          </div>
          {/* right side  */}
          <div className="width-full md:w-1/2 flex justify-right align-baseline">
            <img className="object-cover w-full rounded" src={assets.HeroImg} alt="heroimg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
