import React from "react";
import { Design, PhotoGraphy, StandOut, Transform } from "../assets/images";

const Info = () => (
  <section className="w-full flex flex-1 flex-row  flex-wrap ">
    <div className="max-sm:flex-col-reverse flex ">
      <div className="basis-[50%] px-10 w-full  m-auto max-sm:text-center max-sm:py-5">
        <h2 className="text-5xl font-Fraunces font-semibold leading-tight max-sm:text-[30px]">
          Transform your
          <br />
          brand
        </h2>
        <p className="my-5 font-Barlow text-Darkcyan text-[24px] max-sm:text-xl">
          We are full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling viuals that do most
          of the marketing for you.
        </p>
        <span className="text-[20px] tracking-wide cursor-pointer  block font-Fraunces font-bold">
          LEARN MORE
        </span>
      </div>
      <div className="basis-[50%]">
        <img src={Transform} alt="img" className="w-[full]" />
      </div>
    </div>
    <div className="max-sm:flex-col flex">
      <div className="basis-[50%]">
        <img src={StandOut} alt="img" className="w-full" />
      </div>
      <div className="basis-[50%] px-10 w-full  m-auto max-sm:text-center max-sm:py-5">
        <h2 className="text-5xl font-Fraunces font-semibold leading-tight max-sm:text-[29px]">
          Stand out to the right
          <br />
          audience
        </h2>
        <p className="my-5 font-Barlow text-Darkcyan text-[24px] max-sm:text-xl">
          Using a collaborative formula of designers,researchers
          ,photographers,videographers, and copywriters, we'll build and extend
          your brand in digital places
        </p>
        <span className="text-[20px] tracking-wide cursor-pointer  block font-Fraunces font-bold">
          LEARN MORE
        </span>
      </div>
    </div>
    <div className="max-sm:flex-col flex ">
      <div className="flex relative basis-[50%] ">
        <div className="">
          <img src={Design} alt="img" className="w-[full] " />
        </div>
        <div className="absolute bottom-[10%] text-center">
          <h2 className="font-bold text-2xl font-Fraunces text-Dark">
            Graphic Design
          </h2>
          <p className="w-[50%] mx-auto mt-5 font-Barlow text-Dark font-medium">
            Great design makes you memorable. we deliver artwork that
            underscores your brand message and captures potential clients
            attention
          </p>
        </div>
      </div>

      <div className="flex relative basis-[50%] ">
        <div className="">
          <img src={PhotoGraphy} alt="img" className="w-[full] " />
        </div>
        <div className="absolute bottom-[10%] text-center">
          <h2 className="font-Fraunces font-bold text-2xl text-Darkblue">
            Photography
          </h2>
          <p className="w-[50%] mx-auto mt-5 font-Barlow text-Darkblue font-medium">
            Increase your credibility by getting the most stunning, high-quality
            photo that imporve your business image.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Info;
